import type { Resource, ResourceSource } from './types';
import { src } from './sources';
import { resourcesEs } from './es/resources';

const resourceSources: ResourceSource[] = [
  {
    id: 'k1-steps',
    relatedServices: ['us-fiance', 'us-family', 'interpreting'],
    sources: [src.uscisFiance, src.uscisI129f, src.dosK1, src.dosSuspension],
    reviewed: '2026-10-18',
    usRestrictionNotice: true,
    fr: {
      slug: 'visa-fiance-k1-grandes-etapes',
      title: 'Visa de fiancé(e) K-1/K-2 : comprendre les grandes étapes',
      metaTitle: 'Visa K-1/K-2 : les grandes étapes expliquées simplement',
      metaDescription:
        'Pétition I-129F, transfert du dossier, entretien à l’ambassade, mariage dans les 90 jours : les grandes étapes du visa de fiancé(e) K-1/K-2, expliquées simplement.',
      summary:
        'De la pétition à l’arrivée aux États-Unis, chaque étape relève d’une autorité différente. Voici comment elles s’enchaînent, et pourquoi une pétition approuvée n’est pas encore un visa.',
      sections: [
        {
          heading: 'Trois autorités, trois décisions',
          paragraphs: [
            'Le parcours K-1 fait intervenir trois administrations américaines. L’USCIS examine d’abord la pétition déposée par le citoyen ou la citoyenne des États-Unis. Le Département d’État, par l’intermédiaire de l’ambassade ou du consulat, décide ensuite de délivrer ou non le visa. Enfin, à l’arrivée, l’agent de la frontière (CBP) décide de l’admission.',
            'Chaque autorité prend sa propre décision. C’est pourquoi il est important de bien savoir à quelle étape vous vous trouvez.',
          ],
        },
        {
          heading: 'Étape 1 : la pétition I-129F',
          paragraphs: [
            'Le partenaire américain dépose le formulaire I-129F pour faire reconnaître la relation de fiançailles. Les deux personnes doivent être libres de se marier et, en règle générale, s’être rencontrées en personne au cours des deux années précédant la demande. Une dispense peut être demandée dans certains cas particuliers.',
            'Les enfants non mariés de moins de 21 ans de la personne fiancée doivent être mentionnés dans la pétition pour pouvoir demander un visa K-2.',
          ],
        },
        {
          heading: 'Étape 2 : de l’approbation à l’ambassade',
          paragraphs: [
            'Une fois la pétition approuvée, l’USCIS transmet le dossier au Département d’État. Il est ensuite envoyé à l’ambassade ou au consulat compétent, généralement là où vit la personne fiancée.',
            'Cette étape demande de la préparation : formulaires consulaires, documents d’état civil, examen médical auprès d’un médecin agréé et convocation à l’entretien.',
          ],
        },
        {
          heading: 'Étape 3 : l’entretien et la décision',
          paragraphs: [
            'L’agent consulaire examine le dossier et la relation. S’il délivre le visa K-1, celui-ci est valable pour une seule entrée, pendant une durée limitée. Si l’agent conclut que la relation n’est pas authentique, la pétition peut être renvoyée à l’USCIS.',
          ],
        },
        {
          heading: 'Après l’arrivée : 90 jours pour se marier',
          paragraphs: [
            'Le statut K-1 dure 90 jours et ne peut pas être prolongé. Le mariage doit avoir lieu dans ce délai. Ensuite, le conjoint peut déposer une demande de résidence permanente (formulaire I-485). Si le mariage a moins de deux ans au moment de l’approbation, la résidence est conditionnelle.',
          ],
        },
        {
          heading: 'Ce qu’il faut retenir',
          list: [
            'Une pétition approuvée est une étape importante, mais ce n’est pas un visa.',
            'Les délais varient : méfiez-vous de toute promesse de délai garanti.',
            'Votre nationalité compte : des restrictions de visas s’appliquent actuellement à plusieurs pays, dont Haïti.',
            'La sincérité de la relation et l’exactitude des informations sont essentielles à chaque étape.',
          ],
        },
      ],
      nextSteps: [
        'Rassemblez les avis déjà reçus et notez l’étape où vous en êtes.',
        'Vérifiez avec nous l’effet des règles actuelles sur votre nationalité.',
        'Préparez vos actes d’état civil et leurs traductions éventuelles.',
      ],
    },
    en: {
      slug: 'k1-fiance-visa-main-steps',
      title: 'K-1/K-2 fiancé(e) visa: understanding the main steps',
      metaTitle: 'K-1/K-2 visa: the main steps explained simply',
      metaDescription:
        'Form I-129F, case transfer, embassy interview, marriage within 90 days: the main steps of the K-1/K-2 fiancé(e) visa explained simply.',
      summary:
        'From petition to arrival in the United States, each step belongs to a different authority. Here is how they fit together, and why an approved petition is not yet a visa.',
      sections: [
        {
          heading: 'Three authorities, three decisions',
          paragraphs: [
            'The K-1 route involves three U.S. agencies. USCIS first reviews the petition filed by the U.S. citizen. The Department of State, through the embassy or consulate, then decides whether to issue the visa. Finally, on arrival, the border officer (CBP) decides on admission.',
            'Each authority makes its own decision. That is why it matters to know exactly which step you are at.',
          ],
        },
        {
          heading: 'Step 1: Form I-129F',
          paragraphs: [
            'The U.S. partner files Form I-129F to have the engagement recognised. Both partners must be free to marry and, as a general rule, must have met in person within the two years before filing. A waiver may be requested in specific circumstances.',
            'The fiancé(e)’s unmarried children under 21 must be listed on the petition to be able to apply for K-2 visas.',
          ],
        },
        {
          heading: 'Step 2: from approval to the embassy',
          paragraphs: [
            'Once the petition is approved, USCIS sends the case to the Department of State. It then goes to the relevant embassy or consulate, usually where the fiancé(e) lives.',
            'This stage needs preparation: consular forms, civil documents, a medical examination with an approved physician and the interview appointment.',
          ],
        },
        {
          heading: 'Step 3: interview and decision',
          paragraphs: [
            'The consular officer reviews the file and the relationship. If a K-1 visa is issued, it is valid for a single entry for a limited period. If the officer concludes the relationship is not genuine, the petition may be returned to USCIS.',
          ],
        },
        {
          heading: 'After arrival: 90 days to marry',
          paragraphs: [
            'K-1 status lasts 90 days and cannot be extended. The marriage must take place within that period. The spouse can then apply for permanent residence (Form I-485). If the marriage is less than two years old at approval, residence is conditional.',
          ],
        },
        {
          heading: 'Key points',
          list: [
            'An approved petition is an important milestone, but it is not a visa.',
            'Timelines vary: be wary of any guaranteed timeline.',
            'Your nationality matters: visa restrictions currently apply to several countries, including Haiti.',
            'A genuine relationship and accurate information are essential at every step.',
          ],
        },
      ],
      nextSteps: [
        'Gather the notices you have received and note which step you are at.',
        'Check with us how current rules affect your nationality.',
        'Prepare your civil documents and any translations.',
      ],
    },
  },
  {
    id: 'us-tourist-first-step',
    relatedServices: ['us-tourist', 'interpreting'],
    sources: [src.dosVisitor, src.dosSuspension],
    reviewed: '2026-10-18',
    usRestrictionNotice: true,
    fr: {
      slug: 'preparer-premier-echange-visa-touriste-americain',
      title: 'Visa touriste américain : préparer votre premier échange',
      metaTitle: 'Visa touriste américain : bien préparer votre premier échange',
      metaDescription:
        'Les informations utiles à réunir avant une consultation pour un visa visiteur américain B-1/B-2, et les idées reçues à éviter.',
      summary:
        'Avant de remplir le formulaire DS-160, quelques informations claires permettent de gagner du temps et d’éviter des erreurs coûteuses.',
      sections: [
        {
          heading: 'Commencer par votre projet',
          paragraphs: [
            'Le visa visiteur (B-2, ou B-1/B-2) concerne les séjours temporaires : tourisme, visite familiale, soins, certains déplacements d’affaires. La première question est simple : pourquoi voulez-vous voyager, combien de temps, et chez qui ?',
            'Un projet clair et vrai est la base d’une demande cohérente.',
          ],
        },
        {
          heading: 'Les informations à réunir',
          list: [
            'Votre passeport actuel et vos anciens passeports.',
            'Vos voyages des dernières années, avec les dates approximatives.',
            'Vos demandes de visa précédentes et leurs résultats, y compris les refus.',
            'Votre situation : emploi, études, activité, famille.',
            'Les coordonnées des personnes que vous comptez visiter, le cas échéant.',
          ],
        },
        {
          heading: 'Ce que regarde l’agent consulaire',
          paragraphs: [
            'La loi américaine présume qu’un demandeur de visa visiteur a l’intention d’immigrer, tant qu’il n’a pas montré le contraire. L’agent s’intéresse donc à l’objet de votre voyage et à vos attaches dans votre pays de résidence. Il n’existe pas de document « magique » : c’est l’ensemble de votre situation qui compte.',
          ],
        },
        {
          heading: 'Idées reçues à éviter',
          list: [
            'Personne ne peut garantir un visa, quel que soit le prix demandé.',
            'Voyager dans un autre pays n’est pas un raccourci : un voyage doit avoir un véritable objet.',
            'Des informations inexactes sur le formulaire peuvent avoir des conséquences durables.',
            'Payer à nouveau les frais sans changement de situation n’améliore pas forcément le résultat.',
          ],
        },
        {
          heading: 'Votre nationalité compte',
          paragraphs: [
            'Des restrictions s’appliquent actuellement à la délivrance de visas pour plusieurs nationalités, dont la nationalité haïtienne, avec des exceptions limitées. Avant de payer des frais, vérifiez votre situation.',
          ],
        },
      ],
      nextSteps: [
        'Notez votre projet de voyage en quelques lignes.',
        'Rassemblez vos passeports et vos anciennes décisions de visa.',
        'Envoyez-nous un message pour vérifier votre situation avant de payer les frais.',
      ],
    },
    en: {
      slug: 'preparing-first-conversation-us-tourist-visa',
      title: 'U.S. tourist visa: preparing your first conversation',
      metaTitle: 'U.S. tourist visa: preparing your first conversation',
      metaDescription:
        'The information to gather before a consultation for a U.S. B-1/B-2 visitor visa, and common misconceptions to avoid.',
      summary:
        'Before completing Form DS-160, a few clear details save time and help you avoid costly mistakes.',
      sections: [
        {
          heading: 'Start with your plans',
          paragraphs: [
            'The visitor visa (B-2, or B-1/B-2) covers temporary stays: tourism, family visits, medical care and some business travel. The first question is simple: why do you want to travel, for how long, and to see whom?',
            'A clear, genuine plan is the basis of a consistent application.',
          ],
        },
        {
          heading: 'Information to gather',
          list: [
            'Your current passport and any previous passports.',
            'Your travel in recent years, with approximate dates.',
            'Previous visa applications and their outcomes, including refusals.',
            'Your situation: work, studies, business, family.',
            'Contact details of the people you plan to visit, if any.',
          ],
        },
        {
          heading: 'What the consular officer looks at',
          paragraphs: [
            'U.S. law presumes that a visitor visa applicant intends to immigrate unless they show otherwise. The officer therefore looks at the purpose of your trip and your ties to your country of residence. There is no “magic” document; your overall situation is what matters.',
          ],
        },
        {
          heading: 'Misconceptions to avoid',
          list: [
            'Nobody can guarantee a visa, whatever price they charge.',
            'Travelling to another country is not a shortcut: a trip should have a genuine purpose.',
            'Inaccurate information on the form can have lasting consequences.',
            'Paying the fee again without any change in your situation does not necessarily improve the outcome.',
          ],
        },
        {
          heading: 'Your nationality matters',
          paragraphs: [
            'Restrictions currently apply to visa issuance for several nationalities, including Haitian nationals, with limited exceptions. Check your situation before paying any fees.',
          ],
        },
      ],
      nextSteps: [
        'Write down your travel plans in a few lines.',
        'Gather your passports and previous visa decisions.',
        'Message us to check your situation before paying the fee.',
      ],
    },
  },
  {
    id: 'interpreting-appointment',
    relatedServices: ['interpreting', 'do-residency', 'us-fiance'],
    sources: [],
    reviewed: '2026-10-18',
    fr: {
      slug: 'interpretation-rendez-vous-se-preparer',
      title: 'Interprétation lors d’un rendez-vous : comment se préparer',
      metaTitle: 'Interprétation lors d’un rendez-vous : bien se préparer',
      metaDescription:
        'Comment préparer un rendez-vous avec interprète : vérifier les règles du lieu, organiser vos documents et bien communiquer le jour J.',
      summary:
        'Un rendez-vous important se prépare. Voici comment travailler avec un interprète pour que votre message soit compris fidèlement.',
      sections: [
        {
          heading: 'Vérifier d’abord les règles du lieu',
          paragraphs: [
            'Chaque institution a ses règles. Certaines ambassades n’admettent que les demandeurs ; certains services fournissent leur propre interprète ; d’autres acceptent un accompagnateur. Renseignez-vous avant le jour du rendez-vous, et apportez votre convocation.',
          ],
        },
        {
          heading: 'Préparer le contenu avec l’interprète',
          list: [
            'Expliquez à l’avance l’objet du rendez-vous et les points importants de votre situation.',
            'Montrez les documents qui pourraient être évoqués.',
            'Notez les dates, les noms et les lieux importants.',
            'Indiquez les mots ou expressions que vous n’êtes pas sûr(e) de comprendre.',
          ],
        },
        {
          heading: 'Le jour du rendez-vous',
          list: [
            'Parlez en phrases courtes et laissez le temps d’interpréter.',
            'Adressez-vous à la personne qui vous interroge, pas à l’interprète.',
            'Si vous ne comprenez pas une question, dites-le : il vaut mieux demander que deviner.',
            'Répondez toujours avec sincérité. L’interprète transmet vos paroles, sans les modifier.',
          ],
        },
        {
          heading: 'Le rôle de l’interprète',
          paragraphs: [
            'L’interprète transmet fidèlement ce qui est dit, dans les deux sens. Il ne répond pas à votre place et n’influence pas la décision. Son rôle est de faire en sorte que vous compreniez et soyez compris(e).',
          ],
        },
      ],
      nextSteps: [
        'Vérifiez les règles de l’institution indiquées sur votre convocation.',
        'Préparez vos documents dans l’ordre.',
        'Contactez-nous quelques jours avant le rendez-vous pour en parler.',
      ],
    },
    en: {
      slug: 'interpreting-at-an-appointment',
      title: 'Interpreting at an appointment: how to prepare',
      metaTitle: 'Interpreting at an appointment: how to prepare',
      metaDescription:
        'How to prepare for an appointment with an interpreter: check the venue’s rules, organise your documents and communicate well on the day.',
      summary:
        'An important appointment needs preparation. Here is how to work with an interpreter so your message is conveyed faithfully.',
      sections: [
        {
          heading: 'Check the venue’s rules first',
          paragraphs: [
            'Each institution has its own rules. Some embassies admit only applicants; some offices provide their own interpreter; others accept a companion. Find out before the day of the appointment, and bring your appointment letter.',
          ],
        },
        {
          heading: 'Prepare the content with the interpreter',
          list: [
            'Explain the purpose of the appointment and the key points of your situation in advance.',
            'Show the documents that may come up.',
            'Note important dates, names and places.',
            'Point out words or expressions you are not sure you understand.',
          ],
        },
        {
          heading: 'On the day',
          list: [
            'Speak in short sentences and leave time for interpreting.',
            'Speak to the person asking the questions, not to the interpreter.',
            'If you do not understand a question, say so: asking is better than guessing.',
            'Always answer truthfully. The interpreter conveys your words without changing them.',
          ],
        },
        {
          heading: 'The interpreter’s role',
          paragraphs: [
            'The interpreter faithfully conveys what is said, in both directions. They do not answer for you and do not influence the decision. Their role is to make sure you understand and are understood.',
          ],
        },
      ],
      nextSteps: [
        'Check the institution’s rules on your appointment letter.',
        'Put your documents in order.',
        'Contact us a few days before the appointment to talk it through.',
      ],
    },
  },
  {
    id: 'translation-legalization-apostille',
    relatedServices: ['translation', 'legalization', 'apostille'],
    sources: [src.hcchDr, src.mirex],
    reviewed: '2026-10-18',
    fr: {
      slug: 'traduction-legalisation-apostille-differences',
      title: 'Traduction, légalisation et apostille : quelles différences ?',
      metaTitle: 'Traduction, légalisation, apostille : les différences expliquées',
      metaDescription:
        'Traduction, légalisation, apostille : à quoi sert chaque démarche, quand elle est nécessaire et dans quel ordre la faire pour vos documents.',
      summary:
        'Trois démarches souvent confondues, qui répondent à trois questions différentes : la langue, l’authenticité et la reconnaissance à l’étranger.',
      sections: [
        {
          heading: 'La traduction : une question de langue',
          paragraphs: [
            'La traduction rend un document compréhensible dans la langue demandée. Selon l’institution, une traduction simple peut suffire, ou une traduction réalisée par un traducteur ou un interprète habilité peut être exigée.',
          ],
        },
        {
          heading: 'La légalisation : une chaîne de vérifications',
          paragraphs: [
            'La légalisation confirme l’authenticité de la signature et du sceau de l’autorité qui a émis le document. Elle est surtout utilisée pour les pays qui ne font pas partie de la Convention Apostille, et peut passer par plusieurs autorités, dont le consulat du pays de destination.',
          ],
        },
        {
          heading: 'L’apostille : un certificat unique',
          paragraphs: [
            'Entre les pays qui appliquent la Convention de La Haye de 1961, l’apostille remplace la légalisation par un certificat unique. En République Dominicaine, l’autorité compétente est le ministère des Affaires étrangères (MIREX).',
            'Ni la légalisation ni l’apostille ne valident le contenu du document : elles confirment son origine.',
          ],
        },
        {
          heading: 'Dans quel ordre ?',
          paragraphs: [
            'Il n’y a pas d’ordre universel. Selon le pays de destination, on fait parfois apostiller l’original avant de le traduire, ou l’on fait aussi certifier la traduction. L’ordre est souvent la cause des dossiers à refaire : vérifiez-le avant de commencer.',
          ],
        },
        {
          heading: 'Les questions à se poser',
          list: [
            'Dans quel pays et pour quelle institution le document sera-t-il utilisé ?',
            'Ce pays applique-t-il la Convention Apostille ?',
            'Quelle langue et quel type de traduction l’institution exige-t-elle ?',
            'Qui a émis le document ? En principe, ce sont les autorités de ce pays qui l’apostillent ou le légalisent.',
          ],
        },
      ],
      nextSteps: [
        'Demandez à l’institution destinataire ses exigences précises, par écrit si possible.',
        'Vérifiez que vos documents originaux sont récents et lisibles.',
        'Parlons de l’ordre des démarches avant de payer des traductions.',
      ],
    },
    en: {
      slug: 'translation-legalization-apostille-differences',
      title: 'Translation, legalization and apostille: what is the difference?',
      metaTitle: 'Translation, legalization, apostille: the differences explained',
      metaDescription:
        'Translation, legalization, apostille: what each step is for, when you need it and in what order to do it for your documents.',
      summary:
        'Three steps that are often confused, each answering a different question: language, authenticity and recognition abroad.',
      sections: [
        {
          heading: 'Translation: a question of language',
          paragraphs: [
            'Translation makes a document understandable in the language required. Depending on the institution, a simple translation may be enough, or a translation by an authorised translator or interpreter may be required.',
          ],
        },
        {
          heading: 'Legalization: a chain of checks',
          paragraphs: [
            'Legalization confirms the authenticity of the signature and seal of the authority that issued the document. It is used mainly for countries that are not party to the Apostille Convention, and may involve several authorities, including the destination country’s consulate.',
          ],
        },
        {
          heading: 'The apostille: a single certificate',
          paragraphs: [
            'Between countries that apply the 1961 Hague Convention, an apostille replaces legalization with a single certificate. In the Dominican Republic, the competent authority is the Ministry of Foreign Affairs (MIREX).',
            'Neither legalization nor an apostille validates a document’s content; they confirm where it came from.',
          ],
        },
        {
          heading: 'In what order?',
          paragraphs: [
            'There is no universal order. Depending on the destination country, the original is sometimes apostilled before translation, or the translation must also be certified. The order is often why files have to be redone, so check it before you start.',
          ],
        },
        {
          heading: 'Questions to ask',
          list: [
            'In which country, and for which institution, will the document be used?',
            'Does that country apply the Apostille Convention?',
            'Which language and type of translation does the institution require?',
            'Who issued the document? As a rule, that country’s authorities apostille or legalize it.',
          ],
        },
      ],
      nextSteps: [
        'Ask the receiving institution for its exact requirements, in writing if possible.',
        'Check that your original documents are recent and legible.',
        'Talk to us about the order of steps before paying for translations.',
      ],
    },
  },
  {
    id: 'canada-visitor-vs-study',
    relatedServices: ['ca-visitor', 'ca-study'],
    sources: [src.irccVisitor, src.irccStudy, src.irccStudyDocs],
    reviewed: '2026-10-18',
    fr: {
      slug: 'canada-visa-visiteur-ou-permis-etudes',
      title: 'Canada : distinguer visa visiteur et permis d’études',
      metaTitle: 'Canada : visa visiteur ou permis d’études ? Les différences',
      metaDescription:
        'Visa visiteur ou permis d’études pour le Canada : à quoi sert chaque document, ce qu’il faut fournir et pourquoi ce ne sont pas les mêmes démarches.',
      summary:
        'Les deux démarches passent par IRCC, mais elles ne répondent pas au même projet et ne demandent pas les mêmes documents.',
      sections: [
        {
          heading: 'Le visa visiteur : pour un séjour temporaire',
          paragraphs: [
            'Le visa visiteur, ou visa de résident temporaire, est apposé dans votre passeport. Il montre que vous remplissez les conditions pour voyager au Canada, par exemple pour du tourisme ou une visite familiale. Selon IRCC, les frais commencent à 100 $ CA, et des données biométriques peuvent être demandées.',
          ],
        },
        {
          heading: 'Le permis d’études : pour suivre un programme',
          paragraphs: [
            'Le permis d’études permet d’étudier dans un établissement d’enseignement désigné. Il demande notamment une lettre d’acceptation, dans la plupart des cas une lettre d’attestation provinciale ou territoriale, une preuve de ressources financières et une preuve d’identité. Les frais sont de 150 $ CA.',
            'Le permis d’études n’est pas un visa : si la demande est approuvée, un visa de résident temporaire ou une autorisation de voyage électronique est délivré pour le voyage.',
          ],
        },
        {
          heading: 'En résumé',
          list: [
            'Visiter de la famille ou faire du tourisme : visa visiteur.',
            'Suivre un programme de plus de six mois : permis d’études, en principe.',
            'Des études courtes de six mois ou moins peuvent, dans certains cas, se faire sans permis d’études.',
            'Dans tous les cas, la demande se fait avant le départ et la décision appartient à IRCC.',
          ],
        },
        {
          heading: 'Pourquoi c’est important',
          paragraphs: [
            'Demander le mauvais document fait perdre du temps et des frais. Partir avec un visa visiteur pour suivre un programme long n’est pas une solution : le séjour doit correspondre au statut.',
          ],
        },
      ],
      nextSteps: [
        'Définissez votre projet : visite ou études, et pour quelle durée.',
        'Pour des études, commencez par l’admission dans un établissement désigné.',
        'Contactez-nous pour préparer la demande qui correspond à votre projet.',
      ],
    },
    en: {
      slug: 'canada-visitor-visa-or-study-permit',
      title: 'Canada: visitor visa vs study permit',
      metaTitle: 'Canada: visitor visa or study permit? The differences',
      metaDescription:
        'Visitor visa or study permit for Canada: what each document is for, what you need to provide and why they are separate applications.',
      summary:
        'Both go through IRCC, but they serve different plans and require different documents.',
      sections: [
        {
          heading: 'Visitor visa: for a temporary stay',
          paragraphs: [
            'A visitor visa, or temporary resident visa, is placed in your passport. It shows that you meet the requirements to travel to Canada, for example for tourism or a family visit. According to IRCC, fees start from CAN$100, and biometrics may be required.',
          ],
        },
        {
          heading: 'Study permit: to follow a programme',
          paragraphs: [
            'A study permit allows you to study at a designated learning institution. It requires a letter of acceptance, in most cases a provincial or territorial attestation letter, proof of financial support and proof of identity. The fee is CAN$150.',
            'A study permit is not a visa: if approved, a temporary resident visa or electronic travel authorisation is issued for travel.',
          ],
        },
        {
          heading: 'In short',
          list: [
            'Visiting family or tourism: visitor visa.',
            'Following a programme longer than six months: generally a study permit.',
            'Short courses of six months or less can, in some cases, be taken without a study permit.',
            'In every case you apply before departure, and IRCC makes the decision.',
          ],
        },
        {
          heading: 'Why it matters',
          paragraphs: [
            'Applying for the wrong document costs time and fees. Travelling on a visitor visa to follow a long programme is not a solution: your stay must match your status.',
          ],
        },
      ],
      nextSteps: [
        'Define your plans: a visit or studies, and for how long.',
        'For studies, start with admission to a designated institution.',
        'Contact us to prepare the application that matches your plans.',
      ],
    },
  },
  {
    id: 'do-student-consultation',
    relatedServices: ['do-student', 'apostille', 'translation'],
    sources: [src.migracion, src.migracionServicios],
    reviewed: '2026-10-18',
    fr: {
      slug: 'republique-dominicaine-preparer-consultation-permis-etudiant',
      title: 'République Dominicaine : préparer une consultation pour un permis étudiant',
      metaTitle: 'Permis étudiant en République Dominicaine : préparer la consultation',
      metaDescription:
        'Les informations et documents utiles à réunir avant une consultation pour un permis étudiant en République Dominicaine.',
      summary:
        'Quelques informations bien préparées permettent de vérifier rapidement la liste à jour des documents pour votre situation.',
      sections: [
        {
          heading: 'Pourquoi préparer cet échange',
          paragraphs: [
            'Le permis étudiant est délivré par la Direction générale des migrations (DGM). Les exigences dépendent de votre nationalité, de votre âge, de votre établissement et de votre situation actuelle. Plus vos informations sont claires, plus nous pouvons vous orienter précisément.',
          ],
        },
        {
          heading: 'Les informations utiles',
          list: [
            'Le nom de votre établissement et votre programme.',
            'La date de début et la durée prévue des études.',
            'Votre statut actuel en République Dominicaine.',
            'S’il s’agit d’une première demande ou d’un renouvellement.',
            'Pour un mineur : la situation des parents ou tuteurs.',
          ],
        },
        {
          heading: 'Les documents que l’on retrouve souvent',
          paragraphs: [
            'Sans constituer une liste officielle, les dossiers comprennent souvent un passeport en cours de validité, une preuve d’admission, des justificatifs de ressources et une assurance, ainsi que des documents d’état civil et un certificat de casier judiciaire, parfois apostillés ou légalisés et traduits. La liste exacte doit être vérifiée auprès de la DGM au moment de la demande.',
          ],
        },
        {
          heading: 'Les erreurs fréquentes',
          list: [
            'Faire traduire un document avant de savoir s’il doit d’abord être apostillé.',
            'Présenter un document trop ancien.',
            'Laisser expirer son passeport pendant la démarche.',
          ],
        },
      ],
      nextSteps: [
        'Notez les informations ci-dessus.',
        'Vérifiez la date d’expiration de votre passeport.',
        'Envoyez-nous un message pour fixer un premier échange.',
      ],
    },
    en: {
      slug: 'dominican-republic-preparing-student-permit-consultation',
      title: 'Dominican Republic: preparing a student permit consultation',
      metaTitle: 'Dominican student permit: preparing your consultation',
      metaDescription:
        'The information and documents to gather before a consultation for a student permit in the Dominican Republic.',
      summary:
        'A few well-prepared details let us quickly check the current document list for your situation.',
      sections: [
        {
          heading: 'Why prepare',
          paragraphs: [
            'The student permit is issued by the General Directorate of Migration (DGM). Requirements depend on your nationality, age, institution and current situation. The clearer your information, the more precisely we can guide you.',
          ],
        },
        {
          heading: 'Useful information',
          list: [
            'The name of your institution and programme.',
            'The start date and expected length of your studies.',
            'Your current status in the Dominican Republic.',
            'Whether this is a first application or a renewal.',
            'For a minor: the situation of the parents or guardians.',
          ],
        },
        {
          heading: 'Documents that often come up',
          paragraphs: [
            'Without being an official list, files often include a valid passport, proof of admission, evidence of means of support and insurance, civil records and a police certificate, sometimes apostilled or legalized and translated. The exact list must be checked with the DGM at the time of application.',
          ],
        },
        {
          heading: 'Common mistakes',
          list: [
            'Translating a document before knowing whether it needs an apostille first.',
            'Submitting a document that is too old.',
            'Letting your passport expire during the process.',
          ],
        },
      ],
      nextSteps: [
        'Write down the information above.',
        'Check your passport’s expiry date.',
        'Message us to arrange a first conversation.',
      ],
    },
  },
  {
    id: 'before-consultation',
    relatedServices: ['interpreting', 'translation', 'us-fiance'],
    sources: [],
    reviewed: '2026-10-18',
    fr: {
      slug: 'informations-utiles-avant-consultation',
      title: 'Les informations utiles à transmettre avant une consultation',
      metaTitle: 'Avant une consultation : les informations utiles à transmettre',
      metaDescription:
        'Comment préparer votre premier message et votre consultation : ce qu’il faut indiquer, ce qu’il vaut mieux garder pour le rendez-vous.',
      summary:
        'Un premier message clair aide l’équipe à vous répondre plus utilement. Voici quoi indiquer, et ce qu’il n’est pas nécessaire d’envoyer.',
      sections: [
        {
          heading: 'Dans votre premier message',
          list: [
            'Votre prénom, votre nom et votre numéro de téléphone ou WhatsApp.',
            'Le service qui vous intéresse, ou « je ne sais pas encore ».',
            'Votre besoin en quelques phrases : ce que vous souhaitez faire et l’étape où vous en êtes.',
          ],
        },
        {
          heading: 'Ce qu’il vaut mieux ne pas envoyer tout de suite',
          paragraphs: [
            'Inutile d’envoyer vos passeports, numéros de dossier, relevés bancaires ou pièces d’identité lors du premier contact. Si des documents sont nécessaires, l’équipe vous dira lesquels, et comment les transmettre, au moment de la consultation.',
          ],
        },
        {
          heading: 'Un seul message, bien complet',
          paragraphs: [
            'L’équipe peut être en consultation. Un message complet, plutôt que plusieurs messages courts, permet de vous répondre plus clairement. Merci de votre patience : nous répondons pendant nos horaires de messagerie.',
          ],
        },
        {
          heading: 'Pour la consultation',
          list: [
            'Notez vos questions à l’avance.',
            'Rassemblez les courriers et avis déjà reçus.',
            'Indiquez si vous préférez une consultation en ligne ou au bureau. Au bureau, la consultation se fait uniquement sur rendez-vous.',
          ],
        },
      ],
      nextSteps: [
        'Utilisez notre formulaire : il prépare votre message pour WhatsApp.',
        'Vérifiez le message, puis envoyez-le depuis WhatsApp.',
        'L’équipe vous répondra pour la suite.',
      ],
    },
    en: {
      slug: 'useful-information-before-a-consultation',
      title: 'Useful information to share before a consultation',
      metaTitle: 'Before a consultation: the information worth sharing',
      metaDescription:
        'How to prepare your first message and your consultation: what to include, and what is better kept for the appointment.',
      summary:
        'A clear first message helps the team reply more usefully. Here is what to include, and what you do not need to send.',
      sections: [
        {
          heading: 'In your first message',
          list: [
            'Your first name, last name and phone or WhatsApp number.',
            'The service you are interested in, or “I’m not sure yet”.',
            'Your need in a few sentences: what you want to do and where you are in the process.',
          ],
        },
        {
          heading: 'What not to send straight away',
          paragraphs: [
            'There is no need to send passports, case numbers, bank statements or identity documents in the first contact. If documents are needed, the team will tell you which ones, and how to share them, at the consultation.',
          ],
        },
        {
          heading: 'One complete message',
          paragraphs: [
            'The team may be in a consultation. One complete message, rather than several short ones, helps us reply more clearly. Thank you for your patience: we reply during our messaging hours.',
          ],
        },
        {
          heading: 'For the consultation',
          list: [
            'Write your questions down in advance.',
            'Gather the letters and notices you have received.',
            'Say whether you prefer an online or office consultation. Office consultations are by appointment only.',
          ],
        },
      ],
      nextSteps: [
        'Use our form: it prepares your message for WhatsApp.',
        'Check the message, then send it from WhatsApp.',
        'The team will reply about next steps.',
      ],
    },
  },
];

/** Joins each guide with its Spanish copy; a missing translation fails the build. */
export const resources: Resource[] = resourceSources.map((r) => {
  const es = resourcesEs[r.id];
  if (!es) throw new Error(`Missing Spanish copy for resource "${r.id}" in src/content/es/resources.ts`);
  return { ...r, es };
});

export const resourceById = new Map(resources.map((r) => [r.id, r]));
