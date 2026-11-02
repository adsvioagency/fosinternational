// Inquiry form behaviour. Data stays in memory (form fields) only: nothing is stored,
// logged, sent to analytics or placed in a URL other than the user-initiated wa.me link.
import {
  buildMessage,
  buildWhatsAppUrl,
  validateMessage,
  validateName,
  validatePhone,
  validateService,
  resolveServiceParam,
  MESSAGE_MAX,
  NOT_SURE_ID,
  OTHER_COUNTRY_ID,
  SPECIAL_IDS,
  type FieldName,
  type InquiryLang,
  type Preference,
} from '../lib/whatsapp';

type ErrorDict = Record<FieldName, Record<string, string>>;

export interface InquiryController {
  root: HTMLElement;
  setService(id: string): void;
  focusFirst(): void;
}

const controllers = new WeakMap<HTMLElement, InquiryController>();

export const getController = (root: HTMLElement) => controllers.get(root);

export function initInquiryForms() {
  document.querySelectorAll<HTMLElement>('[data-inquiry-form]').forEach((root) => {
    if (controllers.has(root)) return;
    controllers.set(root, setup(root));
  });
}

function setup(root: HTMLElement): InquiryController {
  const lang = (root.dataset.lang as InquiryLang) || 'fr';
  const labels: Record<string, string> = JSON.parse(root.dataset.labels || '{}');
  const errors: ErrorDict = JSON.parse(root.dataset.errors || '{}');
  const knownIds = Object.keys(labels).filter((id) => !SPECIAL_IDS.includes(id));

  const form = root.querySelector<HTMLFormElement>('[data-form]')!;
  const stepForm = root.querySelector<HTMLElement>('[data-step="form"]')!;
  const stepPreview = root.querySelector<HTMLElement>('[data-step="preview"]')!;
  const summary = root.querySelector<HTMLElement>('[data-error-summary]')!;
  const summaryList = root.querySelector<HTMLElement>('[data-error-list]')!;
  const preview = root.querySelector<HTMLElement>('[data-preview]')!;
  const previewHeading = root.querySelector<HTMLElement>('[data-preview-heading]')!;
  const waLink = root.querySelector<HTMLAnchorElement>('[data-wa-link]')!;
  const status = root.querySelector<HTMLElement>('[data-status]')!;
  const count = root.querySelector<HTMLElement>('[data-count]')!;
  const hint = root.querySelector<HTMLElement>('[data-hint-default]')!;
  const msgOptional = root.querySelector<HTMLElement>('[data-msg-optional]')!;
  const msgRequired = root.querySelector<HTMLElement>('[data-msg-required]')!;

  const el = {
    firstName: form.elements.namedItem('firstName') as HTMLInputElement,
    lastName: form.elements.namedItem('lastName') as HTMLInputElement,
    phone: form.elements.namedItem('phone') as HTMLInputElement,
    service: form.elements.namedItem('service') as HTMLSelectElement,
    message: form.elements.namedItem('message') as HTMLTextAreaElement,
  };
  const touched = new Set<FieldName>();
  let currentMessage = '';

  const validators: Record<FieldName, () => string | null> = {
    firstName: () => validateName(el.firstName.value),
    lastName: () => validateName(el.lastName.value),
    phone: () => validatePhone(el.phone.value),
    service: () => validateService(el.service.value, knownIds),
    message: () => validateMessage(el.message.value, el.service.value),
  };

  function showError(name: FieldName, code: string | null) {
    const input = el[name];
    const box = root.querySelector<HTMLElement>(`[data-field="${name}"] [data-error]`);
    if (code) {
      input.setAttribute('aria-invalid', 'true');
      if (box) box.textContent = errors[name]?.[code] ?? '';
    } else {
      input.removeAttribute('aria-invalid');
      if (box) box.textContent = '';
    }
  }

  const check = (name: FieldName) => {
    const code = validators[name]();
    showError(name, code);
    return code;
  };

  function updateMessageMode() {
    const notSure = el.service.value === NOT_SURE_ID;
    const other = el.service.value === OTHER_COUNTRY_ID;
    const required = notSure || other;
    msgOptional.hidden = required;
    msgRequired.hidden = !required;
    el.message.required = required;
    hint.textContent = (notSure ? hint.dataset.hintNotsure : other ? hint.dataset.hintOther : hint.dataset.hintDefault) ?? '';
  }

  function updateCount() {
    const left = MESSAGE_MAX - el.message.value.trim().length;
    const template = count.dataset.template ?? '';
    count.textContent = template.replace('999999', String(left));
    count.classList.toggle('is-over', left < 0);
  }

  (Object.keys(el) as FieldName[]).forEach((name) => {
    const input = el[name];
    input.addEventListener('blur', () => {
      if (input.value.trim() || touched.has(name)) {
        touched.add(name);
        check(name);
      }
    });
    input.addEventListener('input', () => {
      if (touched.has(name)) check(name);
    });
  });

  el.service.addEventListener('change', () => {
    touched.add('service');
    check('service');
    updateMessageMode();
    if (touched.has('message')) check('message');
  });
  el.message.addEventListener('input', updateCount);

  function readPreference(): Preference {
    const checked = form.querySelector<HTMLInputElement>('input[name="preference"]:checked');
    return (checked?.value as Preference) || '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const failed: FieldName[] = [];
    (Object.keys(el) as FieldName[]).forEach((name) => {
      touched.add(name);
      if (check(name)) failed.push(name);
    });

    if (failed.length) {
      summaryList.replaceChildren(
        ...failed.map((name) => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `#${el[name].id}`;
          a.textContent = root.querySelector(`[data-field="${name}"] [data-error]`)?.textContent ?? '';
          a.addEventListener('click', (ev) => {
            ev.preventDefault();
            el[name].focus();
          });
          li.append(a);
          return li;
        })
      );
      summary.hidden = false;
      summary.focus();
      return;
    }

    summary.hidden = true;
    currentMessage = buildMessage(
      {
        firstName: el.firstName.value,
        lastName: el.lastName.value,
        phone: el.phone.value,
        serviceLabel: labels[el.service.value] ?? '',
        message: el.message.value,
        preference: readPreference(),
      },
      lang
    );
    preview.textContent = currentMessage; // textContent: user input is never parsed as HTML
    waLink.href = buildWhatsAppUrl(currentMessage);
    status.textContent = '';
    status.classList.remove('is-error');
    stepForm.hidden = true;
    stepPreview.hidden = false;
    previewHeading.focus();
  });

  waLink.addEventListener('click', () => {
    // We cannot know whether the message was sent; only remind the visitor to press Send.
    window.setTimeout(() => {
      status.classList.remove('is-error');
      status.textContent = status.dataset.afterOpen ?? '';
    }, 400);
  });

  root.querySelector<HTMLButtonElement>('[data-copy]')!.addEventListener('click', async () => {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(currentMessage);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      // Fallback: select the preview text so the visitor can copy it manually.
      const range = document.createRange();
      range.selectNodeContents(preview);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      try {
        ok = document.execCommand('copy');
      } catch {
        ok = false;
      }
    }
    status.classList.toggle('is-error', !ok);
    status.textContent = (ok ? status.dataset.copied : status.dataset.copyFailed) ?? '';
  });

  const showForm = () => {
    stepPreview.hidden = true;
    stepForm.hidden = false;
    el.firstName.focus();
  };
  root.querySelector<HTMLButtonElement>('[data-edit]')!.addEventListener('click', showForm);

  const setService = (id: string) => {
    const value = resolveServiceParam(id, knownIds);
    if (!value) return;
    // A different service from another call to action makes a prepared preview stale.
    if (value !== el.service.value && !stepPreview.hidden) {
      stepPreview.hidden = true;
      stepForm.hidden = false;
    }
    el.service.value = value;
    updateMessageMode();
    if (touched.has('service')) check('service');
  };

  // Preselect from ?service= (locale-neutral ID). Unknown values are ignored.
  const param = new URLSearchParams(window.location.search).get('service');
  if (param && root.closest('[data-page-form]')) setService(param);

  updateMessageMode();
  updateCount();

  return {
    root,
    setService,
    focusFirst: () => {
      const target = !stepPreview.hidden
        ? previewHeading
        : (Object.values(el).find((i) => !i.value) as HTMLElement | undefined) ?? el.firstName;
      target.focus();
    },
  };
}
