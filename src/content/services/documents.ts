import type { ServiceSource } from '../types';
import { src } from '../sources';

export const documentServices: ServiceSource[] = [
  {
    id: 'interpreting',
    group: 'documents',
    destinations: ['any'],
    needs: ['interpreting'],
    icon: 'languages',
    homePriority: 3,
    related: ['translation', 'us-fiance', 'do-residency'],
    relatedResources: ['interpreting-appointment', 'before-consultation'],
    sources: [],
    reviewed: '2026-10-18',
    fr: {
      slug: 'interpretation-immigration',
      label: 'Interprétation en immigration',
      h1: 'Interprétation et accompagnement pour vos démarches d’immigration',
      metaTitle: 'Interprète en immigration à Santo Domingo',
      metaDescription:
        'Interprétation et accompagnement lors de vos rendez-vous et démarches d’immigration à Santo Domingo, selon les règles de chaque institution.',
      summary: 'Être compris et bien comprendre lors d’un rendez-vous, d’un appel ou d’un échange important.',
      intro: [
        'Lors d’un rendez-vous important, chaque mot compte. Comprendre une question, expliquer sa situation, lire un document : la langue peut devenir un obstacle de plus.',
        'L’équipe de Fernando OMG Services (FOS), interprètes et traducteurs compris, vous aide à communiquer clairement lors de vos démarches, en préparant l’échange avec vous et en interprétant lorsque l’institution le permet.',
      ],
      forWho: [
        'Vous avez un rendez-vous avec une administration, une ambassade ou un service de migration.',
        'Vous devez comprendre un courrier, un formulaire ou des instructions.',
        'Vous souhaitez préparer un échange avec un proche, un avocat ou une institution.',
      ],
      whatItIs: [
        'L’interprétation consiste à transmettre oralement ce qui est dit, fidèlement et sans rien ajouter. Elle diffère de la traduction, qui porte sur des documents écrits.',
        'Chaque institution fixe ses propres règles. Certaines acceptent un interprète ou un accompagnateur, d’autres fournissent leur propre interprète ou n’autorisent que le demandeur. Nous vérifions ces règles avec vous à l’avance.',
      ],
      howWeHelp: [
        'Préparer avec vous le rendez-vous : documents, questions possibles, vocabulaire utile.',
        'Interpréter lors de l’échange, lorsque c’est autorisé.',
        'Vous aider à comprendre les courriers et les instructions reçus.',
        'Vous accompagner sur place, si l’institution le permet.',
      ],
      steps: [
        { title: 'Nous parlons du rendez-vous', text: 'Lieu, date, objet et langues concernées : nous vérifions ce qui est permis.' },
        { title: 'Préparation', text: 'Nous revoyons vos documents et les points importants à expliquer.' },
        { title: 'Le jour J', text: 'Nous interprétons ou vous accompagnons selon les règles du lieu, puis nous faisons le point avec vous.' },
      ],
      checklist: [
        'La convocation ou le courrier de rendez-vous',
        'Les documents liés à votre démarche',
        'Les langues que vous parlez le plus facilement',
      ],
      faqs: [
        {
          q: 'Pouvez-vous entrer avec moi à l’ambassade ?',
          a: 'Cela dépend entièrement des règles de l’ambassade et du type de rendez-vous. Souvent, seuls les demandeurs sont admis. Nous vous le disons honnêtement et préparons l’échange avec vous en amont.',
        },
        {
          q: 'Quelles langues pouvez-vous interpréter ?',
          a: 'Nos échanges se font notamment en créole haïtien, en français et en espagnol. Indiquez-nous les langues de votre rendez-vous : nous vous dirons ce que l’équipe peut assurer.',
        },
        {
          q: 'L’interprétation peut-elle se faire à distance ?',
          a: 'Certains échanges peuvent se préparer en ligne. Pour un rendez-vous officiel, nous suivons les modalités prévues par l’institution.',
        },
      ],
    },
    en: {
      slug: 'immigration-interpreting',
      label: 'Immigration interpreting',
      h1: 'Interpreting and support for your immigration procedures',
      metaTitle: 'Immigration interpreter in Santo Domingo',
      metaDescription:
        'Interpreting and support at immigration appointments and procedures in Santo Domingo, within each institution’s rules.',
      summary: 'Be understood, and understand clearly, at an appointment, call or important conversation.',
      intro: [
        'At an important appointment, every word matters. Understanding a question, explaining your situation, reading a document: language can become one more obstacle.',
        'The Fernando OMG Services (FOS) team, including its interpreters and translators, helps you communicate clearly during your procedures, preparing the conversation with you and interpreting where the institution allows it.',
      ],
      forWho: [
        'You have an appointment with a government office, an embassy or a migration service.',
        'You need to understand a letter, a form or instructions.',
        'You want to prepare a conversation with a relative, a lawyer or an institution.',
      ],
      whatItIs: [
        'Interpreting means conveying spoken words faithfully, without adding anything. It differs from translation, which covers written documents.',
        'Each institution sets its own rules. Some accept an interpreter or companion, others provide their own interpreter or admit only the applicant. We check those rules with you in advance.',
      ],
      howWeHelp: [
        'Prepare the appointment with you: documents, likely questions, useful vocabulary.',
        'Interpret during the conversation where permitted.',
        'Help you understand the letters and instructions you receive.',
        'Accompany you on site if the institution allows it.',
      ],
      steps: [
        { title: 'We discuss the appointment', text: 'Place, date, purpose and languages: we check what is allowed.' },
        { title: 'Preparation', text: 'We review your documents and the key points you will need to explain.' },
        { title: 'On the day', text: 'We interpret or accompany you within the venue’s rules, then debrief with you.' },
      ],
      checklist: [
        'The appointment letter or notice',
        'Documents related to your procedure',
        'The languages you speak most comfortably',
      ],
      faqs: [
        {
          q: 'Can you come into the embassy with me?',
          a: 'That depends entirely on the embassy’s rules and the type of appointment. Often only applicants are admitted. We tell you honestly and prepare the conversation with you beforehand.',
        },
        {
          q: 'Which languages can you interpret?',
          a: 'Our conversations take place mainly in Haitian Creole, French and Spanish. Tell us the languages of your appointment and we will tell you what the team can cover.',
        },
        {
          q: 'Can interpreting be done remotely?',
          a: 'Some conversations can be prepared online. For an official appointment, we follow the arrangements set by the institution.',
        },
      ],
    },
  },
  {
    id: 'translation',
    group: 'documents',
    destinations: ['any'],
    needs: ['documents'],
    icon: 'file',
    homePriority: 4,
    related: ['legalization', 'apostille', 'interpreting'],
    relatedResources: ['translation-legalization-apostille'],
    sources: [src.mirex],
    reviewed: '2026-10-18',
    fr: {
      slug: 'traduction-documents',
      label: 'Traduction de documents',
      h1: 'Traduction de documents pour vos démarches',
      metaTitle: 'Traduction de documents en République Dominicaine pour vos démarches',
      metaDescription:
        'Traduction de documents d’état civil, scolaires et administratifs pour vos démarches de visa, d’études ou de résidence depuis la République Dominicaine.',
      summary: 'Faire traduire vos actes et diplômes dans la langue demandée par l’institution destinataire.',
      intro: [
        'Une ambassade, une université ou un service de migration peut demander vos documents dans une langue précise : espagnol, anglais ou français.',
        'Nous vous aidons à identifier les documents à traduire, le type de traduction exigé et l’ordre des démarches, pour éviter de refaire un travail déjà payé.',
      ],
      forWho: [
        'Vous devez présenter un acte de naissance, un diplôme ou un relevé de notes dans une autre langue.',
        'Votre dossier de visa, d’études ou de résidence demande des traductions.',
        'Vous ne savez pas si une traduction simple suffit.',
      ],
      whatItIs: [
        'Certaines institutions acceptent une traduction simple ; d’autres exigent une traduction réalisée par un traducteur ou un interprète habilité, parfois suivie d’une légalisation ou d’une apostille.',
        'L’ordre compte : selon le pays de destination, il faut parfois faire apostiller ou légaliser l’original avant de le traduire, ou faire certifier la traduction elle-même.',
      ],
      howWeHelp: [
        'Vérifier avec vous l’exigence de l’institution destinataire.',
        'Organiser la traduction de vos documents et en relire la cohérence (noms, dates, lieux).',
        'Vous orienter pour la légalisation ou l’apostille lorsqu’elle est nécessaire.',
      ],
      steps: [
        { title: 'Identifier l’exigence', text: 'Quelle institution, quel pays, quelle langue, quel type de traduction ?' },
        { title: 'Préparer les documents', text: 'Nous établissons la liste des documents à traduire et l’ordre des démarches.' },
        { title: 'Traduction et vérification', text: 'Les traductions sont réalisées puis relues avec vous avant d’être déposées.' },
      ],
      checklist: [
        'Les documents à traduire (copies lisibles, à présenter lors du rendez-vous)',
        'Les instructions de l’institution destinataire',
        'L’orthographe exacte de vos noms telle qu’elle figure sur votre passeport',
      ],
      faqs: [
        {
          q: 'Quels documents traduisez-vous ?',
          a: 'Le plus souvent des documents d’état civil, des extraits d’archives, des casiers judiciaires, des diplômes et des relevés de notes. Dites-nous lesquels vous concernent.',
        },
        {
          q: 'Ma traduction sera-t-elle acceptée ?',
          a: 'C’est l’institution destinataire qui décide. Nous vérifions ses exigences à l’avance pour réduire le risque de refus, sans pouvoir le garantir.',
        },
        {
          q: 'Faut-il d’abord apostiller le document ?',
          a: 'Parfois. L’ordre dépend du pays où le document sera utilisé et de l’institution. Consultez notre guide ou parlons-en.',
        },
      ],
    },
    en: {
      slug: 'document-translation',
      label: 'Document translation',
      h1: 'Document translation for your procedures',
      metaTitle: 'Document translation in the Dominican Republic for immigration procedures',
      metaDescription:
        'Translation of civil, academic and administrative documents for visa, study or residency procedures from the Dominican Republic.',
      summary: 'Have your records and diplomas translated into the language the receiving institution requires.',
      intro: [
        'An embassy, a university or a migration office may ask for your documents in a specific language: Spanish, English or French.',
        'We help you identify which documents need translating, the type of translation required and the right order of steps, so you do not pay twice for the same work.',
      ],
      forWho: [
        'You need to submit a birth certificate, diploma or transcript in another language.',
        'Your visa, study or residency file requires translations.',
        'You are not sure whether a simple translation is enough.',
      ],
      whatItIs: [
        'Some institutions accept a simple translation; others require one by an authorised translator or interpreter, sometimes followed by legalization or an apostille.',
        'Order matters: depending on the destination country, the original may need an apostille or legalization before it is translated, or the translation itself may need certifying.',
      ],
      howWeHelp: [
        'Check the receiving institution’s requirements with you.',
        'Organise the translation of your documents and check consistency (names, dates, places).',
        'Guide you on legalization or an apostille where needed.',
      ],
      steps: [
        { title: 'Identify the requirement', text: 'Which institution, which country, which language, which type of translation?' },
        { title: 'Prepare the documents', text: 'We list the documents to translate and the order of steps.' },
        { title: 'Translation and review', text: 'Translations are completed, then reviewed with you before submission.' },
      ],
      checklist: [
        'The documents to translate (legible copies, to bring to the appointment)',
        'The receiving institution’s instructions',
        'The exact spelling of your names as shown in your passport',
      ],
      faqs: [
        {
          q: 'Which documents do you translate?',
          a: 'Most often civil records, archive extracts, police records, diplomas and transcripts. Tell us which ones apply to you.',
        },
        {
          q: 'Will my translation be accepted?',
          a: 'The receiving institution decides. We check its requirements in advance to reduce the risk of rejection, but we cannot guarantee acceptance.',
        },
        {
          q: 'Do I need an apostille first?',
          a: 'Sometimes. The order depends on the country where the document will be used and on the institution. See our guide or ask us.',
        },
      ],
    },
  },
  {
    id: 'legalization',
    group: 'documents',
    destinations: ['any'],
    needs: ['documents'],
    icon: 'stamp',
    related: ['apostille', 'translation', 'do-student'],
    relatedResources: ['translation-legalization-apostille'],
    sources: [src.mirex, src.hcchDr],
    reviewed: '2026-10-18',
    fr: {
      slug: 'legalisation-documents',
      label: 'Assistance à la légalisation',
      h1: 'Assistance à la légalisation de documents',
      metaTitle: 'Assistance à la légalisation de documents — Santo Domingo',
      metaDescription:
        'Comprendre et préparer la légalisation de vos documents lorsqu’ils doivent être utilisés dans un pays qui n’applique pas l’apostille.',
      summary: 'Faire reconnaître un document officiel dans un pays qui n’accepte pas l’apostille.',
      intro: [
        'Un document officiel émis dans un pays n’est pas toujours reconnu tel quel dans un autre. La légalisation est la chaîne de vérifications qui permet de le faire reconnaître.',
        'Nous vous aidons à identifier le bon circuit, à préparer vos documents et à suivre les étapes dans le bon ordre.',
      ],
      forWho: [
        'Vous devez utiliser un document dominicain dans un pays qui ne fait pas partie de la Convention Apostille.',
        'Une ambassade ou une université vous demande des documents « légalisés ».',
        'Vous ne savez pas s’il vous faut une légalisation ou une apostille.',
      ],
      whatItIs: [
        'La légalisation confirme l’authenticité de la signature et du sceau de l’autorité qui a émis le document. Elle concerne surtout les pays qui ne font pas partie de la Convention de La Haye de 1961 ; pour les autres, l’apostille la remplace.',
        'En République Dominicaine, ces certifications relèvent du ministère des Affaires étrangères (MIREX). Le circuit peut aussi passer par le consulat du pays de destination.',
      ],
      howWeHelp: [
        'Déterminer si votre document a besoin d’une légalisation ou d’une apostille.',
        'Vous expliquer les étapes et l’ordre à suivre avec les autorités concernées.',
        'Organiser les traductions éventuelles.',
      ],
      steps: [
        { title: 'Vérifier le pays de destination', text: 'Le circuit dépend du pays où le document sera utilisé.' },
        { title: 'Préparer le document', text: 'Nous vérifions que l’original est récent, lisible et complet.' },
        { title: 'Suivre le circuit officiel', text: 'Les autorités compétentes certifient le document. Nous vous aidons à suivre chaque étape.' },
      ],
      checklist: [
        'Le document original concerné',
        'Le nom du pays et de l’institution où il sera présenté',
        'Les éventuelles consignes reçues de cette institution',
      ],
      faqs: [
        {
          q: 'Légalisez-vous les documents vous-mêmes ?',
          a: 'Non. La légalisation est effectuée par les autorités compétentes. Nous vous aidons à préparer et à suivre la démarche.',
        },
        {
          q: 'Un document légalisé sera-t-il forcément accepté ?',
          a: 'La légalisation confirme l’origine du document, pas son contenu. L’institution destinataire garde sa propre appréciation.',
        },
      ],
    },
    en: {
      slug: 'document-legalization',
      label: 'Legalization assistance',
      h1: 'Help with document legalization',
      metaTitle: 'Document legalization assistance — Santo Domingo',
      metaDescription:
        'Understand and prepare the legalization of your documents when they will be used in a country that does not use the apostille.',
      summary: 'Have an official document recognised in a country that does not accept the apostille.',
      intro: [
        'An official document issued in one country is not always recognised as it is in another. Legalization is the chain of checks that allows it to be recognised.',
        'We help you identify the right route, prepare your documents and complete the steps in the right order.',
      ],
      forWho: [
        'You need to use a Dominican document in a country that is not part of the Apostille Convention.',
        'An embassy or university is asking for “legalized” documents.',
        'You are not sure whether you need legalization or an apostille.',
      ],
      whatItIs: [
        'Legalization confirms the authenticity of the signature and seal of the authority that issued the document. It applies mainly to countries that are not party to the 1961 Hague Convention; for the others, an apostille replaces it.',
        'In the Dominican Republic, these certifications are handled by the Ministry of Foreign Affairs (MIREX). The route may also involve the destination country’s consulate.',
      ],
      howWeHelp: [
        'Work out whether your document needs legalization or an apostille.',
        'Explain the steps and their order with the authorities concerned.',
        'Organise any translations needed.',
      ],
      steps: [
        { title: 'Check the destination country', text: 'The route depends on where the document will be used.' },
        { title: 'Prepare the document', text: 'We check that the original is recent, legible and complete.' },
        { title: 'Follow the official route', text: 'The competent authorities certify the document. We help you follow each step.' },
      ],
      checklist: [
        'The original document',
        'The country and institution where it will be submitted',
        'Any instructions received from that institution',
      ],
      faqs: [
        {
          q: 'Do you legalize documents yourselves?',
          a: 'No. Legalization is carried out by the competent authorities. We help you prepare and follow the process.',
        },
        {
          q: 'Will a legalized document always be accepted?',
          a: 'Legalization confirms where the document came from, not its content. The receiving institution keeps its own discretion.',
        },
      ],
    },
  },
  {
    id: 'apostille',
    group: 'documents',
    destinations: ['any'],
    needs: ['documents'],
    icon: 'award',
    related: ['legalization', 'translation', 'ca-study'],
    relatedResources: ['translation-legalization-apostille'],
    sources: [src.hcchDr, src.mirex],
    reviewed: '2026-10-18',
    fr: {
      slug: 'assistance-apostille',
      label: 'Assistance apostille',
      h1: 'Assistance pour l’apostille de vos documents',
      metaTitle: 'Assistance apostille en République Dominicaine (MIREX)',
      metaDescription:
        'Comprendre l’apostille, savoir quand elle est nécessaire et préparer vos documents dominicains pour une utilisation à l’étranger.',
      summary: 'Préparer vos actes et diplômes dominicains pour une utilisation dans un pays signataire.',
      intro: [
        'L’apostille est un certificat unique qui permet à un document public d’être reconnu dans les pays qui appliquent la Convention de La Haye de 1961.',
        'Nous vous aidons à savoir si votre document en a besoin, à le préparer et à éviter les erreurs d’ordre qui obligent à recommencer.',
      ],
      forWho: [
        'Votre université, votre employeur ou une administration étrangère demande un document « apostillé ».',
        'Vous préparez un dossier d’études ou de résidence à l’étranger.',
        'Vous ne savez pas si l’apostille remplace la légalisation dans votre cas.',
      ],
      whatItIs: [
        'L’apostille atteste l’authenticité de la signature, de la qualité du signataire et du sceau d’un document public. Elle ne valide pas le contenu du document.',
        'Selon la Conférence de La Haye, l’autorité compétente en République Dominicaine est la Direction de la légalisation des documents du ministère des Affaires étrangères (MIREX), à Santo Domingo.',
      ],
      howWeHelp: [
        'Vérifier si le pays de destination accepte l’apostille.',
        'Préparer vos documents et l’ordre des démarches (apostille, traduction).',
        'Vous expliquer comment suivre votre demande auprès de l’autorité compétente.',
      ],
      steps: [
        { title: 'Vérifier le besoin', text: 'Pays de destination, institution et type de document.' },
        { title: 'Préparer le document', text: 'Original récent et conforme, avec les signatures attendues.' },
        { title: 'Démarche auprès du MIREX', text: 'L’autorité compétente délivre l’apostille. Nous vous aidons à préparer et à suivre la demande.' },
      ],
      checklist: [
        'Le document original (acte, diplôme, relevé, certificat)',
        'Le pays où le document sera utilisé',
        'Les consignes de l’institution destinataire',
      ],
      faqs: [
        {
          q: 'Délivrez-vous l’apostille ?',
          a: 'Non. Seule l’autorité compétente la délivre. Nous vous aidons à préparer un dossier correct et à suivre les étapes.',
        },
        {
          q: 'Quelle différence avec la légalisation ?',
          a: 'L’apostille remplace la légalisation entre les pays signataires de la Convention. Pour les autres pays, la légalisation reste nécessaire.',
        },
        {
          q: 'Puis-je faire apostiller un document haïtien en République Dominicaine ?',
          a: 'En principe, un document est apostillé ou légalisé par les autorités du pays qui l’a émis. Parlons de votre document pour trouver la bonne démarche.',
        },
      ],
    },
    en: {
      slug: 'apostille-assistance',
      label: 'Apostille assistance',
      h1: 'Help with apostilles for your documents',
      metaTitle: 'Apostille assistance in the Dominican Republic (MIREX)',
      metaDescription:
        'Understand the apostille, know when you need one and prepare your Dominican documents for use abroad.',
      summary: 'Prepare your Dominican records and diplomas for use in a Convention country.',
      intro: [
        'An apostille is a single certificate that allows a public document to be recognised in the countries that apply the 1961 Hague Convention.',
        'We help you find out whether your document needs one, prepare it and avoid ordering mistakes that force you to start again.',
      ],
      forWho: [
        'Your university, employer or a foreign authority asks for an “apostilled” document.',
        'You are preparing a study or residency file abroad.',
        'You are not sure whether an apostille replaces legalization in your case.',
      ],
      whatItIs: [
        'An apostille certifies the authenticity of the signature, the capacity of the signatory and the seal on a public document. It does not validate the document’s content.',
        'According to the Hague Conference, the competent authority in the Dominican Republic is the Document Legalization Directorate of the Ministry of Foreign Affairs (MIREX) in Santo Domingo.',
      ],
      howWeHelp: [
        'Check whether the destination country accepts apostilles.',
        'Prepare your documents and the order of steps (apostille, translation).',
        'Explain how to follow your request with the competent authority.',
      ],
      steps: [
        { title: 'Check the need', text: 'Destination country, institution and type of document.' },
        { title: 'Prepare the document', text: 'A recent, compliant original with the expected signatures.' },
        { title: 'Request at MIREX', text: 'The competent authority issues the apostille. We help you prepare and follow the request.' },
      ],
      checklist: [
        'The original document (record, diploma, transcript, certificate)',
        'The country where it will be used',
        'The receiving institution’s instructions',
      ],
      faqs: [
        {
          q: 'Do you issue apostilles?',
          a: 'No. Only the competent authority issues them. We help you prepare a correct file and follow the steps.',
        },
        {
          q: 'How is it different from legalization?',
          a: 'Between Convention countries, an apostille replaces legalization. For other countries, legalization is still required.',
        },
        {
          q: 'Can I apostille a Haitian document in the Dominican Republic?',
          a: 'As a rule, a document is apostilled or legalized by the authorities of the country that issued it. Let’s look at your document to find the right route.',
        },
      ],
    },
  },
  {
    id: 'notarial',
    group: 'documents',
    destinations: ['any'],
    needs: ['documents'],
    icon: 'pen',
    related: ['us-passport', 'translation', 'legalization'],
    relatedResources: ['before-consultation'],
    sources: [],
    reviewed: '2026-10-18',
    fr: {
      slug: 'assistance-documents-notariaux',
      label: 'Assistance documents notariaux',
      h1: 'Assistance pour vos documents à faire certifier',
      metaTitle: 'Assistance pour documents notariaux et attestations — Santo Domingo',
      metaDescription:
        'Orientation et préparation pour les déclarations, autorisations et attestations qui doivent être certifiées dans le cadre de vos démarches.',
      summary: 'Préparer une déclaration, une autorisation ou une attestation qui doit être certifiée.',
      intro: [
        'Une démarche peut exiger une déclaration sur l’honneur, une autorisation parentale ou une attestation signée devant une autorité habilitée.',
        'Nous vous aidons à comprendre ce qui est demandé, à préparer le document et à savoir auprès de qui le faire certifier.',
      ],
      forWho: [
        'Une institution vous demande un document « notarié » ou certifié.',
        'Vous préparez une autorisation de voyage ou une déclaration pour un proche.',
        'Vous ne savez pas quelle autorité peut certifier votre document.',
      ],
      whatItIs: [
        'La certification d’une signature ou d’un acte est réalisée par une autorité habilitée, par exemple un notaire, selon les règles du pays où le document sera utilisé.',
        'Notre rôle est de vous orienter et de vous aider à préparer le document. La certification elle-même est réalisée par l’autorité compétente.',
      ],
      howWeHelp: [
        'Clarifier le type de document exigé et son contenu.',
        'Vous aider à préparer le texte et les pièces à joindre.',
        'Vous orienter vers l’autorité habilitée à le certifier.',
      ],
      steps: [
        { title: 'Comprendre la demande', text: 'Qui demande le document, pour quel usage et dans quel pays ?' },
        { title: 'Préparer le document', text: 'Texte, identités et pièces justificatives.' },
        { title: 'Certification', text: 'Vous faites certifier le document par l’autorité compétente.' },
      ],
      checklist: [
        'Les consignes de l’institution qui demande le document',
        'Vos pièces d’identité et celles des autres signataires',
      ],
      faqs: [
        {
          q: 'Fernand Theodore est-il notaire ?',
          a: 'Ni Fernand Theodore ni l’équipe FOS ne sont présentés comme notaires. Nous vous aidons à préparer le document et vous orientons vers l’autorité compétente pour la certification.',
        },
        {
          q: 'Un document certifié ici sera-t-il valable à l’étranger ?',
          a: 'Il peut nécessiter en plus une apostille ou une légalisation. Nous vérifions avec vous selon le pays de destination.',
        },
      ],
    },
    en: {
      slug: 'notarial-document-assistance',
      label: 'Notarial document assistance',
      h1: 'Help with documents that need certifying',
      metaTitle: 'Notarial document and affidavit assistance — Santo Domingo',
      metaDescription:
        'Guidance and preparation for declarations, authorisations and affidavits that must be certified as part of your procedures.',
      summary: 'Prepare a declaration, authorisation or affidavit that needs to be certified.',
      intro: [
        'A procedure may require a sworn declaration, a parental authorisation or an affidavit signed before an authorised official.',
        'We help you understand what is being asked, prepare the document and know where to have it certified.',
      ],
      forWho: [
        'An institution is asking for a “notarized” or certified document.',
        'You are preparing a travel authorisation or a declaration for a relative.',
        'You are not sure which authority can certify your document.',
      ],
      whatItIs: [
        'Certifying a signature or a document is carried out by an authorised official, such as a notary, under the rules of the country where it will be used.',
        'Our role is to guide you and help you prepare the document. The certification itself is carried out by the competent authority.',
      ],
      howWeHelp: [
        'Clarify the type of document required and its content.',
        'Help you prepare the text and supporting documents.',
        'Point you to the authority entitled to certify it.',
      ],
      steps: [
        { title: 'Understand the request', text: 'Who is asking for the document, for what use and in which country?' },
        { title: 'Prepare the document', text: 'Wording, identities and supporting documents.' },
        { title: 'Certification', text: 'You have the document certified by the competent authority.' },
      ],
      checklist: [
        'The instructions from the institution requesting the document',
        'Your identity documents and those of any other signatories',
      ],
      faqs: [
        {
          q: 'Is Fernand Theodore a notary?',
          a: 'Neither Fernand Theodore nor the FOS team is presented as a notary. We help you prepare the document and point you to the competent authority for certification.',
        },
        {
          q: 'Will a document certified here be valid abroad?',
          a: 'It may also need an apostille or legalization. We check with you based on the destination country.',
        },
      ],
    },
  },
];
