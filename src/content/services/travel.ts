import type { ServiceSource } from '../types';
import { src } from '../sources';

export const travelServices: ServiceSource[] = [
  {
    id: 'ca-visitor',
    group: 'travel',
    destinations: ['ca'],
    needs: ['travel'],
    icon: 'plane',
    homePriority: 6,
    related: ['ca-study', 'translation', 'us-tourist'],
    relatedResources: ['canada-visitor-vs-study'],
    sources: [src.irccVisitor],
    reviewed: '2026-10-18',
    fr: {
      slug: 'visa-visiteur-canada',
      label: 'Visa visiteur pour le Canada',
      h1: 'Visa visiteur pour le Canada',
      metaTitle: 'Visa visiteur Canada : accompagnement depuis Santo Domingo',
      metaDescription:
        'Comprendre et préparer une demande de visa visiteur (visa de résident temporaire) pour le Canada depuis la République Dominicaine : compte en ligne, documents, biométrie.',
      summary: 'Préparer une demande de visa de résident temporaire pour une visite au Canada.',
      intro: [
        'Le visa visiteur, ou visa de résident temporaire, est le document apposé dans votre passeport qui montre que vous remplissez les conditions pour voyager au Canada.',
        'La demande se fait en ligne auprès d’Immigration, Réfugiés et Citoyenneté Canada (IRCC). Nous vous aidons à préparer un dossier clair, complet et fidèle à votre situation.',
      ],
      forWho: [
        'Vous souhaitez rendre visite à de la famille ou voyager au Canada.',
        'Votre nationalité exige un visa pour entrer au Canada.',
        'Vous n’êtes pas à l’aise avec la demande en ligne en anglais ou en français.',
      ],
      whatItIs: [
        'Selon IRCC, les frais commencent à 100 $ CA et les délais de traitement varient selon le pays. Des données biométriques (empreintes digitales et photo) peuvent être demandées.',
        'Le visa visiteur permet de se présenter à la frontière : l’entrée est décidée par l’agent à l’arrivée. Pour étudier plus de six mois, un permis d’études est en principe nécessaire : c’est une autre démarche.',
      ],
      howWeHelp: [
        'Vous aider à créer votre compte et à remplir la demande en ligne.',
        'Organiser des justificatifs qui reflètent réellement votre situation et votre voyage.',
        'Préparer les traductions nécessaires.',
        'Vous expliquer les messages reçus d’IRCC, comme la demande de biométrie.',
      ],
      steps: [
        { title: 'Faire le point', text: 'Objet du voyage, durée, situation et voyages précédents.' },
        { title: 'Demande en ligne', text: 'Formulaires, justificatifs et paiement des frais officiels.' },
        { title: 'Biométrie et suivi', text: 'Rendez-vous de biométrie si demandé, puis décision d’IRCC.' },
      ],
      checklist: [
        'Votre passeport en cours de validité',
        'Des informations sur votre situation (travail, études, famille)',
        'Le projet de voyage et, le cas échéant, l’invitation reçue',
      ],
      faqs: [
        {
          q: 'Le visa visiteur me permet-il d’étudier ?',
          a: 'Des études courtes de six mois ou moins sont possibles dans certains cas, mais pour un programme plus long, il faut en principe un permis d’études. Voir notre page Études au Canada.',
        },
        {
          q: 'Faut-il passer un entretien ?',
          a: 'La demande se fait en ligne, avec souvent un rendez-vous de biométrie. Un entretien est possible mais n’est pas systématique.',
        },
        {
          q: 'Pouvez-vous garantir la réponse ?',
          a: 'Non. La décision appartient à IRCC. Nous vous aidons à présenter une demande complète et exacte.',
        },
      ],
    },
    en: {
      slug: 'canada-visitor-visa',
      label: 'Canada visitor visa',
      h1: 'Canada visitor visa',
      metaTitle: 'Canada visitor visa help from Santo Domingo',
      metaDescription:
        'Understand and prepare a Canada visitor visa (temporary resident visa) application from the Dominican Republic: online account, documents, biometrics.',
      summary: 'Prepare a temporary resident visa application for a visit to Canada.',
      intro: [
        'A visitor visa, or temporary resident visa, is the document placed in your passport that shows you meet the requirements to travel to Canada.',
        'You apply online with Immigration, Refugees and Citizenship Canada (IRCC). We help you prepare a clear, complete application that reflects your real situation.',
      ],
      forWho: [
        'You want to visit family or travel to Canada.',
        'Your nationality requires a visa to enter Canada.',
        'You are not comfortable with the online application in English or French.',
      ],
      whatItIs: [
        'According to IRCC, fees start from CAN$100 and processing times vary by country. Biometrics (fingerprints and a photo) may be required.',
        'A visitor visa lets you present yourself at the border; entry is decided by the officer on arrival. To study for more than six months you generally need a study permit, which is a separate application.',
      ],
      howWeHelp: [
        'Help you create your account and complete the online application.',
        'Organise supporting documents that genuinely reflect your situation and your trip.',
        'Prepare any translations needed.',
        'Explain messages from IRCC, such as a biometrics request.',
      ],
      steps: [
        { title: 'Review', text: 'Purpose of the trip, length, situation and previous travel.' },
        { title: 'Online application', text: 'Forms, supporting documents and the official fee.' },
        { title: 'Biometrics and follow-up', text: 'A biometrics appointment if requested, then IRCC’s decision.' },
      ],
      checklist: [
        'Your valid passport',
        'Information about your situation (work, studies, family)',
        'Your travel plans and, if applicable, the invitation you received',
      ],
      faqs: [
        {
          q: 'Can I study on a visitor visa?',
          a: 'Short courses of six months or less are possible in some cases, but a longer programme generally requires a study permit. See our Study in Canada page.',
        },
        {
          q: 'Is there an interview?',
          a: 'You apply online, often with a biometrics appointment. An interview is possible but not systematic.',
        },
        {
          q: 'Can you guarantee the outcome?',
          a: 'No. IRCC makes the decision. We help you submit a complete, accurate application.',
        },
      ],
    },
  },
  {
    id: 'ca-study',
    group: 'travel',
    destinations: ['ca'],
    needs: ['study'],
    icon: 'graduation',
    related: ['ca-visitor', 'apostille', 'translation'],
    relatedResources: ['canada-visitor-vs-study', 'translation-legalization-apostille'],
    sources: [src.irccStudy, src.irccStudyDocs],
    reviewed: '2026-10-18',
    fr: {
      slug: 'etudes-canada',
      label: 'Études au Canada',
      h1: 'Études au Canada : préparer votre demande de permis d’études',
      metaTitle: 'Études au Canada : accompagnement pour le permis d’études',
      metaDescription:
        'Comprendre le permis d’études canadien et préparer votre demande depuis la République Dominicaine : lettre d’acceptation, attestation provinciale, preuves financières.',
      summary: 'Préparer votre demande de permis d’études après votre admission dans un établissement canadien.',
      intro: [
        'Pour suivre un programme d’études au Canada, la plupart des étudiants étrangers ont besoin d’un permis d’études, délivré par IRCC.',
        'C’est une démarche différente du visa visiteur. Nous vous aidons à comprendre les pièces demandées, à les organiser et à préparer une demande cohérente avec votre projet d’études.',
      ],
      forWho: [
        'Vous avez reçu, ou attendez, une lettre d’acceptation d’un établissement canadien.',
        'Vous préparez votre projet d’études et voulez comprendre les étapes.',
        'Vous devez faire traduire ou apostiller vos diplômes et relevés.',
      ],
      whatItIs: [
        'Selon IRCC, la demande comprend notamment une lettre d’acceptation d’un établissement d’enseignement désigné, dans la plupart des cas une lettre d’attestation provinciale ou territoriale (au Québec, un Certificat d’acceptation du Québec), une preuve de ressources financières et une preuve d’identité. Les frais sont de 150 $ CA.',
        'Le permis d’études n’est pas un visa : si la demande est approuvée, un visa de résident temporaire ou une autorisation de voyage électronique est également délivré pour le voyage. Il faut faire la demande avant de partir.',
      ],
      howWeHelp: [
        'Vérifier avec vous les pièces demandées pour votre programme et votre province.',
        'Organiser les traductions et apostilles de vos documents scolaires.',
        'Vous aider à remplir la demande en ligne et à suivre les messages d’IRCC.',
      ],
      steps: [
        { title: 'Admission', text: 'Vous obtenez une lettre d’acceptation de l’établissement, puis, le plus souvent, l’attestation provinciale.' },
        { title: 'Dossier', text: 'Preuves financières, identité, documents scolaires et traductions.' },
        { title: 'Demande et biométrie', text: 'Dépôt en ligne, biométrie si demandée, puis décision d’IRCC.' },
      ],
      checklist: [
        'Votre lettre d’acceptation, si vous l’avez déjà',
        'Vos diplômes et relevés de notes',
        'Votre passeport',
        'Des informations sur le financement de vos études',
      ],
      faqs: [
        {
          q: 'Pouvez-vous m’inscrire dans une université canadienne ?',
          a: 'L’admission est décidée par l’établissement. Nous pouvons vous aider à préparer vos documents ; la décision d’admission et celle du permis restent indépendantes de nous.',
        },
        {
          q: 'Qu’est-ce que l’attestation provinciale ?',
          a: 'Dans la plupart des cas, IRCC demande une lettre d’attestation de la province ou du territoire où vous étudierez. Elle est généralement obtenue par l’intermédiaire de votre établissement.',
        },
        {
          q: 'Ma famille peut-elle m’accompagner ?',
          a: 'Dans certains cas, des membres de la famille peuvent demander à vous accompagner. Les conditions dépendent de votre situation et des règles en vigueur.',
        },
      ],
    },
    en: {
      slug: 'study-in-canada',
      label: 'Study in Canada',
      h1: 'Study in Canada: preparing your study permit application',
      metaTitle: 'Study in Canada: study permit application support',
      metaDescription:
        'Understand the Canadian study permit and prepare your application from the Dominican Republic: letter of acceptance, provincial attestation letter, proof of funds.',
      summary: 'Prepare your study permit application once you are admitted to a Canadian institution.',
      intro: [
        'To follow a study programme in Canada, most international students need a study permit issued by IRCC.',
        'It is a different application from a visitor visa. We help you understand the documents requested, organise them and prepare an application consistent with your study plans.',
      ],
      forWho: [
        'You have received, or are waiting for, a letter of acceptance from a Canadian institution.',
        'You are planning your studies and want to understand the steps.',
        'You need your diplomas and transcripts translated or apostilled.',
      ],
      whatItIs: [
        'According to IRCC, the application includes a letter of acceptance from a designated learning institution, in most cases a provincial or territorial attestation letter (in Quebec, a Quebec Acceptance Certificate), proof of financial support and proof of identity. The fee is CAN$150.',
        'A study permit is not a visa: if approved, a temporary resident visa or electronic travel authorisation is also issued for travel. You must apply before you leave.',
      ],
      howWeHelp: [
        'Check the documents required for your programme and province with you.',
        'Organise translations and apostilles of your academic documents.',
        'Help you complete the online application and follow IRCC messages.',
      ],
      steps: [
        { title: 'Admission', text: 'You obtain a letter of acceptance from the institution and, in most cases, the provincial attestation letter.' },
        { title: 'File', text: 'Proof of funds, identity, academic documents and translations.' },
        { title: 'Application and biometrics', text: 'Online submission, biometrics if requested, then IRCC’s decision.' },
      ],
      checklist: [
        'Your letter of acceptance, if you already have it',
        'Your diplomas and transcripts',
        'Your passport',
        'Information on how your studies will be funded',
      ],
      faqs: [
        {
          q: 'Can you enrol me in a Canadian university?',
          a: 'Admission is decided by the institution. We can help you prepare your documents; the admission and permit decisions remain independent of us.',
        },
        {
          q: 'What is the provincial attestation letter?',
          a: 'In most cases IRCC requires an attestation letter from the province or territory where you will study. It is usually obtained through your institution.',
        },
        {
          q: 'Can my family come with me?',
          a: 'In some cases family members may apply to accompany you. The conditions depend on your situation and the rules in force.',
        },
      ],
    },
  },
  {
    id: 'co-visa',
    group: 'travel',
    destinations: ['co'],
    needs: ['travel', 'study'],
    icon: 'globe',
    related: ['mx-visa', 'jm-travel', 'apostille'],
    relatedResources: ['before-consultation'],
    sources: [src.cancilleriaVisa],
    reviewed: '2026-10-18',
    // FOS's dedicated TikTok account for the Colombia service (supplied by the client, Oct 2026).
    socialLink: { label: '@foscolombia', url: 'https://www.tiktok.com/@foscolombia' },
    fr: {
      slug: 'visa-colombie',
      label: 'Visa pour la Colombie (voyage et études)',
      h1: 'Visa pour la Colombie : voyage et études',
      metaTitle: 'Visa Colombie : consultation voyage et études depuis Santo Domingo',
      metaDescription:
        'Consultation pour préparer une demande de visa colombien, pour un voyage ou un projet d’études : catégories, demande en ligne, documents.',
      summary: 'Préparer une demande de visa colombien pour un voyage ou un projet d’études.',
      intro: [
        'Selon votre nationalité, un visa peut être nécessaire pour voyager ou étudier en Colombie. La demande se fait auprès du ministère colombien des Affaires étrangères (Cancillería).',
        'Nous vous aidons à identifier la catégorie adaptée à votre projet, à préparer vos documents et à suivre la demande en ligne.',
      ],
      forWho: [
        'Vous préparez un voyage touristique ou familial en Colombie.',
        'Vous avez un projet d’études ou une admission dans un établissement colombien.',
        'Vous voulez vérifier si votre nationalité nécessite un visa.',
      ],
      whatItIs: [
        'La Cancillería distingue trois grandes catégories de visas : visiteur (V), migrant (M) et résident (R). Le type précis dépend de l’objet et de la durée du séjour.',
        'Nous vous aidons à préparer une demande fondée sur un projet réel. Un voyage en Colombie doit avoir son propre objet : il ne constitue pas une étape obligatoire ni un raccourci vers un autre visa.',
      ],
      howWeHelp: [
        'Identifier la catégorie de visa adaptée à votre projet.',
        'Préparer les documents et les traductions.',
        'Vous aider à remplir la demande en ligne et à suivre les réponses.',
      ],
      steps: [
        { title: 'Projet', text: 'Objet, durée et dates envisagées du séjour.' },
        { title: 'Documents', text: 'Passeport, justificatifs liés au projet, traductions.' },
        { title: 'Demande en ligne', text: 'Dépôt auprès de la Cancillería, puis suivi de la décision.' },
      ],
      checklist: [
        'Votre passeport',
        'Les informations sur votre projet (voyage, études, invitation)',
        'Pour des études : la lettre d’admission de l’établissement',
      ],
      faqs: [
        {
          q: 'Un voyage en Colombie aide-t-il pour un visa américain ?',
          a: 'Il n’existe pas de raccourci. Chaque demande de visa américain est évaluée selon votre situation globale. Nous vous conseillons de voyager pour de vraies raisons et de déclarer vos voyages avec exactitude.',
        },
        {
          q: 'Puis-je étudier en Colombie ?',
          a: 'Oui, sous réserve d’admission et du visa adapté. Nous vous aidons à préparer les documents pour la demande.',
        },
      ],
    },
    en: {
      slug: 'colombia-visa',
      label: 'Colombia visa (travel and study)',
      h1: 'Colombia visa: travel and study',
      metaTitle: 'Colombia visa consultation for travel and study — Santo Domingo',
      metaDescription:
        'Consultation to prepare a Colombian visa application for travel or study: categories, online application, documents.',
      summary: 'Prepare a Colombian visa application for a trip or a study plan.',
      intro: [
        'Depending on your nationality, you may need a visa to travel to or study in Colombia. Applications are made with Colombia’s Ministry of Foreign Affairs (Cancillería).',
        'We help you identify the right category for your plans, prepare your documents and follow the online application.',
      ],
      forWho: [
        'You are planning a holiday or family trip to Colombia.',
        'You have a study plan or an admission to a Colombian institution.',
        'You want to check whether your nationality needs a visa.',
      ],
      whatItIs: [
        'The Cancillería uses three broad visa categories: visitor (V), migrant (M) and resident (R). The exact type depends on the purpose and length of the stay.',
        'We help you prepare an application based on a genuine plan. A trip to Colombia should have its own purpose; it is neither a required step nor a shortcut to any other visa.',
      ],
      howWeHelp: [
        'Identify the right visa category for your plans.',
        'Prepare documents and translations.',
        'Help you complete the online application and follow the responses.',
      ],
      steps: [
        { title: 'Plans', text: 'Purpose, length and intended dates of the stay.' },
        { title: 'Documents', text: 'Passport, supporting documents for your plans, translations.' },
        { title: 'Online application', text: 'Submission to the Cancillería, then follow-up on the decision.' },
      ],
      checklist: [
        'Your passport',
        'Information about your plans (trip, studies, invitation)',
        'For studies: the institution’s admission letter',
      ],
      faqs: [
        {
          q: 'Does a trip to Colombia help with a U.S. visa?',
          a: 'There is no shortcut. Each U.S. visa application is assessed on your overall situation. We recommend travelling for genuine reasons and declaring your travel history accurately.',
        },
        {
          q: 'Can I study in Colombia?',
          a: 'Yes, subject to admission and the right visa. We help you prepare the documents for the application.',
        },
      ],
    },
  },
  {
    id: 'mx-visa',
    group: 'travel',
    destinations: ['mx'],
    needs: ['travel', 'study'],
    icon: 'map',
    related: ['co-visa', 'jm-travel', 'translation'],
    relatedResources: ['before-consultation'],
    sources: [src.sre, src.embamexHaiti],
    reviewed: '2026-10-18',
    fr: {
      slug: 'visa-mexique',
      label: 'Visa pour le Mexique (tourisme et études)',
      h1: 'Visa pour le Mexique : tourisme et études',
      metaTitle: 'Visa Mexique touriste et étudiant : consultation depuis Santo Domingo',
      metaDescription:
        'Consultation pour préparer une demande de visa mexicain de visiteur ou d’étudiant : rendez-vous consulaire, documents et préparation de l’entretien.',
      summary: 'Préparer une demande de visa mexicain de visiteur ou d’étudiant.',
      intro: [
        'Selon votre nationalité, un visa peut être nécessaire pour visiter le Mexique ou y étudier. Les demandes passent par les représentations consulaires du Mexique, sur rendez-vous.',
        'Nous vous aidons à préparer vos documents et votre rendez-vous, pour un voyage ou un projet d’études.',
      ],
      forWho: [
        'Vous préparez un voyage touristique ou familial au Mexique.',
        'Vous êtes admis(e) dans un établissement mexicain.',
        'Vous voulez savoir si votre nationalité nécessite un visa.',
      ],
      whatItIs: [
        'Les visas mexicains sont délivrés après un rendez-vous et, le plus souvent, un entretien consulaire. Pour un programme d’études long, il existe un visa de résident temporaire étudiant.',
        'La décision d’entrée appartient ensuite à l’Institut national des migrations à l’arrivée au Mexique.',
      ],
      howWeHelp: [
        'Identifier le type de visa adapté à votre projet.',
        'Préparer les documents et les traductions.',
        'Vous aider à prendre rendez-vous et à préparer l’entretien.',
      ],
      steps: [
        { title: 'Projet', text: 'Tourisme, visite familiale ou études : nous faisons le point.' },
        { title: 'Rendez-vous', text: 'Prise de rendez-vous auprès de la représentation consulaire compétente.' },
        { title: 'Entretien', text: 'Vous présentez votre dossier. La décision appartient aux autorités mexicaines.' },
      ],
      checklist: [
        'Votre passeport',
        'Des informations sur votre situation et votre projet',
        'Pour des études : la lettre d’admission',
      ],
      faqs: [
        {
          q: 'Un visa américain dispense-t-il du visa mexicain ?',
          a: 'Le Mexique prévoit des cas où certains titres valides d’autres pays permettent d’entrer sans visa mexicain, selon des conditions précises. Vérifions votre situation ensemble.',
        },
        {
          q: 'Combien coûte le visa ?',
          a: 'Les frais sont fixés par les autorités mexicaines et dépendent du type de visa et de la nationalité. Nous vous indiquerons où consulter le montant officiel.',
        },
      ],
    },
    en: {
      slug: 'mexico-visa',
      label: 'Mexico visa (tourism and study)',
      h1: 'Mexico visa: tourism and study',
      metaTitle: 'Mexico tourist and student visa consultation — Santo Domingo',
      metaDescription:
        'Consultation to prepare a Mexican visitor or student visa application: consular appointment, documents and interview preparation.',
      summary: 'Prepare a Mexican visitor or student visa application.',
      intro: [
        'Depending on your nationality, you may need a visa to visit or study in Mexico. Applications go through Mexico’s consular offices, by appointment.',
        'We help you prepare your documents and your appointment, for a trip or a study plan.',
      ],
      forWho: [
        'You are planning a holiday or family trip to Mexico.',
        'You have been admitted to a Mexican institution.',
        'You want to know whether your nationality needs a visa.',
      ],
      whatItIs: [
        'Mexican visas are issued after an appointment and, in most cases, a consular interview. For a longer study programme there is a temporary resident student visa.',
        'Entry is then decided by Mexico’s National Migration Institute on arrival.',
      ],
      howWeHelp: [
        'Identify the right visa type for your plans.',
        'Prepare documents and translations.',
        'Help you book the appointment and prepare for the interview.',
      ],
      steps: [
        { title: 'Plans', text: 'Tourism, family visit or study: we review your plans.' },
        { title: 'Appointment', text: 'Booking with the relevant consular office.' },
        { title: 'Interview', text: 'You present your file. The decision belongs to the Mexican authorities.' },
      ],
      checklist: [
        'Your passport',
        'Information about your situation and plans',
        'For studies: the admission letter',
      ],
      faqs: [
        {
          q: 'Does a U.S. visa exempt me from a Mexican visa?',
          a: 'Mexico allows some valid documents from other countries to replace a Mexican visa, under specific conditions. Let’s check your situation together.',
        },
        {
          q: 'How much does the visa cost?',
          a: 'Fees are set by the Mexican authorities and depend on the visa type and nationality. We will show you where to find the official amount.',
        },
      ],
    },
  },
  {
    id: 'jm-travel',
    group: 'travel',
    destinations: ['jm'],
    needs: ['travel'],
    icon: 'globe',
    related: ['co-visa', 'mx-visa', 'translation'],
    relatedResources: ['before-consultation'],
    sources: [src.pica],
    reviewed: '2026-10-18',
    fr: {
      slug: 'voyage-jamaique',
      label: 'Voyage en Jamaïque',
      h1: 'Voyager en Jamaïque : consultation et préparation',
      metaTitle: 'Voyage en Jamaïque : consultation visa depuis Santo Domingo',
      metaDescription:
        'Consultation pour préparer un voyage en Jamaïque : vérifier si un visa est nécessaire selon votre nationalité, préparer les documents et la demande.',
      summary: 'Vérifier les conditions d’entrée et préparer les documents pour un voyage en Jamaïque.',
      intro: [
        'Les conditions d’entrée en Jamaïque dépendent de votre nationalité et de votre passeport. Certains voyageurs doivent obtenir un visa à l’avance.',
        'Nous vous aidons à vérifier ce qui s’applique à vous et à préparer une demande claire pour un voyage réel.',
      ],
      forWho: [
        'Vous préparez un voyage touristique, familial ou professionnel en Jamaïque.',
        'Vous ne savez pas si votre passeport nécessite un visa.',
      ],
      whatItIs: [
        'Les règles d’entrée sont fixées par l’agence jamaïcaine des passeports, de l’immigration et de la citoyenneté (PICA). Lorsqu’un visa est nécessaire, la demande passe par une représentation de la Jamaïque.',
        'Comme pour toute destination, le voyage doit avoir un objet réel. Il n’est ni une étape obligatoire ni une garantie pour une autre demande de visa.',
      ],
      howWeHelp: [
        'Vérifier les conditions d’entrée pour votre nationalité.',
        'Préparer les documents et la demande, le cas échéant.',
        'Vous expliquer les étapes jusqu’au départ.',
      ],
      steps: [
        { title: 'Vérification', text: 'Nationalité, passeport et objet du voyage.' },
        { title: 'Préparation', text: 'Documents, réservations envisagées et formulaire si un visa est nécessaire.' },
        { title: 'Dépôt et suivi', text: 'Dépôt auprès de la représentation compétente et suivi de la réponse.' },
      ],
      checklist: [
        'Votre passeport',
        'Les dates et l’objet de votre voyage',
        'Vos visas ou titres de séjour éventuels dans d’autres pays',
      ],
      faqs: [
        {
          q: 'Ai-je besoin d’un visa pour la Jamaïque ?',
          a: 'Cela dépend de votre nationalité et de votre passeport. Nous vérifions avec vous les règles en vigueur publiées par les autorités jamaïcaines.',
        },
        {
          q: 'Un voyage en Jamaïque aide-t-il pour un visa américain ?',
          a: 'Non, ce n’est pas un raccourci. Chaque demande de visa américain est évaluée selon votre situation. Nous vous accompagnons pour des voyages qui ont un véritable objet.',
        },
      ],
    },
    en: {
      slug: 'jamaica-travel',
      label: 'Travel to Jamaica',
      h1: 'Travelling to Jamaica: consultation and preparation',
      metaTitle: 'Jamaica travel and visa consultation — Santo Domingo',
      metaDescription:
        'Consultation to prepare a trip to Jamaica: check whether you need a visa for your nationality, then prepare the documents and application.',
      summary: 'Check entry requirements and prepare documents for a trip to Jamaica.',
      intro: [
        'Entry requirements for Jamaica depend on your nationality and passport. Some travellers must obtain a visa in advance.',
        'We help you check what applies to you and prepare a clear application for a genuine trip.',
      ],
      forWho: [
        'You are planning a holiday, family or business trip to Jamaica.',
        'You are not sure whether your passport needs a visa.',
      ],
      whatItIs: [
        'Entry rules are set by Jamaica’s Passport, Immigration and Citizenship Agency (PICA). When a visa is required, the application goes through a Jamaican mission.',
        'As for any destination, the trip should have a genuine purpose. It is neither a required step nor a guarantee for any other visa application.',
      ],
      howWeHelp: [
        'Check the entry requirements for your nationality.',
        'Prepare the documents and application if needed.',
        'Explain the steps up to departure.',
      ],
      steps: [
        { title: 'Check', text: 'Nationality, passport and purpose of the trip.' },
        { title: 'Preparation', text: 'Documents, planned bookings and the form if a visa is needed.' },
        { title: 'Submission and follow-up', text: 'Submission to the relevant mission and follow-up on the response.' },
      ],
      checklist: [
        'Your passport',
        'The dates and purpose of your trip',
        'Any visas or residence permits you hold for other countries',
      ],
      faqs: [
        {
          q: 'Do I need a visa for Jamaica?',
          a: 'It depends on your nationality and passport. We check the current rules published by the Jamaican authorities with you.',
        },
        {
          q: 'Does a trip to Jamaica help with a U.S. visa?',
          a: 'No, it is not a shortcut. Each U.S. visa application is assessed on your situation. We support trips that have a genuine purpose.',
        },
      ],
    },
  },
];
