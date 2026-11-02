// Testimonials, client photos and curated videos.
// Only genuine, supplied material lives here. `permission: 'pending'` items appear in the private
// draft but are filtered out of a launch build (INDEXING=true) until the owner confirms approval.
// Everything below was approved by Fernand Theodore (testimonials, client photos and client stories, 27 Oct 2026).
import type { Testimonial, VideoEntry, Lang, Permission } from './types';
import familyPhoto from '../assets/photos/fernando-with-family.jpg';
import carPhoto from '../assets/photos/fernando-with-client-car.jpg';
import documentPhoto from '../assets/photos/fernando-with-client-document.jpg';
import embassyTrio from '../assets/photos/client-embassy-trio.jpg';
import groupCards from '../assets/photos/client-group-cards.jpg';
import trioLetter from '../assets/photos/client-trio-letter.jpg';
import airportSelfie from '../assets/photos/client-airport-selfie.jpg';
import duoLetter from '../assets/photos/client-duo-letter.jpg';
import carLetter from '../assets/photos/client-car-letter.jpg';
import videoMoment from '../assets/photos/client-video-moment.jpg';
import type { ImageMetadata } from 'astro';

export const testimonials: Testimonial[] = [
  {
    id: 'whatsapp-gratitude-service',
    originalLang: 'ht',
    original:
      'Frè’m mèsi anpil pou sèvis ou, tan’w, pasyans ou, seryezite’w. Mwen mande Bondye pou’l beni’w e prezève lavi’w. Travay ou pa gen pri.',
    translation: {
      fr: 'Mon frère, merci beaucoup pour votre service, votre temps, votre patience et votre sérieux. Je demande à Dieu de vous bénir et de préserver votre vie. Votre travail n’a pas de prix.',
      en: 'Brother, thank you so much for your service, your time, your patience and your seriousness. I ask God to bless you and keep you. Your work is priceless.',
      es: 'Hermano, muchas gracias por su servicio, su tiempo, su paciencia y su seriedad. Le pido a Dios que lo bendiga y que guarde su vida. Su trabajo no tiene precio.',
    },
    attribution: { fr: 'Témoignage reçu sur WhatsApp', en: 'Testimonial received on WhatsApp', es: 'Testimonio recibido por WhatsApp' },
    sourceType: 'whatsapp',
    permission: 'approved',
    order: 1,
  },
  {
    id: 'whatsapp-pure-heart',
    originalLang: 'ht',
    original:
      'Mr Fernando mwen pa gen kob pou’m ta peye ou pou service ou […] que Bondieu beni fanmi’w en abondance paske ou se yon moun a cœur pure et droite.',
    translation: {
      fr: 'Monsieur Fernando, je n’aurai jamais assez d’argent pour vous remercier de votre service […] Que Dieu bénisse votre famille en abondance, car vous êtes une personne au cœur pur et droit.',
      en: 'Mr Fernando, I could never pay you enough for your service […] May God abundantly bless your family, because you are a person with a pure and upright heart.',
      es: 'Señor Fernando, nunca tendré suficiente dinero para pagarle su servicio […] Que Dios bendiga a su familia en abundancia, porque usted es una persona de corazón puro y recto.',
    },
    attribution: { fr: 'Témoignage reçu sur WhatsApp', en: 'Testimonial received on WhatsApp', es: 'Testimonio recibido por WhatsApp' },
    sourceType: 'whatsapp',
    permission: 'approved',
    order: 2,
  },
  {
    id: 'post-embassy-accompaniment',
    originalLang: 'ht',
    original:
      'Bnsr Mr Fernando, komanw ye, merci beaucoup pour accompagnement nou pr rendvs ambassade la, tt bagay te bien pase […] Encore une fois merci pr service nou.',
    translation: {
      fr: 'Bonsoir Monsieur Fernando, comment allez-vous ? Merci beaucoup pour votre accompagnement lors du rendez-vous à l’ambassade, tout s’est bien passé […] Encore une fois, merci pour votre service.',
      en: 'Good evening Mr Fernando, how are you? Thank you very much for your support at the embassy appointment, everything went well […] Once again, thank you for your service.',
      es: 'Buenas noches, señor Fernando, ¿cómo está? Muchas gracias por su acompañamiento en la cita de la embajada, todo salió bien […] Una vez más, gracias por su servicio.',
    },
    attribution: {
      fr: 'Message de client repris dans une publication de Fernando OMG Services (FOS)',
      en: 'Client message shared in a Fernando OMG Services (FOS) post',
      es: 'Mensaje de un cliente compartido en una publicación de Fernando OMG Services (FOS)',
    },
    sourceType: 'social-post',
    relatedService: 'interpreting',
    permission: 'approved',
    order: 3,
  },
];

