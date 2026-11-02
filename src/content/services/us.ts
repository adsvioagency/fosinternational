import type { ServiceSource } from '../types';
import { src } from '../sources';

export const usServices: ServiceSource[] = [
  {
    id: 'us-fiance',
    group: 'us',
    destinations: ['us'],
    needs: ['family'],
    icon: 'heart',
    homePriority: 1,
    usRestrictionNotice: true,
    related: ['us-family', 'interpreting', 'translation'],
    relatedResources: ['k1-steps', 'before-consultation'],
    sources: [src.uscisFiance, src.uscisI129f, src.dosK1, src.dosSuspension],
    reviewed: '2026-10-18',
    fr: {
      slug: 'visa-fiance-etats-unis',
      label: 'Visa de fiancé(e) K-1/K-2',
      h1: 'Visa de fiancé(e) K-1/K-2 pour les États-Unis',
      metaTitle: 'Visa fiancé(e) K-1/K-2 depuis Santo Domingo',
      metaDescription:
        'Comprendre et préparer un dossier de visa de fiancé(e) K-1/K-2 depuis la République Dominicaine : grandes étapes, documents à rassembler, interprétation et accompagnement.',
      summary: 'Comprendre les étapes, organiser vos documents et préparer l’entretien à l’ambassade.',
      intro: [
        'Le visa de fiancé(e) K-1 permet à la personne fiancée d’un citoyen ou d’une citoyenne des États-Unis d’entrer dans le pays pour s’y marier. Le visa K-2 concerne ses enfants non mariés de moins de 21 ans.',
        'La démarche passe par plusieurs administrations et plusieurs étapes bien distinctes. Nous vous aidons à comprendre où vous en êtes, à préparer vos documents avec soin et à communiquer clairement à chaque étape.',
      ],
      forWho: [
        'Vous êtes fiancé(e) à un citoyen ou une citoyenne des États-Unis.',
        'Votre partenaire a déposé, ou souhaite déposer, une pétition I-129F.',
        'Vous avez reçu un avis et souhaitez comprendre la suite.',
        'Vos enfants pourraient vous accompagner avec un visa K-2.',
      ],
      whatItIs: [
        'Selon l’USCIS (le service américain de la citoyenneté et de l’immigration), le citoyen ou la citoyenne des États-Unis dépose d’abord le formulaire I-129F pour faire reconnaître la relation de fiançailles. Les deux personnes doivent être libres de se marier et, en règle générale, s’être rencontrées en personne au cours des deux années précédant la demande.',
        'Une pétition approuvée n’est pas un visa. Après l’approbation, le dossier est transmis au Département d’État, puis à l’ambassade ou au consulat compétent, qui mène l’entretien et décide de délivrer ou non le visa. À l’arrivée, l’agent de la frontière décide de l’admission, et le mariage doit avoir lieu dans les 90 jours suivant l’entrée.',
      ],
      howWeHelp: [
        'Vous expliquer simplement chaque étape : pétition, transfert du dossier, préparation consulaire, entretien.',
        'Vous aider à organiser vos documents et à vérifier qu’ils correspondent aux consignes reçues.',
        'Préparer l’entretien : quoi apporter et comment présenter votre situation avec clarté et honnêteté.',
        'Assurer l’interprétation avec votre partenaire et les institutions, selon les règles de chaque lieu.',
        'Vous accompagner aux rendez-vous lorsque l’institution le permet.',
      ],
      steps: [
        {
          title: 'Premier échange',
          text: 'Vous nous présentez votre situation et l’étape où vous en êtes. Nous vous disons franchement ce que nous pouvons faire, y compris lorsque les règles actuelles limitent les possibilités.',
        },
        {
          title: 'Pétition I-129F',
          text: 'Votre partenaire dépose la pétition auprès de l’USCIS. Nous vous aidons à comprendre les pièces demandées et à organiser les vôtres.',
        },
        {
          title: 'Préparation consulaire',
          text: 'Après l’approbation viennent les formulaires, l’examen médical et les documents demandés par l’ambassade.',
        },
        {
          title: 'Entretien et décision',
          text: 'L’ambassade ou le consulat mène l’entretien et prend la décision. Nous vous aidons à vous y préparer sereinement.',
        },
      ],
      checklist: [
        'Votre passeport et celui des enfants concernés',
        'Les avis ou courriers déjà reçus (USCIS, centre national des visas, ambassade)',
        'Vos actes d’état civil : naissance et, le cas échéant, divorce ou décès d’un ancien conjoint',
        'Des éléments sur votre relation, par exemple des photos de vos rencontres',
        'Vos questions, notées à l’avance',
      ],
      faqs: [
        {
          q: 'Une pétition I-129F approuvée signifie-t-elle que j’ai le visa ?',
          a: 'Non. L’approbation de la pétition par l’USCIS est une étape. Le visa est délivré, ou refusé, par l’ambassade ou le consulat après l’entretien. L’entrée aux États-Unis est ensuite décidée à la frontière.',
        },
        {
          q: 'Combien de temps dure la démarche ?',
          a: 'Les délais varient selon les dossiers et les services concernés, et ils évoluent. Nous ne promettons pas de délai : nous vous aidons à suivre votre dossier et à préparer chaque étape à temps.',
        },
        {
          q: 'Mes enfants peuvent-ils venir avec moi ?',
          a: 'Les enfants non mariés de moins de 21 ans peuvent demander un visa K-2, à condition d’être mentionnés dans la pétition I-129F. Ils peuvent voyager avec vous ou après vous, mais pas avant vous.',
        },
        {
          q: 'Que se passe-t-il après l’arrivée ?',
          a: 'Le mariage doit avoir lieu dans les 90 jours. Une demande de résidence permanente (formulaire I-485) peut ensuite être déposée auprès de l’USCIS. Chaque étape a ses propres conditions.',
        },
        {
          q: 'Je suis de nationalité haïtienne : puis-je commencer ?',
          a: 'Les restrictions actuelles suspendent la délivrance de la plupart des visas américains aux ressortissants haïtiens, sauf exceptions limitées. Parlons-en avant toute dépense : nous examinerons votre nationalité, vos passeports et l’évolution des règles officielles.',
        },
      ],
    },
    en: {
      slug: 'us-fiance-visa',
      label: 'K-1/K-2 fiancé(e) visa',
      h1: 'U.S. K-1/K-2 fiancé(e) visa',
      metaTitle: 'U.S. K-1/K-2 fiancé(e) visa preparation in Santo Domingo',
      metaDescription:
        'Understand and prepare a U.S. K-1/K-2 fiancé(e) visa case from the Dominican Republic: main milestones, documents to gather, interpreting and personal support.',
      summary: 'Understand each milestone, organise your documents and prepare for the embassy interview.',
      intro: [
        'The K-1 fiancé(e) visa allows the fiancé(e) of a U.S. citizen to travel to the United States to marry there. The K-2 visa is for their unmarried children under 21.',
        'The process involves several agencies and clearly separate milestones. We help you understand where you are, prepare your documents carefully and communicate clearly at every stage.',
      ],
      forWho: [
        'You are engaged to a U.S. citizen.',
        'Your partner has filed, or plans to file, Form I-129F.',
        'You have received a notice and want to understand what comes next.',
        'Your children may travel with you on K-2 visas.',
      ],
      whatItIs: [
        'According to USCIS (U.S. Citizenship and Immigration Services), the U.S. citizen first files Form I-129F to have the engagement recognised. Both partners must be free to marry and, as a general rule, must have met in person within the two years before filing.',
        'An approved petition is not a visa. After approval, the case moves to the Department of State and then to the relevant embassy or consulate, which conducts the interview and decides whether to issue the visa. On arrival, a border officer decides on admission, and the marriage must take place within 90 days of entry.',
      ],
      howWeHelp: [
        'Explain each milestone in plain language: petition, case transfer, consular preparation, interview.',
        'Help you organise your documents and check them against the instructions you received.',
        'Prepare for the interview: what to bring and how to present your situation clearly and honestly.',
        'Interpret between you, your partner and institutions, within each venue’s rules.',
        'Accompany you to appointments where the institution allows it.',
      ],
      steps: [
        {
          title: 'First conversation',
          text: 'You tell us about your situation and where your case stands. We tell you honestly what we can do, including when current rules limit the options.',
        },
        {
          title: 'Form I-129F',
          text: 'Your partner files the petition with USCIS. We help you understand the evidence requested and organise your own documents.',
        },
        {
          title: 'Consular preparation',
          text: 'After approval come the forms, the medical examination and the documents requested by the embassy.',
        },
        {
          title: 'Interview and decision',
          text: 'The embassy or consulate conducts the interview and makes the decision. We help you prepare calmly.',
        },
      ],
      checklist: [
        'Your passport and those of any children included',
        'Notices or letters already received (USCIS, National Visa Center, embassy)',
        'Civil records: birth certificate and, if applicable, divorce or death certificate of a former spouse',
        'Evidence of your relationship, such as photos of your meetings',
        'Your questions, written down in advance',
      ],
      faqs: [
        {
          q: 'Does an approved I-129F petition mean I have the visa?',
          a: 'No. USCIS approval of the petition is one milestone. The visa is issued, or refused, by the embassy or consulate after the interview. Entry into the United States is then decided at the border.',
        },
        {
          q: 'How long does the process take?',
          a: 'Timelines vary by case and by agency, and they change. We do not promise a timeline; we help you follow your case and prepare each step on time.',
        },
        {
          q: 'Can my children come with me?',
          a: 'Unmarried children under 21 may apply for K-2 visas if they are listed on Form I-129F. They may travel with you or after you, but not before you.',
        },
        {
          q: 'What happens after arrival?',
          a: 'The marriage must take place within 90 days. An application for permanent residence (Form I-485) can then be filed with USCIS. Each step has its own requirements.',
        },
        {
          q: 'I am a Haitian national. Can I start?',
          a: 'Current restrictions suspend the issuance of most U.S. visas to Haitian nationals, with limited exceptions. Let’s talk before you spend anything: we will look at your nationality, your passports and the latest official rules.',
        },
      ],
    },
  },
  {
    id: 'us-tourist',
    group: 'us',
    destinations: ['us'],
    needs: ['travel'],
    icon: 'plane',
    homePriority: 2,
    usRestrictionNotice: true,
    related: ['interpreting', 'translation', 'ca-visitor'],
    relatedResources: ['us-tourist-first-step', 'before-consultation'],
    sources: [src.dosVisitor, src.dosSuspension, src.usEmbassyDo],
    reviewed: '2026-10-18',
    fr: {
      slug: 'visa-touriste-etats-unis',
      label: 'Visa touriste américain',
      h1: 'Préparer une demande de visa touriste pour les États-Unis',
      metaTitle: 'Préparation visa touriste américain (B-1/B-2) à Santo Domingo',
      metaDescription:
        'Consultation et préparation d’une demande de visa visiteur américain B-1/B-2 depuis la République Dominicaine : formulaire, documents, préparation de l’entretien.',
      summary: 'Faire le point sur votre projet de voyage, remplir le formulaire avec soin et préparer l’entretien.',
      intro: [
        'Le visa visiteur américain, souvent appelé visa touriste (catégorie B-2, ou B-1/B-2), concerne les séjours temporaires : tourisme, visite familiale, soins médicaux ou certains déplacements d’affaires.',
        'Une demande bien préparée est une demande honnête, cohérente et complète. Nous vous aidons à comprendre la démarche, à remplir le formulaire avec exactitude et à vous présenter sereinement à l’entretien.',
      ],
      forWho: [
        'Vous souhaitez rendre visite à des proches ou voyager aux États-Unis.',
        'Vous préparez une première demande ou un renouvellement.',
        'Vous avez déjà essuyé un refus et voulez comprendre la situation.',
        'Vous avez besoin d’aide pour comprendre le formulaire ou l’entretien en anglais ou en espagnol.',
      ],
      whatItIs: [
        'La demande se fait en ligne avec le formulaire DS-160, puis par le paiement des frais et la prise de rendez-vous. Le plus souvent, un entretien a lieu à l’ambassade ou au consulat. L’agent consulaire évalue notamment le but du voyage et vos attaches dans votre pays de résidence.',
        'Le visa n’est jamais automatique, et un visa délivré ne garantit pas l’entrée : la décision finale appartient à l’agent de la frontière. Aucun intermédiaire ne peut obtenir un visa à votre place.',
      ],
      howWeHelp: [
        'Faire le point sur votre projet de voyage et sur votre situation.',
        'Vous aider à remplir le formulaire DS-160 avec des informations exactes et cohérentes.',
        'Organiser les documents qui reflètent réellement votre situation.',
        'Préparer l’entretien : les questions habituelles et l’importance de répondre avec sincérité.',
      ],
      steps: [
        {
          title: 'Faire le point',
          text: 'Nous parlons de votre voyage, de votre nationalité et de vos éventuelles demandes précédentes.',
        },
        {
          title: 'Formulaire et rendez-vous',
          text: 'Vous remplissez le DS-160 avec notre aide, puis réglez les frais officiels et prenez rendez-vous selon les consignes de l’ambassade.',
        },
        {
          title: 'Préparation de l’entretien',
          text: 'Nous revoyons ensemble vos documents et les points importants de votre situation.',
        },
        {
          title: 'Décision consulaire',
          text: 'L’agent consulaire décide. En cas de refus, nous pouvons vous aider à comprendre le motif indiqué.',
        },
      ],
      checklist: [
        'Votre passeport en cours de validité et vos anciens passeports',
        'Vos anciens visas ou courriers de refus, s’il y en a',
        'Des éléments sur votre situation : emploi, études, activité ou famille',
        'Les grandes lignes de votre projet de voyage',
      ],
      faqs: [
        {
          q: 'Pouvez-vous garantir l’obtention du visa ?',
          a: 'Non, et personne ne le peut. La décision appartient à l’agent consulaire. Notre rôle est de vous aider à présenter une demande exacte, complète et cohérente.',
        },
        {
          q: 'Un voyage dans un autre pays augmente-t-il mes chances ?',
          a: 'Chaque demande est évaluée selon votre situation globale. Un voyage doit avoir un véritable objet ; il n’existe pas de raccourci. Nous vous conseillons de voyager pour de vraies raisons et de déclarer vos voyages avec exactitude.',
        },
        {
          q: 'J’ai déjà été refusé(e). Puis-je refaire une demande ?',
          a: 'Il est généralement possible de présenter une nouvelle demande, mais cela a surtout du sens si votre situation a changé ou si la première demande était incomplète. Parlons-en avant de payer de nouveaux frais.',
        },
        {
          q: 'Ma nationalité change-t-elle quelque chose ?',
          a: 'Oui. Certaines nationalités, dont la nationalité haïtienne, font actuellement l’objet de restrictions qui suspendent la délivrance de visas, sauf exceptions limitées. Vérifions votre cas avant toute démarche.',
        },
      ],
    },
    en: {
      slug: 'us-tourist-visa',
      label: 'U.S. tourist visa',
      h1: 'Preparing a U.S. tourist visa application',
      metaTitle: 'U.S. tourist visa (B-1/B-2) preparation in Santo Domingo',
      metaDescription:
        'Consultation and preparation for a U.S. B-1/B-2 visitor visa from the Dominican Republic: the DS-160 form, documents and interview preparation.',
      summary: 'Review your travel plans, complete the form carefully and prepare for the interview.',
      intro: [
        'The U.S. visitor visa, often called a tourist visa (category B-2, or B-1/B-2), covers temporary stays: tourism, family visits, medical treatment and some business travel.',
        'A well-prepared application is an honest, consistent and complete one. We help you understand the process, complete the form accurately and attend the interview with confidence.',
      ],
      forWho: [
        'You want to visit relatives or travel to the United States.',
        'You are preparing a first application or a renewal.',
        'You were refused before and want to understand your situation.',
        'You need help understanding the form or an interview held in English or Spanish.',
      ],
      whatItIs: [
        'You apply online with Form DS-160, then pay the fee and book an appointment. In most cases there is an interview at the embassy or consulate. The consular officer looks in particular at the purpose of your trip and your ties to your country of residence.',
        'A visa is never automatic, and an issued visa does not guarantee entry: the final decision belongs to the border officer. No intermediary can obtain a visa on your behalf.',
      ],
      howWeHelp: [
        'Review your travel plans and your situation.',
        'Help you complete Form DS-160 with accurate, consistent information.',
        'Organise documents that genuinely reflect your situation.',
        'Prepare for the interview: common questions and why sincere answers matter.',
      ],
      steps: [
        {
          title: 'Review',
          text: 'We talk about your trip, your nationality and any previous applications.',
        },
        {
          title: 'Form and appointment',
          text: 'You complete the DS-160 with our help, then pay the official fee and book an appointment following the embassy’s instructions.',
        },
        {
          title: 'Interview preparation',
          text: 'We go over your documents and the key points of your situation together.',
        },
        {
          title: 'Consular decision',
          text: 'The consular officer decides. If you are refused, we can help you understand the reason given.',
        },
      ],
      checklist: [
        'Your valid passport and any previous passports',
        'Previous visas or refusal letters, if any',
        'Information about your situation: work, studies, business or family',
        'An outline of your travel plans',
      ],
      faqs: [
        {
          q: 'Can you guarantee the visa?',
          a: 'No, and nobody can. The decision belongs to the consular officer. Our role is to help you submit an accurate, complete and consistent application.',
        },
        {
          q: 'Does travelling to another country first improve my chances?',
          a: 'Each application is assessed on your overall situation. A trip should have a genuine purpose; there is no shortcut. We recommend travelling for real reasons and declaring your travel history accurately.',
        },
        {
          q: 'I was refused before. Can I apply again?',
          a: 'It is generally possible to apply again, but it mainly makes sense if your situation has changed or the first application was incomplete. Let’s talk before you pay another fee.',
        },
        {
          q: 'Does my nationality matter?',
          a: 'Yes. Some nationalities, including Haitian nationals, are currently subject to restrictions that suspend visa issuance, with limited exceptions. Let’s check your case before you start.',
        },
      ],
    },
  },
  {
    id: 'us-family',
    group: 'us',
    destinations: ['us'],
    needs: ['family'],
    icon: 'users',
    usRestrictionNotice: true,
    related: ['us-fiance', 'translation', 'apostille'],
    relatedResources: ['before-consultation', 'translation-legalization-apostille'],
    sources: [src.uscisSpouse, src.dosSuspension],
    reviewed: '2026-10-18',
    fr: {
      slug: 'visa-familial-etats-unis',
      label: 'Visa familial et de conjoint (IR-1/CR-1)',
      h1: 'Visa d’immigrant pour conjoint : IR-1 et CR-1',
      metaTitle: 'Visa de conjoint IR-1/CR-1 : préparation depuis Santo Domingo',
      metaDescription:
        'Préparer un dossier de visa d’immigrant pour conjoint de citoyen américain (IR-1/CR-1) depuis la République Dominicaine : étapes, documents et interprétation.',
      summary: 'Préparer les documents du conjoint et comprendre les étapes consulaires d’un visa d’immigrant.',
      intro: [
        'Lorsqu’un citoyen ou une citoyenne des États-Unis souhaite faire venir son conjoint qui vit à l’étranger, la démarche passe généralement par une pétition I-130, puis par un visa d’immigrant délivré par l’ambassade.',
        'Le visa est dit CR-1 (résidence conditionnelle) lorsque le mariage a moins de deux ans au moment où le conjoint obtient son statut, et IR-1 au-delà. Nous vous aidons à comprendre chaque étape et à rassembler vos documents de façon ordonnée.',
      ],
      forWho: [
        'Vous êtes marié(e) à un citoyen ou une citoyenne des États-Unis.',
        'Une pétition I-130 a été déposée ou est en préparation.',
        'Vous avez reçu des instructions du centre national des visas ou de l’ambassade.',
      ],
      whatItIs: [
        'Selon l’USCIS, lorsque le conjoint vit hors des États-Unis, la pétition I-130 est suivie, après approbation, d’une procédure consulaire : documents civils, formulaires, examen médical et entretien à l’ambassade ou au consulat.',
        'Si le mariage a moins de deux ans à l’obtention du statut, la résidence est conditionnelle ; une demande de levée des conditions (formulaire I-751) doit ensuite être déposée dans les délais. Chaque étape relève d’une autorité différente, qui prend ses propres décisions.',
      ],
      howWeHelp: [
        'Vous expliquer les étapes et le vocabulaire des courriers que vous recevez.',
        'Organiser vos documents civils et préparer les traductions nécessaires.',
        'Préparer l’entretien et assurer l’interprétation lorsque c’est permis.',
      ],
      steps: [
        { title: 'Premier échange', text: 'Nous faisons le point sur votre mariage, la pétition et les documents déjà reçus.' },
        { title: 'Dossier civil', text: 'Nous vous aidons à rassembler et à organiser les actes demandés, avec leurs traductions si besoin.' },
        { title: 'Entretien', text: 'Nous préparons ensemble l’entretien consulaire. La décision appartient à l’ambassade ou au consulat.' },
      ],
      checklist: [
        'Votre passeport',
        'Votre acte de mariage et vos actes de naissance',
        'Les avis déjà reçus (USCIS, centre national des visas)',
        'Les documents concernant d’anciens mariages, le cas échéant',
      ],
      faqs: [
        {
          q: 'Quelle différence entre IR-1 et CR-1 ?',
          a: 'Les deux concernent le conjoint d’un citoyen américain. CR-1 s’applique lorsque le mariage a moins de deux ans au moment où le conjoint obtient son statut : la résidence est alors conditionnelle pendant deux ans.',
        },
        {
          q: 'Vaut-il mieux un visa K-1 ou un visa de conjoint ?',
          a: 'Cela dépend de votre situation : êtes-vous déjà marié(e) ? Où souhaitez-vous vous marier ? Parlons-en lors d’une consultation, en tenant compte des règles actuelles.',
        },
        {
          q: 'Les restrictions actuelles me concernent-elles ?',
          a: 'Peut-être. La délivrance de visas d’immigrant est actuellement suspendue pour plusieurs nationalités, dont la nationalité haïtienne, sauf exceptions limitées. Nous vérifions votre situation avant toute démarche payante.',
        },
      ],
    },
    en: {
      slug: 'us-family-visa',
      label: 'Spouse and family visa (IR-1/CR-1)',
      h1: 'Immigrant visa for a spouse: IR-1 and CR-1',
      metaTitle: 'IR-1/CR-1 spouse visa preparation from Santo Domingo',
      metaDescription:
        'Prepare an immigrant visa case for the spouse of a U.S. citizen (IR-1/CR-1) from the Dominican Republic: milestones, documents and interpreting.',
      summary: 'Prepare the spouse’s documents and understand the consular steps of an immigrant visa.',
      intro: [
        'When a U.S. citizen wants their spouse who lives abroad to join them, the process usually involves a Form I-130 petition followed by an immigrant visa issued by the embassy.',
        'The visa is called CR-1 (conditional residence) when the marriage is less than two years old when the spouse receives status, and IR-1 otherwise. We help you understand each step and gather your documents in an orderly way.',
      ],
      forWho: [
        'You are married to a U.S. citizen.',
        'A Form I-130 petition has been filed or is being prepared.',
        'You have received instructions from the National Visa Center or the embassy.',
      ],
      whatItIs: [
        'According to USCIS, when the spouse lives outside the United States, an approved I-130 petition is followed by consular processing: civil documents, forms, a medical examination and an interview at the embassy or consulate.',
        'If the marriage is less than two years old when status is granted, residence is conditional, and a petition to remove the conditions (Form I-751) must be filed on time. Each step belongs to a different authority, which makes its own decisions.',
      ],
      howWeHelp: [
        'Explain the steps and the wording of the letters you receive.',
        'Organise your civil documents and prepare any translations needed.',
        'Prepare for the interview and interpret where permitted.',
      ],
      steps: [
        { title: 'First conversation', text: 'We review your marriage, the petition and the documents you have received.' },
        { title: 'Civil documents', text: 'We help you gather and organise the records requested, with translations if needed.' },
        { title: 'Interview', text: 'We prepare for the consular interview together. The decision belongs to the embassy or consulate.' },
      ],
      checklist: [
        'Your passport',
        'Your marriage certificate and birth certificates',
        'Notices already received (USCIS, National Visa Center)',
        'Documents about previous marriages, if applicable',
      ],
      faqs: [
        {
          q: 'What is the difference between IR-1 and CR-1?',
          a: 'Both are for the spouse of a U.S. citizen. CR-1 applies when the marriage is less than two years old when the spouse receives status; residence is then conditional for two years.',
        },
        {
          q: 'Is a K-1 visa or a spouse visa better?',
          a: 'It depends on your situation: are you already married, and where do you plan to marry? Let’s discuss it in a consultation, taking current rules into account.',
        },
        {
          q: 'Do the current restrictions affect me?',
          a: 'Possibly. Immigrant visa issuance is currently suspended for several nationalities, including Haitian nationals, with limited exceptions. We check your situation before any paid step.',
        },
      ],
    },
  },
  {
    id: 'us-passport',
    group: 'us',
    destinations: ['us'],
    needs: ['documents'],
    icon: 'passport',
    related: ['notarial', 'translation', 'interpreting'],
    relatedResources: ['before-consultation'],
    sources: [src.dosPassportAbroad, src.usEmbassyDo],
    reviewed: '2026-10-18',
    fr: {
      slug: 'passeport-americain',
      label: 'Assistance passeport américain',
      h1: 'Assistance pour une demande de passeport américain',
      metaTitle: 'Assistance passeport américain en République Dominicaine',
      metaDescription:
        'Aide à la préparation d’une demande ou d’un renouvellement de passeport américain depuis la République Dominicaine, pour les enfants, les adolescents et les adultes.',
      summary: 'Préparer une demande ou un renouvellement de passeport américain pour un enfant ou un adulte.',
      intro: [
        'Les citoyens américains qui vivent en République Dominicaine peuvent avoir besoin d’un premier passeport, d’un renouvellement ou d’un passeport pour un enfant. Ces demandes sont traitées par les services consulaires des États-Unis.',
        'Nous vous aidons à comprendre la procédure qui correspond à votre cas, à rassembler les documents et à préparer le rendez-vous.',
      ],
      forWho: [
        'Vous êtes citoyen(ne) américain(e) et votre passeport arrive à expiration.',
        'Vous demandez un premier passeport pour votre enfant.',
        'Vous ne savez pas quelle démarche correspond à votre situation.',
      ],
      whatItIs: [
        'Selon la situation, la demande se fait en personne au service consulaire ou, pour certains renouvellements d’adultes, par une procédure simplifiée. Les demandes pour les enfants ont leurs propres exigences, notamment sur le consentement des parents.',
        'Le passeport est délivré uniquement par le Département d’État des États-Unis. Notre rôle se limite à vous aider à préparer une demande complète.',
      ],
      howWeHelp: [
        'Identifier la démarche adaptée : premier passeport, renouvellement, enfant mineur.',
        'Vous aider à remplir les formulaires et à organiser les justificatifs.',
        'Préparer les traductions de documents en français ou en créole, si nécessaire.',
      ],
      steps: [
        { title: 'Identifier la démarche', text: 'Nous regardons ensemble votre situation et celle de votre enfant, le cas échéant.' },
        { title: 'Préparer le dossier', text: 'Formulaires, photos, preuves de citoyenneté et d’identité : nous vérifions que rien ne manque.' },
        { title: 'Rendez-vous consulaire', text: 'Vous vous présentez selon les consignes officielles. La décision et la délivrance relèvent du Département d’État.' },
      ],
      checklist: [
        'Votre passeport actuel ou une preuve de citoyenneté américaine',
        'Une pièce d’identité',
        'Pour un enfant : son acte de naissance et les pièces d’identité des parents',
      ],
      faqs: [
        {
          q: 'Pouvez-vous délivrer ou accélérer un passeport ?',
          a: 'Non. Seul le Département d’État délivre les passeports américains. Nous vous aidons à préparer une demande complète, ce qui évite des allers-retours.',
        },
        {
          q: 'Les deux parents doivent-ils être présents pour un enfant ?',
          a: 'Pour les jeunes enfants, le consentement des deux parents est en principe requis, avec des solutions prévues lorsque l’un d’eux ne peut pas être présent. Nous vérifions avec vous la règle applicable.',
        },
        {
          q: 'Proposez-vous aussi des services notariaux ?',
          a: 'Nous pouvons vous orienter pour les documents qui doivent être certifiés ou attestés. La nature exacte de cette assistance dépend du document : parlons-en lors du premier échange.',
        },
      ],
    },
    en: {
      slug: 'us-passport-assistance',
      label: 'U.S. passport assistance',
      h1: 'Help with a U.S. passport application',
      metaTitle: 'U.S. passport application help in the Dominican Republic',
      metaDescription:
        'Help preparing a U.S. passport application or renewal from the Dominican Republic for children, teenagers and adults.',
      summary: 'Prepare a U.S. passport application or renewal for a child or an adult.',
      intro: [
        'U.S. citizens living in the Dominican Republic may need a first passport, a renewal or a passport for a child. These applications are handled by U.S. consular services.',
        'We help you understand which procedure fits your case, gather the documents and prepare for the appointment.',
      ],
      forWho: [
        'You are a U.S. citizen and your passport is expiring.',
        'You are applying for your child’s first passport.',
        'You are not sure which procedure applies to you.',
      ],
      whatItIs: [
        'Depending on the situation, you apply in person at the consular section or, for some adult renewals, through a simplified procedure. Applications for children have their own requirements, including parental consent.',
        'Passports are issued only by the U.S. Department of State. Our role is limited to helping you prepare a complete application.',
      ],
      howWeHelp: [
        'Identify the right procedure: first passport, renewal, minor child.',
        'Help you complete the forms and organise supporting documents.',
        'Prepare translations of French or Haitian Creole documents if needed.',
      ],
      steps: [
        { title: 'Identify the procedure', text: 'We review your situation, and your child’s if applicable.' },
        { title: 'Prepare the file', text: 'Forms, photos, proof of citizenship and identity: we check that nothing is missing.' },
        { title: 'Consular appointment', text: 'You attend according to official instructions. Decisions and issuance belong to the Department of State.' },
      ],
      checklist: [
        'Your current passport or proof of U.S. citizenship',
        'An identity document',
        'For a child: their birth certificate and the parents’ identity documents',
      ],
      faqs: [
        {
          q: 'Can you issue or speed up a passport?',
          a: 'No. Only the Department of State issues U.S. passports. We help you prepare a complete application, which avoids back-and-forth.',
        },
        {
          q: 'Do both parents need to be present for a child?',
          a: 'For young children, both parents’ consent is generally required, with options when one parent cannot attend. We check the applicable rule with you.',
        },
        {
          q: 'Do you also offer notarial services?',
          a: 'We can guide you with documents that need to be certified or attested. The exact assistance depends on the document; let’s discuss it in the first conversation.',
        },
      ],
    },
  },
];
