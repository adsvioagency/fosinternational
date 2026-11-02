import type { ServiceSource } from '../types';
import { src } from '../sources';

export const dominicanServices: ServiceSource[] = [
  {
    id: 'do-student',
    group: 'dominican',
    destinations: ['do'],
    needs: ['study'],
    icon: 'graduation',
    homePriority: 5,
    related: ['do-residency', 'apostille', 'translation'],
    relatedResources: ['do-student-consultation', 'translation-legalization-apostille'],
    sources: [src.migracion, src.migracionServicios],
    reviewed: '2026-10-18',
    fr: {
      slug: 'permis-etudiant-republique-dominicaine',
      label: 'Permis étudiant en République Dominicaine',
      h1: 'Permis étudiant en République Dominicaine',
      metaTitle: 'Permis étudiant en République Dominicaine : accompagnement',
      metaDescription:
        'Accompagnement pour préparer votre demande de permis étudiant auprès de la Direction générale des migrations en République Dominicaine : documents, étapes et suivi.',
      summary: 'Préparer votre dossier de permis étudiant auprès de la Direction générale des migrations.',
      intro: [
        'Si vous étudiez, ou souhaitez étudier, dans une université ou un établissement en République Dominicaine, votre séjour doit correspondre à votre statut d’étudiant.',
        'Nous vous aidons à comprendre la démarche auprès de la Direction générale des migrations (DGM), à rassembler les documents demandés et à suivre votre dossier.',
      ],
      forWho: [
        'Vous êtes admis(e) ou inscrit(e) dans un établissement dominicain.',
        'Vous devez renouveler votre permis étudiant.',
        'Vous préparez la demande pour votre enfant mineur.',
      ],
      whatItIs: [
        'Le permis étudiant est délivré par la Direction générale des migrations. Les exigences évoluent et varient selon la situation : nationalité, âge, type d’études, première demande ou renouvellement.',
        'Les dossiers comprennent généralement des documents d’identité, une preuve d’admission, des justificatifs de ressources et des documents d’état civil, parfois apostillés ou légalisés. Nous vérifions avec vous la liste à jour avant de commencer.',
      ],
      howWeHelp: [
        'Vérifier la liste à jour des documents pour votre situation.',
        'Organiser les traductions, apostilles ou légalisations nécessaires.',
        'Vous aider à remplir les formulaires et à suivre les rendez-vous.',
        'Vous expliquer les messages et convocations de la DGM.',
      ],
      steps: [
        { title: 'Faire le point', text: 'Établissement, durée des études, nationalité et situation actuelle.' },
        { title: 'Constituer le dossier', text: 'Nous établissons la liste des pièces et l’ordre des démarches.' },
        { title: 'Dépôt et suivi', text: 'Vous déposez la demande et suivez les rendez-vous indiqués par la DGM, avec notre aide.' },
      ],
      checklist: [
        'Votre passeport',
        'Votre lettre d’admission ou d’inscription',
        'Vos actes d’état civil',
        'Les courriers éventuels de la DGM',
      ],
      faqs: [
        {
          q: 'Le permis étudiant permet-il de travailler ?',
          a: 'Le permis étudiant correspond à un séjour pour études. Pour travailler, d’autres règles s’appliquent. Parlons de votre projet pour vous orienter correctement.',
        },
        {
          q: 'Combien de temps prend la démarche ?',
          a: 'Les délais dépendent de la DGM et de votre dossier. Un dossier complet dès le départ évite souvent des retards.',
        },
        {
          q: 'Pouvez-vous m’aider si mon dossier a déjà été déposé ?',
          a: 'Oui, nous pouvons vous aider à comprendre où en est votre dossier et à préparer la suite.',
        },
      ],
    },
    en: {
      slug: 'dominican-student-permit',
      label: 'Dominican student permit',
      h1: 'Student permit in the Dominican Republic',
      metaTitle: 'Dominican Republic student permit assistance',
      metaDescription:
        'Help preparing your student permit application with the Dominican Republic’s General Directorate of Migration: documents, steps and follow-up.',
      summary: 'Prepare your student permit file with the General Directorate of Migration.',
      intro: [
        'If you study, or plan to study, at a university or school in the Dominican Republic, your stay needs to match your student status.',
        'We help you understand the process with the General Directorate of Migration (DGM), gather the documents requested and follow your file.',
      ],
      forWho: [
        'You have been admitted to, or are enrolled at, a Dominican institution.',
        'You need to renew your student permit.',
        'You are applying on behalf of your minor child.',
      ],
      whatItIs: [
        'The student permit is issued by the General Directorate of Migration. Requirements change and vary with your situation: nationality, age, type of studies, first application or renewal.',
        'Files usually include identity documents, proof of admission, evidence of means of support and civil records, sometimes apostilled or legalized. We check the current list with you before you start.',
      ],
      howWeHelp: [
        'Check the current document list for your situation.',
        'Organise any translations, apostilles or legalizations needed.',
        'Help you complete the forms and follow the appointments.',
        'Explain DGM messages and notices.',
      ],
      steps: [
        { title: 'Review', text: 'Institution, length of studies, nationality and current situation.' },
        { title: 'Build the file', text: 'We list the documents and the order of steps.' },
        { title: 'Submission and follow-up', text: 'You submit the application and attend the DGM appointments, with our help.' },
      ],
      checklist: [
        'Your passport',
        'Your letter of admission or enrolment',
        'Your civil records',
        'Any letters from the DGM',
      ],
      faqs: [
        {
          q: 'Does a student permit allow me to work?',
          a: 'A student permit covers a stay for study. Different rules apply to work. Tell us about your plans and we will point you in the right direction.',
        },
        {
          q: 'How long does it take?',
          a: 'Timelines depend on the DGM and on your file. A complete file from the start often avoids delays.',
        },
        {
          q: 'Can you help if I have already applied?',
          a: 'Yes. We can help you understand where your file stands and prepare the next steps.',
        },
      ],
    },
  },
  {
    id: 'do-residency',
    group: 'dominican',
    destinations: ['do'],
    needs: ['settle'],
    icon: 'home',
    related: ['do-business', 'do-student', 'interpreting'],
    relatedResources: ['before-consultation'],
    sources: [src.migracion, src.migracionServicios],
    reviewed: '2026-10-18',
    fr: {
      slug: 'residence-travail-republique-dominicaine',
      label: 'Résidence et travail en République Dominicaine',
      h1: 'Résidence et permis de travail en République Dominicaine : orientation',
      metaTitle: 'Résidence et permis de travail en République Dominicaine : orientation',
      metaDescription:
        'Orientation pour comprendre les voies de résidence et les permis de travail en République Dominicaine, préparer vos documents et suivre vos rendez-vous à la DGM.',
      summary: 'Comprendre les voies de résidence ou de travail possibles et préparer votre dossier.',
      intro: [
        'Il existe plusieurs voies de résidence en République Dominicaine, selon votre situation : famille, travail, activité, investissement, retraite ou revenus.',
        'Nous vous aidons à comprendre les options qui pourraient correspondre à votre cas, à préparer vos documents et à suivre vos rendez-vous auprès de la Direction générale des migrations.',
      ],
      forWho: [
        'Vous vivez en République Dominicaine et souhaitez régulariser ou faire évoluer votre statut.',
        'Vous êtes conjoint(e) ou membre de la famille d’un Dominicain ou d’un résident.',
        'Vous avez une offre d’emploi ou une activité et vous vous informez sur le permis de travail.',
        'Vous devez renouveler une résidence ou un permis existant.',
      ],
      whatItIs: [
        'Chaque catégorie a ses propres conditions, documents et étapes : examen médical, enregistrement biométrique, remise de la carte. Les décisions relèvent de la Direction générale des migrations.',
        'Nous parlons d’orientation, car la bonne voie dépend vraiment de votre situation. Nous vous aidons à l’identifier honnêtement avant toute démarche.',
      ],
      howWeHelp: [
        'Faire le point sur votre situation et les voies qui pourraient s’appliquer.',
        'Préparer la liste des documents et leurs traductions ou apostilles.',
        'Vous aider à suivre les étapes et les rendez-vous de la DGM.',
        'Vous accompagner et interpréter lorsque c’est possible.',
      ],
      steps: [
        { title: 'Consultation', text: 'Nous examinons votre situation et les options réalistes.' },
        { title: 'Préparation du dossier', text: 'Documents, traductions et formulaires, dans le bon ordre.' },
        { title: 'Suivi des rendez-vous', text: 'Examens, biométrie, remise de carte : nous vous aidons à suivre chaque étape fixée par la DGM.' },
      ],
      checklist: [
        'Votre passeport et vos titres de séjour éventuels',
        'Vos actes d’état civil (naissance, mariage)',
        'Les documents liés à votre famille, votre travail ou votre activité',
      ],
      faqs: [
        {
          q: 'Quelle résidence correspond à ma situation ?',
          a: 'Cela dépend de votre famille, de votre activité et de vos documents. C’est précisément l’objet du premier échange.',
        },
        {
          q: 'Pouvez-vous accélérer ma résidence ?',
          a: 'Non. Les délais et les décisions dépendent de la Direction générale des migrations. Un dossier complet et bien suivi aide à éviter des retards.',
        },
        {
          q: 'Créer une entreprise donne-t-il droit à la résidence ?',
          a: 'Pas automatiquement. Certaines voies de résidence tiennent compte d’une activité ou d’un investissement, sous conditions. Parlons de votre projet.',
        },
      ],
    },
    en: {
      slug: 'dominican-residency-work',
      label: 'Dominican residency and work',
      h1: 'Residency and work permits in the Dominican Republic: guidance',
      metaTitle: 'Dominican Republic residency and work permit guidance',
      metaDescription:
        'Guidance to understand residency routes and work permits in the Dominican Republic, prepare your documents and follow your DGM appointments.',
      summary: 'Understand the residency or work routes that may apply and prepare your file.',
      intro: [
        'There are several residency routes in the Dominican Republic, depending on your situation: family, work, business activity, investment, retirement or income.',
        'We help you understand the options that may fit your case, prepare your documents and follow your appointments with the General Directorate of Migration.',
      ],
      forWho: [
        'You live in the Dominican Republic and want to regularise or change your status.',
        'You are the spouse or relative of a Dominican citizen or resident.',
        'You have a job offer or a business and want to learn about work permits.',
        'You need to renew an existing residency or permit.',
      ],
      whatItIs: [
        'Each category has its own conditions, documents and steps: medical examination, biometric registration, card collection. Decisions belong to the General Directorate of Migration.',
        'We call this guidance because the right route really depends on your situation. We help you identify it honestly before you start.',
      ],
      howWeHelp: [
        'Review your situation and the routes that may apply.',
        'Prepare the document list with translations or apostilles.',
        'Help you follow the DGM steps and appointments.',
        'Accompany you and interpret where possible.',
      ],
      steps: [
        { title: 'Consultation', text: 'We look at your situation and the realistic options.' },
        { title: 'File preparation', text: 'Documents, translations and forms, in the right order.' },
        { title: 'Appointment follow-up', text: 'Exams, biometrics, card collection: we help you follow each step set by the DGM.' },
      ],
      checklist: [
        'Your passport and any residence documents',
        'Your civil records (birth, marriage)',
        'Documents related to your family, work or business',
      ],
      faqs: [
        {
          q: 'Which residency fits my situation?',
          a: 'It depends on your family, your activity and your documents. That is exactly what the first conversation is for.',
        },
        {
          q: 'Can you speed up my residency?',
          a: 'No. Timelines and decisions depend on the General Directorate of Migration. A complete, well-followed file helps avoid delays.',
        },
        {
          q: 'Does setting up a business give me residency?',
          a: 'Not automatically. Some residency routes take a business activity or investment into account, under conditions. Let’s talk about your plans.',
        },
      ],
    },
  },
  {
    id: 'do-business',
    group: 'dominican',
    destinations: ['do'],
    needs: ['settle'],
    icon: 'briefcase',
    related: ['do-residency', 'translation', 'notarial'],
    relatedResources: ['before-consultation'],
    sources: [src.onapi, src.dgii],
    reviewed: '2026-10-18',
    fr: {
      slug: 'creation-entreprise-republique-dominicaine',
      label: 'Formalisation d’entreprise en République Dominicaine',
      h1: 'Formaliser votre activité en République Dominicaine : orientation',
      metaTitle: 'Créer ou formaliser son entreprise en République Dominicaine : orientation',
      metaDescription:
        'Orientation pour comprendre les étapes de formalisation d’une activité en République Dominicaine : nom commercial, enregistrements et documents.',
      summary: 'Comprendre les étapes pour enregistrer et formaliser votre activité.',
      intro: [
        'Vous avez une activité, ou un projet, et souhaitez lui donner un cadre officiel en République Dominicaine ? Plusieurs enregistrements peuvent être nécessaires selon la forme choisie.',
        'Nous vous aidons à comprendre les étapes, à préparer vos documents et à vous orienter vers les organismes concernés.',
      ],
      forWho: [
        'Vous exercez une activité et souhaitez la formaliser.',
        'Vous préparez la création d’une entreprise.',
        'Vous avez besoin de documents traduits ou certifiés pour ces démarches.',
      ],
      whatItIs: [
        'La formalisation peut comprendre, selon les cas, l’enregistrement d’un nom commercial auprès de l’ONAPI, l’inscription fiscale auprès de la DGII et d’autres enregistrements selon la forme de l’entreprise.',
        'Le contenu exact dépend de votre projet. Un accompagnement juridique ou comptable spécialisé peut aussi être nécessaire : nous vous le dirons clairement.',
      ],
      howWeHelp: [
        'Faire le point sur votre projet et la forme envisagée.',
        'Vous expliquer les étapes et les organismes concernés.',
        'Préparer vos documents, traductions et attestations.',
      ],
      steps: [
        { title: 'Comprendre votre projet', text: 'Activité, associés, lieu et objectifs.' },
        { title: 'Identifier les étapes', text: 'Enregistrements nécessaires et ordre des démarches.' },
        { title: 'Préparer les documents', text: 'Nous vous aidons à constituer un dossier complet.' },
      ],
      checklist: [
        'Une description de votre activité',
        'Vos pièces d’identité et celles des associés éventuels',
        'Le nom envisagé pour l’entreprise',
      ],
      faqs: [
        {
          q: 'Une entreprise me donne-t-elle un statut migratoire ?',
          a: 'Non, pas automatiquement. Les démarches d’entreprise et de résidence sont distinctes, même si certaines voies de résidence tiennent compte d’une activité.',
        },
        {
          q: 'Êtes-vous un cabinet comptable ou juridique ?',
          a: 'Non. Nous vous orientons et vous aidons à préparer les documents. Lorsque votre projet demande un professionnel spécialisé, nous vous le disons.',
        },
      ],
    },
    en: {
      slug: 'dominican-business-setup',
      label: 'Dominican business formalization',
      h1: 'Formalising your business in the Dominican Republic: guidance',
      metaTitle: 'Setting up a business in the Dominican Republic: guidance',
      metaDescription:
        'Guidance to understand the steps to formalise a business in the Dominican Republic: trade name, registrations and documents.',
      summary: 'Understand the steps to register and formalise your business.',
      intro: [
        'Do you have a business, or a plan for one, that you want to make official in the Dominican Republic? Several registrations may be needed depending on the structure you choose.',
        'We help you understand the steps, prepare your documents and find the right agencies.',
      ],
      forWho: [
        'You run an activity and want to formalise it.',
        'You are preparing to set up a company.',
        'You need translated or certified documents for these procedures.',
      ],
      whatItIs: [
        'Depending on the case, formalisation may include registering a trade name with ONAPI, tax registration with the DGII and other registrations depending on the company structure.',
        'The exact steps depend on your project. Specialist legal or accounting support may also be needed; we will tell you clearly.',
      ],
      howWeHelp: [
        'Review your project and the intended structure.',
        'Explain the steps and the agencies involved.',
        'Prepare your documents, translations and certifications.',
      ],
      steps: [
        { title: 'Understand your project', text: 'Activity, partners, location and goals.' },
        { title: 'Identify the steps', text: 'The registrations needed and their order.' },
        { title: 'Prepare the documents', text: 'We help you build a complete file.' },
      ],
      checklist: [
        'A description of your activity',
        'Your identity documents and those of any partners',
        'The name you have in mind for the business',
      ],
      faqs: [
        {
          q: 'Does a business give me immigration status?',
          a: 'No, not automatically. Business and residency procedures are separate, even though some residency routes take a business activity into account.',
        },
        {
          q: 'Are you an accounting or law firm?',
          a: 'No. We guide you and help you prepare documents. When your project needs a specialist professional, we tell you.',
        },
      ],
    },
  },
];