export interface ClientPhoto {
  id: string;
  image: ImageMetadata;
  alt: Record<Lang, string>;
  caption: Record<Lang, string>;
  permission: Permission;
}

// Clients agreed to the sharing of these photos (confirmed by the designer, 20 Oct 2026).
// Documents and cards visible in the originals are irreversibly pixelated (scripts/prepare-images.mjs).
export const clientPhotos: ClientPhoto[] = [
  {
    id: 'embassy-trio',
    image: embassyTrio,
    alt: {
      fr: 'Fernand, en costume clair, pose avec deux clients souriants, dont une cliente tenant un petit drapeau américain.',
      en: 'Fernand, in a light suit, stands with two smiling clients, one holding a small U.S. flag.',
      es: 'Fernand, con traje claro, posa con dos clientes sonrientes; una de ellas sostiene una pequeña bandera de Estados Unidos.',
    },
    caption: { fr: 'Fernand avec des clients', en: 'Fernand with clients', es: 'Fernand con clientes' },
    permission: 'approved',
  },
  {
    id: 'group-cards',
    image: groupCards,
    alt: {
      fr: 'Fernand pose avec quatre clients qui tiennent chacun une carte, rendue illisible.',
      en: 'Fernand stands with four clients, each holding a card, blurred for privacy.',
      es: 'Fernand posa con cuatro clientes; cada uno sostiene una tarjeta, difuminada para proteger su privacidad.',
    },
    caption: { fr: 'Une belle journée pour nos clients', en: 'A great day for our clients', es: 'Un gran día para nuestros clientes' },
    permission: 'approved',
  },
  {
    id: 'trio-letter',
    image: trioLetter,
    alt: {
      fr: 'Trois clients souriants ; l’une tient un document rendu illisible.',
      en: 'Three smiling clients; one holds a document, blurred for privacy.',
      es: 'Tres clientes sonrientes; una sostiene un documento, difuminado para proteger su privacidad.',
    },
    caption: { fr: 'Après un rendez-vous', en: 'After an appointment', es: 'Después de una cita' },
    permission: 'approved',
  },
  {
    id: 'airport-selfie',
    image: airportSelfie,
    alt: {
      fr: 'Fernand prend un selfie souriant avec deux clients avant leur départ.',
      en: 'Fernand takes a smiling selfie with two clients before their trip.',
      es: 'Fernand se toma una selfi sonriente con dos clientes antes de su viaje.',
    },
    caption: { fr: 'Avant le départ', en: 'Before the trip', es: 'Antes del viaje' },
    permission: 'approved',
  },
  {
    id: 'duo-letter',
    image: duoLetter,
    alt: {
      fr: 'Deux clientes souriantes ; l’une tient un document rendu illisible.',
      en: 'Two smiling clients; one holds a document, blurred for privacy.',
      es: 'Dos clientas sonrientes; una sostiene un documento, difuminado para proteger su privacidad.',
    },
    caption: { fr: 'Des clientes satisfaites', en: 'Happy clients', es: 'Clientas satisfechas' },
    permission: 'approved',
  },
  {
    id: 'car-letter',
    image: carLetter,
    alt: {
      fr: 'Fernand sourit aux côtés d’une cliente qui tient un drapeau américain et un document rendu illisible.',
      en: 'Fernand smiles beside a client holding a U.S. flag and a document, blurred for privacy.',
      es: 'Fernand sonríe junto a una clienta que sostiene una bandera de Estados Unidos y un documento, difuminado para proteger su privacidad.',
    },
    caption: { fr: 'Un moment partagé avec une cliente', en: 'A moment shared with a client', es: 'Un momento compartido con una clienta' },
    permission: 'approved',
  },
  {
    id: 'family',
    image: familyPhoto,
    alt: {
      fr: 'Fernand, souriant, prend un selfie avec une famille à l’extérieur ; le visage de l’enfant est masqué.',
      en: 'Fernand, smiling, takes an outdoor selfie with a family; the child’s face is covered.',
      es: 'Fernand, sonriente, se toma una selfi al aire libre con una familia; la cara del niño está cubierta.',
    },
    caption: { fr: 'Avec une famille accompagnée', en: 'With a family we supported', es: 'Con una familia que acompañamos' },
    permission: 'approved',
  },
  {
    id: 'video-moment',
    image: videoMoment,
    alt: {
      fr: 'Fernand et une cliente, tous deux souriants, dans une voiture.',
      en: 'Fernand and a client, both smiling, in a car.',
      es: 'Fernand y una clienta, ambos sonrientes, dentro de un carro.',
    },
    caption: { fr: 'La joie d’une cliente', en: 'A client’s joy', es: 'La alegría de una clienta' },
    permission: 'approved',
  },
  {
    id: 'car-flag',
    image: carPhoto,
    alt: {
      fr: 'Fernand lève le pouce aux côtés d’une cliente qui tient un petit drapeau américain.',
      en: 'Fernand gives a thumbs up beside a client holding a small U.S. flag.',
      es: 'Fernand levanta el pulgar junto a una clienta que sostiene una pequeña bandera de Estados Unidos.',
    },
    caption: { fr: 'Un pouce levé pour la suite', en: 'A thumbs up for what comes next', es: 'Pulgar arriba para lo que viene' },
    permission: 'approved',
  },
  {
    id: 'car-document',
    image: documentPhoto,
    alt: {
      fr: 'Fernand sourit avec une cliente qui tient un document, rendu illisible pour protéger sa vie privée.',
      en: 'Fernand smiles with a client holding a document, blurred to protect her privacy.',
      es: 'Fernand sonríe con una clienta que sostiene un documento, difuminado para proteger su privacidad.',
    },
    caption: { fr: 'Après un rendez-vous', en: 'After an appointment', es: 'Después de una cita' },
    permission: 'approved',
  },
];

