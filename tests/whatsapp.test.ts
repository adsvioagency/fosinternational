// Run with: npm test  (Node 22.18+ strips TypeScript types natively)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildMessage,
  buildWhatsAppUrl,
  validateName,
  validatePhone,
  validateMessage,
  validateService,
  resolveServiceParam,
  WHATSAPP_DIGITS,
  NOT_SURE_ID,
  OTHER_COUNTRY_ID,
} from '../src/lib/whatsapp.ts';

const NBSP = ' ';

test('French message follows the agreed format and omits empty optional lines', () => {
  const msg = buildMessage(
    { firstName: 'Marie', lastName: 'Jean', phone: '+1 809 555 0123', serviceLabel: 'Visa de fiancé(e) K-1/K-2', message: '', preference: '' },
    'fr'
  );
  assert.equal(
    msg,
    [
      'Bonjour à l’équipe Fernando OMG Services (FOS),',
      '',
      'Je souhaite obtenir des informations / demander une consultation.',
      '',
      `Prénom et nom${NBSP}: Marie Jean`,
      `Téléphone / WhatsApp${NBSP}: +1 809 555 0123`,
      `Service${NBSP}: Visa de fiancé(e) K-1/K-2`,
      '',
      'Demande depuis le site — Français.',
    ].join('\n')
  );
  assert.ok(!msg.includes('Ma demande'));
  assert.ok(!msg.includes('Préférence'));
});

test('Spanish message uses Spanish labels', () => {
  const msg = buildMessage(
    { firstName: 'Ana', lastName: 'Pérez', phone: '+1 809 555 0123', serviceLabel: 'Visa para Colombia (viaje y estudios)', message: 'Quiero estudiar en Medellín.', preference: 'any' },
    'es'
  );
  assert.ok(msg.startsWith('Hola, equipo de Fernando OMG Services (FOS):'));
  assert.ok(msg.includes('Nombre y apellido: Ana Pérez'));
  assert.ok(msg.includes('Mi solicitud: Quiero estudiar en Medellín.'));
  assert.ok(msg.includes('Preferencia: Sin preferencia'));
  assert.ok(msg.endsWith('Enviado desde el sitio web — Español.'));
});

test('English message includes optional request and preference when supplied', () => {
  const msg = buildMessage(
    { firstName: 'John', lastName: 'Doe', phone: '+1 849 000 0000', serviceLabel: 'Study in Canada', message: 'I have a letter of acceptance.', preference: 'online' },
    'en'
  );
  assert.ok(msg.startsWith('Hello Fernando OMG Services (FOS) team,'));
  assert.ok(msg.includes('My request: I have a letter of acceptance.'));
  assert.ok(msg.includes('Preference: Online consultation'));
  assert.ok(msg.endsWith('Sent from the website — English.'));
});

test('URL targets the confirmed number and round-trips special characters and line breaks', () => {
  const tricky = 'L’équipe & moi : « 100 % » ?\nDeuxième ligne #1 + / = <b>';
  const msg = buildMessage(
    { firstName: 'Jean-Éric', lastName: 'D’Haïti', phone: '+509 3712-3456', serviceLabel: 'Traduction de documents', message: tricky, preference: 'office' },
    'fr'
  );
  const url = buildWhatsAppUrl(msg);
  assert.equal(WHATSAPP_DIGITS, '18493998859');
  assert.ok(url.startsWith('https://wa.me/18493998859?text='));
  const parsed = new URL(url);
  assert.equal(parsed.hostname, 'wa.me');
  assert.equal(parsed.pathname, '/18493998859');
  assert.equal(parsed.searchParams.get('text'), msg);
  assert.equal([...parsed.searchParams.keys()].join(','), 'text', 'ampersands must be encoded, leaving a single parameter');
  assert.ok(msg.includes('Deuxième ligne #1'));
});

test('single-line fields cannot inject extra lines', () => {
  const msg = buildMessage(
    { firstName: 'Ana\nService : faux', lastName: 'Lopez', phone: '+1 809 000 0000', serviceLabel: 'X', message: '', preference: '' },
    'fr'
  );
  assert.ok(msg.includes(`Prénom et nom${NBSP}: Ana Service : faux Lopez`));
});

test('names accept accents, hyphens, apostrophes and non-Latin scripts', () => {
  for (const n of ['Jean-Éric', 'D’Haïti', "O'Brien", 'Marie Claire', 'José', 'Nguyễn', 'Zoë', '李']) {
    assert.equal(validateName(n), null, n);
  }
  assert.equal(validateName('   '), 'required');
  assert.equal(validateName('1234'), 'name');
});

test('phone accepts sensible international formats', () => {
  for (const p of ['+1 (849) 399-8859', '+509 3712 3456', '809.555.0123', '+33 6 12 34 56 78', '8493998859']) {
    assert.equal(validatePhone(p), null, p);
  }
  assert.equal(validatePhone(''), 'required');
  assert.equal(validatePhone('12345'), 'phone');
  assert.equal(validatePhone('call me'), 'phone');
  assert.equal(validatePhone('+1 234 567 890 123 456 7'), 'phone');
});

test('message is optional except when the visitor is not sure', () => {
  assert.equal(validateMessage('', 'us-fiance'), null);
  assert.equal(validateMessage('', NOT_SURE_ID), 'needDetails');
  assert.equal(validateMessage('Je voudrais étudier.', NOT_SURE_ID), null);
  assert.equal(validateMessage('x'.repeat(601), 'us-fiance'), 'tooLong');
});

test('"other country" requires the destination', () => {
  assert.equal(validateMessage('', OTHER_COUNTRY_ID), 'needCountry');
  assert.equal(validateMessage('Pérou', OTHER_COUNTRY_ID), null);
  assert.equal(validateService(OTHER_COUNTRY_ID, ['us-fiance']), null);
  assert.equal(resolveServiceParam(OTHER_COUNTRY_ID, ['us-fiance']), OTHER_COUNTRY_ID);
});

test('service param fails safely', () => {
  const known = ['us-fiance', 'ca-study'];
  assert.equal(resolveServiceParam('ca-study', known), 'ca-study');
  assert.equal(resolveServiceParam('not-sure', known), NOT_SURE_ID);
  assert.equal(resolveServiceParam('<script>', known), '');
  assert.equal(resolveServiceParam(null, known), '');
  assert.equal(validateService('', known), 'required');
  assert.equal(validateService('bogus', known), 'required');
  assert.equal(validateService(NOT_SURE_ID, known), null);
});