const tt = (id: string) => `https://www.tiktok.com/@fernandoomgservicessrl/video/${id}`;
/** FOS’s dedicated account for the Colombia service. */
const ttColombia = (id: string) => `https://www.tiktok.com/@foscolombia/video/${id}`;

export const videos: VideoEntry[] = [
  {
    id: 'fiance-family-visas',
    platform: 'tiktok',
    url: tt('7668125362752212245'),
    topic: { fr: 'Fiancé(e) et conjoint', en: 'Fiancé(e) and spouse', es: 'Prometido(a) y cónyuge' },
    title: { fr: 'Visas de fiancé(e) et de conjoint', en: 'Fiancé(e) and spouse visas', es: 'Visas de prometido(a) y de cónyuge' },
    summary: {
      fr: 'Présentation de l’accompagnement pour les dossiers K-1/K-2 et IR-1/CR-1 : entretien, examen médical, empreintes.',
      en: 'An overview of support for K-1/K-2 and IR-1/CR-1 cases: interview, medical exam, fingerprints.',
      es: 'Una presentación del acompañamiento para los casos K-1/K-2 e IR-1/CR-1: entrevista, examen médico y huellas.',
    },
    relatedService: 'us-fiance',
    kind: 'explainer',
    permission: 'approved',
  },
  {
    id: 'legalization-apostille-translation',
    platform: 'tiktok',
    url: tt('7637354713456905493'),
    topic: { fr: 'Documents', en: 'Documents', es: 'Documentos' },
    title: { fr: 'Légalisation, apostille et traduction', en: 'Legalization, apostille and translation', es: 'Legalización, apostilla y traducción' },
    summary: {
      fr: 'Extraits d’archives, casier judiciaire, diplômes et relevés de notes : les documents le plus souvent concernés.',
      en: 'Archive extracts, police records, diplomas and transcripts: the documents most often involved.',
      es: 'Extractos de archivo, certificados de no antecedentes, títulos y récords de notas: los documentos que más se piden.',
    },
    relatedService: 'apostille',
    kind: 'explainer',
    permission: 'approved',
  },
  {
    id: 'do-residency-pathways',
    platform: 'tiktok',
    url: tt('7682862115908013333'),
    topic: { fr: 'République Dominicaine', en: 'Dominican Republic', es: 'República Dominicana' },
    title: { fr: 'Les voies de résidence en République Dominicaine', en: 'Residency routes in the Dominican Republic', es: 'Las vías de residencia en la República Dominicana' },
    summary: {
      fr: 'Le début d’une série sur les voies de résidence : investisseurs, retraités, revenus de l’étranger, conjoints et famille.',
      en: 'The start of a series on residency routes: investors, retirees, foreign income, spouses and family.',
      es: 'El inicio de una serie sobre las vías de residencia: inversionistas, jubilados, rentas del exterior, cónyuges y familia.',
    },
    relatedService: 'do-residency',
    kind: 'explainer',
    permission: 'approved',
  },
  {
    id: 'mexico-visas',
    platform: 'tiktok',
    url: tt('7691441369369431317'),
    topic: { fr: 'Mexique', en: 'Mexico', es: 'México' },
    title: { fr: 'Visa touriste et étudiant pour le Mexique', en: 'Mexico tourist and student visas', es: 'Visa de turista y de estudiante para México' },
    summary: {
      fr: 'Une présentation des services de consultation pour les visas mexicains de visiteur et d’étudiant.',
      en: 'An introduction to consultation for Mexican visitor and student visas.',
      es: 'Una presentación de la asesoría para las visas mexicanas de visitante y de estudiante.',
    },
    relatedService: 'mx-visa',
    kind: 'explainer',
    permission: 'approved',
  },
  {
    id: 'us-passport',
    platform: 'tiktok',
    url: tt('7614215182000114964'),
    topic: { fr: 'Passeport américain', en: 'U.S. passport', es: 'Pasaporte estadounidense' },
    title: { fr: 'Consultation passeport américain', en: 'U.S. passport consultation', es: 'Asesoría para el pasaporte estadounidense' },
    summary: {
      fr: 'L’accompagnement proposé pour les demandes et renouvellements de passeport américain.',
      en: 'The support offered for U.S. passport applications and renewals.',
      es: 'El acompañamiento que ofrecemos para solicitudes y renovaciones del pasaporte estadounidense.',
    },
    relatedService: 'us-passport',
    kind: 'explainer',
    permission: 'approved',
  },
  // FOS Colombia (@foscolombia): supplied by the client to promote the Colombia service (Oct 2026).
  {
    id: 'colombia-study-career',
    platform: 'tiktok',
    url: ttColombia('7657736717532777748'),
    topic: { fr: 'Études en Colombie', en: 'Study in Colombia', es: 'Estudiar en Colombia' },
    title: {
      fr: 'Étudier en Colombie : choisir la bonne carrière',
      en: 'Studying in Colombia: choosing the right programme',
      es: 'Estudiar en Colombia: cómo elegir la carrera correcta',
    },
    summary: {
      fr: 'Vous êtes en Haïti ou en République Dominicaine et vous voulez étudier en Colombie ? Des conseils pour bien choisir votre carrière.',
      en: 'Living in Haiti or the Dominican Republic and hoping to study in Colombia? Advice on choosing the right programme.',
      es: '¿Vive en Haití o en la República Dominicana y quiere estudiar en Colombia? Consejos para elegir bien su carrera.',
    },
    relatedService: 'co-visa',
    kind: 'explainer',
    permission: 'approved',
  },
  {
    id: 'colombia-campus',
    platform: 'tiktok',
    url: ttColombia('7657260232187383061'),
    topic: { fr: 'Études en Colombie', en: 'Study in Colombia', es: 'Estudiar en Colombia' },
    title: {
      fr: 'Venir étudier en Colombie',
      en: 'Come and study in Colombia',
      es: 'Venga a estudiar a Colombia',
    },
    summary: {
      fr: 'Fernand vous fait découvrir un campus universitaire colombien, pour celles et ceux qui envisagent d’y étudier.',
      en: 'Fernand shows you around a Colombian university campus, for anyone thinking of studying there.',
      es: 'Fernand le muestra un campus universitario colombiano, para quienes piensan estudiar allí.',
    },
    relatedService: 'co-visa',
    kind: 'explainer',
    permission: 'approved',
  },
  {
    id: 'colombia-visa',
    platform: 'tiktok',
    url: ttColombia('7677959007834852629'),
    topic: { fr: 'Visa Colombie', en: 'Colombia visa', es: 'Visa para Colombia' },
    title: {
      fr: 'Votre visa pour la Colombie avec FOS',
      en: 'Your Colombia visa with FOS',
      es: 'Su visa para Colombia con FOS',
    },
    summary: {
      fr: 'L’équipe FOS Colombia présente son accompagnement pour préparer une demande de visa colombien.',
      en: 'The FOS Colombia team presents its support for preparing a Colombian visa application.',
      es: 'El equipo de FOS Colombia presenta su acompañamiento para preparar una solicitud de visa colombiana.',
    },
    relatedService: 'co-visa',
    kind: 'explainer',
    permission: 'approved',
  },
  {
    id: 'story-mexico',
    platform: 'tiktok',
    url: tt('7696660709844749569'),
    topic: { fr: 'Histoire de client', en: 'Client story', es: 'Historia de un cliente' },
    title: { fr: 'Un dossier de visa pour le Mexique', en: 'A Mexico visa case', es: 'Un caso de visa para México' },
    summary: {
      fr: 'Un moment partagé par l’équipe avec un client. Chaque dossier est différent.',
      en: 'A moment the team shared with a client. Every case is different.',
      es: 'Un momento que el equipo compartió con un cliente. Cada caso es diferente.',
    },
    relatedService: 'mx-visa',
    kind: 'client-story',
    permission: 'approved',
  },
  {
    id: 'story-us',
    platform: 'tiktok',
    url: tt('7586714886315576596'),
    topic: { fr: 'Histoire de client', en: 'Client story', es: 'Historia de un cliente' },
    title: { fr: 'Un dossier de visa américain', en: 'A U.S. visa case', es: 'Un caso de visa americana' },
    summary: {
      fr: 'Un moment partagé par l’équipe avec un client à Santo Domingo. Chaque dossier est différent.',
      en: 'A moment the team shared with a client in Santo Domingo. Every case is different.',
      es: 'Un momento que el equipo compartió con un cliente en Santo Domingo. Cada caso es diferente.',
    },
    relatedService: 'us-tourist',
    kind: 'client-story',
    permission: 'approved',
  },
  {
    id: 'story-fiance',
    platform: 'tiktok',
    url: tt('7539529968750054661'),
    topic: { fr: 'Histoire de client', en: 'Client story', es: 'Historia de un cliente' },
    title: { fr: 'Une étape franchie', en: 'A milestone reached', es: 'Una etapa superada' },
    summary: {
      fr: 'L’équipe partage une étape franchie par un client. Chaque dossier est différent.',
      en: 'The team shares a milestone reached by a client. Every case is different.',
      es: 'El equipo comparte una etapa superada por un cliente. Cada caso es diferente.',
    },
    relatedService: 'us-fiance',
    kind: 'client-story',
    permission: 'approved',
  },
];
