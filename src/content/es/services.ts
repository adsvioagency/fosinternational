// Spanish (Latin America) copy for every service, keyed by service ID.
// Written for readers in the Dominican Republic and the region: "usted", local terms (trámite, cita,
// acta), and the official Spanish names that agencies use themselves (USCIS, DGM, MIREX, IRCC).
import type { ServiceLocale } from '../types';

export const servicesEs: Record<string, ServiceLocale> = {
  'us-fiance': {
    slug: 'visa-prometido-estados-unidos',
    label: 'Visa de prometido(a) K-1/K-2',
    h1: 'Visa de prometido(a) K-1/K-2 para Estados Unidos',
    metaTitle: 'Visa de prometido(a) K-1/K-2 desde Santo Domingo',
    metaDescription:
      'Entienda y prepare su caso de visa de prometido(a) K-1/K-2 desde la República Dominicana: etapas principales, documentos que reunir, interpretación y acompañamiento.',
    summary: 'Entender cada etapa, organizar sus documentos y prepararse para la entrevista en la embajada.',
    intro: [
      'La visa de prometido(a) K-1 permite que la pareja comprometida de un ciudadano o ciudadana de Estados Unidos viaje a ese país para casarse allí. La visa K-2 es para sus hijos solteros menores de 21 años.',
      'El proceso pasa por varias agencias y por etapas bien diferentes. Le ayudamos a entender en qué punto está, a preparar sus documentos con cuidado y a comunicarse con claridad en cada paso.',
    ],
    forWho: [
      'Usted está comprometido(a) con un ciudadano o ciudadana de Estados Unidos.',
      'Su pareja presentó, o quiere presentar, la petición I-129F.',
      'Recibió un aviso y quiere entender qué sigue.',
      'Sus hijos podrían acompañarle con una visa K-2.',
    ],
    whatItIs: [
      'Según el USCIS (Servicio de Ciudadanía e Inmigración de Estados Unidos), primero el ciudadano o la ciudadana presenta el formulario I-129F para que se reconozca el compromiso. Ambas personas deben estar libres para casarse y, por regla general, haberse conocido en persona en los dos años anteriores a la solicitud.',
      'Una petición aprobada no es una visa. Después de la aprobación, el caso pasa al Departamento de Estado y luego a la embajada o al consulado correspondiente, que realiza la entrevista y decide si otorga o no la visa. Al llegar, el oficial de frontera decide la admisión, y la boda debe celebrarse dentro de los 90 días siguientes a la entrada.',
    ],
    howWeHelp: [
      'Explicarle cada etapa con palabras sencillas: petición, traslado del caso, preparación consular y entrevista.',
      'Ayudarle a organizar sus documentos y a revisar que coincidan con las instrucciones recibidas.',
      'Preparar la entrevista: qué llevar y cómo presentar su situación con claridad y honestidad.',
      'Interpretar entre usted, su pareja y las instituciones, según las reglas de cada lugar.',
      'Acompañarle a las citas cuando la institución lo permite.',
    ],
    steps: [
      {
        title: 'Primera conversación',
        text: 'Usted nos cuenta su situación y en qué etapa se encuentra. Le decimos con franqueza lo que podemos hacer, incluso cuando las reglas actuales limitan las opciones.',
      },
      {
        title: 'Petición I-129F',
        text: 'Su pareja presenta la petición ante el USCIS. Le ayudamos a entender las pruebas solicitadas y a organizar las suyas.',
      },
      {
        title: 'Preparación consular',
        text: 'Después de la aprobación vienen los formularios, el examen médico y los documentos que pide la embajada.',
      },
      {
        title: 'Entrevista y decisión',
        text: 'La embajada o el consulado realiza la entrevista y toma la decisión. Le ayudamos a prepararse con tranquilidad.',
      },
    ],
    checklist: [
      'Su pasaporte y el de los hijos incluidos',
      'Los avisos o cartas que ya recibió (USCIS, Centro Nacional de Visas, embajada)',
      'Sus actas del estado civil: nacimiento y, si aplica, divorcio o defunción de un cónyuge anterior',
      'Pruebas de su relación, por ejemplo fotos de sus encuentros',
      'Sus preguntas, anotadas con anticipación',
    ],
    faqs: [
      {
        q: '¿Una petición I-129F aprobada significa que ya tengo la visa?',
        a: 'No. La aprobación de la petición por el USCIS es una etapa. La visa la otorga, o la niega, la embajada o el consulado después de la entrevista. Luego, la entrada a Estados Unidos se decide en la frontera.',
      },
      {
        q: '¿Cuánto tiempo toma el proceso?',
        a: 'Los plazos varían según el caso y las agencias involucradas, y cambian con el tiempo. No prometemos plazos: le ayudamos a dar seguimiento a su caso y a preparar cada etapa a tiempo.',
      },
      {
        q: '¿Mis hijos pueden venir conmigo?',
        a: 'Los hijos solteros menores de 21 años pueden solicitar una visa K-2 si aparecen en la petición I-129F. Pueden viajar con usted o después de usted, pero no antes.',
      },
      {
        q: '¿Qué pasa después de llegar?',
        a: 'La boda debe celebrarse dentro de los 90 días. Después se puede presentar una solicitud de residencia permanente (formulario I-485) ante el USCIS. Cada etapa tiene sus propios requisitos.',
      },
      {
        q: 'Soy de nacionalidad haitiana: ¿puedo empezar?',
        a: 'Las restricciones actuales suspenden la emisión de la mayoría de las visas estadounidenses a ciudadanos haitianos, salvo excepciones limitadas. Hablemos antes de cualquier gasto: revisaremos su nacionalidad, sus pasaportes y la evolución de las reglas oficiales.',
      },
    ],
  },

  'us-tourist': {
    slug: 'visa-turista-estados-unidos',
    label: 'Visa de turista para Estados Unidos',
    h1: 'Preparar una solicitud de visa de turista para Estados Unidos',
    metaTitle: 'Preparación de visa de turista americana (B-1/B-2) en Santo Domingo',
    metaDescription:
      'Asesoría y preparación de su solicitud de visa de visitante B-1/B-2 para Estados Unidos desde la República Dominicana: formulario DS-160, documentos y entrevista.',
    summary: 'Revisar su plan de viaje, llenar el formulario con cuidado y prepararse para la entrevista.',
    intro: [
      'La visa de visitante de Estados Unidos, conocida como visa de turista (categoría B-2, o B-1/B-2), sirve para estadías temporales: turismo, visitas familiares, tratamiento médico o ciertos viajes de negocios.',
      'Una solicitud bien preparada es una solicitud honesta, coherente y completa. Le ayudamos a entender el proceso, a llenar el formulario con exactitud y a presentarse a la entrevista con tranquilidad.',
    ],
    forWho: [
      'Quiere visitar a sus familiares o viajar a Estados Unidos.',
      'Prepara una primera solicitud o una renovación.',
      'Ya le negaron la visa y quiere entender su situación.',
      'Necesita ayuda para entender el formulario o una entrevista en inglés o en español.',
    ],
    whatItIs: [
      'La solicitud se hace en línea con el formulario DS-160; después se paga la tarifa y se agenda la cita. En la mayoría de los casos hay una entrevista en la embajada o el consulado. El oficial consular evalúa sobre todo el propósito del viaje y sus vínculos con su país de residencia.',
      'La visa nunca es automática, y una visa otorgada no garantiza la entrada: la decisión final es del oficial de frontera. Ningún intermediario puede conseguir una visa en su lugar.',
    ],
    howWeHelp: [
      'Revisar su plan de viaje y su situación.',
      'Ayudarle a llenar el formulario DS-160 con información exacta y coherente.',
      'Organizar documentos que reflejen de verdad su situación.',
      'Preparar la entrevista: las preguntas habituales y la importancia de responder con sinceridad.',
    ],
    steps: [
      {
        title: 'Revisión',
        text: 'Hablamos de su viaje, su nacionalidad y sus solicitudes anteriores, si las hay.',
      },
      {
        title: 'Formulario y cita',
        text: 'Usted llena el DS-160 con nuestra ayuda, paga la tarifa oficial y agenda la cita según las instrucciones de la embajada.',
      },
      {
        title: 'Preparación de la entrevista',
        text: 'Repasamos juntos sus documentos y los puntos importantes de su situación.',
      },
      {
        title: 'Decisión consular',
        text: 'El oficial consular decide. Si le niegan la visa, podemos ayudarle a entender el motivo indicado.',
      },
    ],
    checklist: [
      'Su pasaporte vigente y sus pasaportes anteriores',
      'Visas anteriores o cartas de negación, si las tiene',
      'Información sobre su situación: trabajo, estudios, negocio o familia',
      'Un resumen de su plan de viaje',
    ],
    faqs: [
      {
        q: '¿Pueden garantizarme la visa?',
        a: 'No, y nadie puede hacerlo. La decisión es del oficial consular. Nuestro papel es ayudarle a presentar una solicitud exacta, completa y coherente.',
      },
      {
        q: '¿Viajar primero a otro país mejora mis posibilidades?',
        a: 'Cada solicitud se evalúa según su situación en conjunto. Un viaje debe tener un propósito real; no hay atajos. Le recomendamos viajar por motivos verdaderos y declarar sus viajes con exactitud.',
      },
      {
        q: 'Ya me negaron la visa. ¿Puedo volver a solicitarla?',
        a: 'Por lo general sí se puede volver a solicitar, pero tiene sentido sobre todo si su situación cambió o si la primera solicitud estaba incompleta. Hablemos antes de pagar otra tarifa.',
      },
      {
        q: '¿Mi nacionalidad influye?',
        a: 'Sí. Algunas nacionalidades, entre ellas la haitiana, tienen actualmente restricciones que suspenden la emisión de visas, salvo excepciones limitadas. Revisemos su caso antes de empezar.',
      },
    ],
  },

  'us-family': {
    slug: 'visa-familiar-estados-unidos',
    label: 'Visa familiar y de cónyuge (IR-1/CR-1)',
    h1: 'Visa de inmigrante para cónyuge: IR-1 y CR-1',
    metaTitle: 'Visa de cónyuge IR-1/CR-1: preparación desde Santo Domingo',
    metaDescription:
      'Prepare el caso de visa de inmigrante para el cónyuge de un ciudadano estadounidense (IR-1/CR-1) desde la República Dominicana: etapas, documentos e interpretación.',
    summary: 'Preparar los documentos del cónyuge y entender las etapas consulares de una visa de inmigrante.',
    intro: [
      'Cuando un ciudadano o ciudadana de Estados Unidos quiere que su cónyuge que vive en el extranjero se reúna con él o ella, el proceso suele pasar por una petición I-130 y luego por una visa de inmigrante que otorga la embajada.',
      'La visa se llama CR-1 (residencia condicional) cuando el matrimonio tiene menos de dos años al momento en que el cónyuge recibe su estatus, e IR-1 en los demás casos. Le ayudamos a entender cada etapa y a reunir sus documentos de forma ordenada.',
    ],
    forWho: [
      'Está casado(a) con un ciudadano o ciudadana de Estados Unidos.',
      'Se presentó, o se está preparando, una petición I-130.',
      'Recibió instrucciones del Centro Nacional de Visas o de la embajada.',
    ],
    whatItIs: [
      'Según el USCIS, cuando el cónyuge vive fuera de Estados Unidos, la petición I-130 aprobada continúa con un proceso consular: documentos civiles, formularios, examen médico y entrevista en la embajada o el consulado.',
      'Si el matrimonio tiene menos de dos años al obtener el estatus, la residencia es condicional, y luego debe presentarse a tiempo una petición para eliminar las condiciones (formulario I-751). Cada etapa depende de una autoridad distinta, que toma sus propias decisiones.',
    ],
    howWeHelp: [
      'Explicarle las etapas y el vocabulario de las cartas que recibe.',
      'Organizar sus documentos civiles y preparar las traducciones necesarias.',
      'Preparar la entrevista e interpretar cuando esté permitido.',
    ],
    steps: [
      { title: 'Primera conversación', text: 'Revisamos su matrimonio, la petición y los documentos que ya recibió.' },
      { title: 'Documentos civiles', text: 'Le ayudamos a reunir y organizar las actas solicitadas, con sus traducciones si hace falta.' },
      { title: 'Entrevista', text: 'Preparamos juntos la entrevista consular. La decisión es de la embajada o el consulado.' },
    ],
    checklist: [
      'Su pasaporte',
      'Su acta de matrimonio y sus actas de nacimiento',
      'Los avisos ya recibidos (USCIS, Centro Nacional de Visas)',
      'Los documentos de matrimonios anteriores, si aplica',
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre IR-1 y CR-1?',
        a: 'Ambas son para el cónyuge de un ciudadano estadounidense. La CR-1 se aplica cuando el matrimonio tiene menos de dos años al momento en que el cónyuge recibe su estatus; en ese caso la residencia es condicional durante dos años.',
      },
      {
        q: '¿Qué conviene más: una visa K-1 o una visa de cónyuge?',
        a: 'Depende de su situación: ¿ya están casados?, ¿dónde quieren casarse? Lo conversamos en una consulta, tomando en cuenta las reglas actuales.',
      },
      {
        q: '¿Me afectan las restricciones actuales?',
        a: 'Posiblemente. La emisión de visas de inmigrante está suspendida en este momento para varias nacionalidades, entre ellas la haitiana, salvo excepciones limitadas. Revisamos su situación antes de cualquier trámite con costo.',
      },
    ],
  },

  'us-passport': {
    slug: 'pasaporte-estadounidense',
    label: 'Asistencia con pasaporte estadounidense',
    h1: 'Asistencia para solicitar un pasaporte estadounidense',
    metaTitle: 'Asistencia con pasaporte estadounidense en la República Dominicana',
    metaDescription:
      'Ayuda para preparar la solicitud o renovación de un pasaporte estadounidense desde la República Dominicana, para niños, adolescentes y adultos.',
    summary: 'Preparar la solicitud o renovación de un pasaporte estadounidense para un niño o un adulto.',
    intro: [
      'Los ciudadanos estadounidenses que viven en la República Dominicana pueden necesitar un primer pasaporte, una renovación o un pasaporte para un hijo. Estas solicitudes las tramitan los servicios consulares de Estados Unidos.',
      'Le ayudamos a entender qué procedimiento corresponde a su caso, a reunir los documentos y a preparar la cita.',
    ],
    forWho: [
      'Es ciudadano(a) estadounidense y su pasaporte está por vencer.',
      'Va a solicitar el primer pasaporte de su hijo o hija.',
      'No sabe qué procedimiento corresponde a su situación.',
    ],
    whatItIs: [
      'Según el caso, la solicitud se hace en persona en la sección consular o, para algunas renovaciones de adultos, mediante un procedimiento simplificado. Las solicitudes para menores tienen requisitos propios, sobre todo el consentimiento de los padres.',
      'El pasaporte lo emite únicamente el Departamento de Estado de Estados Unidos. Nuestro papel se limita a ayudarle a preparar una solicitud completa.',
    ],
    howWeHelp: [
      'Identificar el procedimiento adecuado: primer pasaporte, renovación o menor de edad.',
      'Ayudarle a llenar los formularios y organizar los documentos de respaldo.',
      'Preparar las traducciones de documentos en francés o en criollo haitiano, si hacen falta.',
    ],
    steps: [
      { title: 'Identificar el procedimiento', text: 'Revisamos juntos su situación y la de su hijo o hija, si aplica.' },
      { title: 'Preparar el expediente', text: 'Formularios, fotos, pruebas de ciudadanía e identidad: revisamos que no falte nada.' },
      { title: 'Cita consular', text: 'Usted se presenta según las instrucciones oficiales. La decisión y la emisión dependen del Departamento de Estado.' },
    ],
    checklist: [
      'Su pasaporte actual o una prueba de ciudadanía estadounidense',
      'Un documento de identidad',
      'Para un menor: su acta de nacimiento y los documentos de identidad de los padres',
    ],
    faqs: [
      {
        q: '¿Ustedes pueden emitir o agilizar un pasaporte?',
        a: 'No. Solo el Departamento de Estado emite pasaportes estadounidenses. Le ayudamos a preparar una solicitud completa, lo que evita idas y vueltas.',
      },
      {
        q: '¿Deben estar presentes ambos padres para un menor?',
        a: 'Para los niños pequeños, en principio se requiere el consentimiento de ambos padres, con opciones previstas cuando uno de ellos no puede estar presente. Revisamos con usted la regla que aplica.',
      },
      {
        q: '¿También ofrecen servicios notariales?',
        a: 'Podemos orientarle con los documentos que deben certificarse o legalizarse. El tipo exacto de asistencia depende del documento: lo conversamos en el primer contacto.',
      },
    ],
  },

  interpreting: {
    slug: 'interpretacion-inmigracion',
    label: 'Interpretación en inmigración',
    h1: 'Interpretación y acompañamiento en sus trámites de inmigración',
    metaTitle: 'Intérprete de inmigración en Santo Domingo',
    metaDescription:
      'Interpretación y acompañamiento en sus citas y trámites de inmigración en Santo Domingo, según las reglas de cada institución.',
    summary: 'Entender y hacerse entender en una cita, una llamada o una conversación importante.',
    intro: [
      'En una cita importante, cada palabra cuenta. Entender una pregunta, explicar su situación, leer un documento: el idioma puede convertirse en un obstáculo más.',
      'El equipo de Fernando OMG Services (FOS), con sus intérpretes y traductores, le ayuda a comunicarse con claridad en sus trámites: preparamos la conversación con usted e interpretamos cuando la institución lo permite.',
    ],
    forWho: [
      'Tiene una cita con una oficina pública, una embajada o un servicio de migración.',
      'Necesita entender una carta, un formulario o unas instrucciones.',
      'Quiere preparar una conversación con un familiar, un abogado o una institución.',
    ],
    whatItIs: [
      'Interpretar es transmitir de forma oral lo que se dice, con fidelidad y sin agregar nada. Es distinto de la traducción, que trabaja con documentos escritos.',
      'Cada institución tiene sus propias reglas. Algunas aceptan un intérprete o acompañante, otras ponen su propio intérprete o solo admiten al solicitante. Revisamos esas reglas con usted de antemano.',
    ],
    howWeHelp: [
      'Preparar la cita con usted: documentos, posibles preguntas y vocabulario útil.',
      'Interpretar durante la conversación, cuando esté permitido.',
      'Ayudarle a entender las cartas y las instrucciones que recibe.',
      'Acompañarle en el lugar, si la institución lo permite.',
    ],
    steps: [
      { title: 'Hablamos de la cita', text: 'Lugar, fecha, motivo e idiomas: revisamos lo que está permitido.' },
      { title: 'Preparación', text: 'Repasamos sus documentos y los puntos importantes que deberá explicar.' },
      { title: 'El día de la cita', text: 'Interpretamos o le acompañamos según las reglas del lugar, y luego hacemos un balance con usted.' },
    ],
    checklist: [
      'La carta o el aviso de la cita',
      'Los documentos relacionados con su trámite',
      'Los idiomas que habla con más facilidad',
    ],
    faqs: [
      {
        q: '¿Pueden entrar conmigo a la embajada?',
        a: 'Depende totalmente de las reglas de la embajada y del tipo de cita. Muchas veces solo se admite a los solicitantes. Se lo decimos con honestidad y preparamos la conversación con usted antes.',
      },
      {
        q: '¿Qué idiomas pueden interpretar?',
        a: 'Trabajamos principalmente en criollo haitiano, francés y español. Díganos los idiomas de su cita y le diremos qué puede cubrir el equipo.',
      },
      {
        q: '¿La interpretación puede hacerse a distancia?',
        a: 'Algunas conversaciones pueden prepararse en línea. Para una cita oficial, seguimos la modalidad que establece la institución.',
      },
    ],
  },

  translation: {
    slug: 'traduccion-documentos',
    label: 'Traducción de documentos',
    h1: 'Traducción de documentos para sus trámites',
    metaTitle: 'Traducción de documentos en la República Dominicana para sus trámites',
    metaDescription:
      'Traducción de documentos civiles, académicos y administrativos para sus trámites de visa, estudios o residencia desde la República Dominicana.',
    summary: 'Traducir sus actas y títulos al idioma que pide la institución que los recibirá.',
    intro: [
      'Una embajada, una universidad o una oficina de migración puede pedirle sus documentos en un idioma específico: español, inglés o francés.',
      'Le ayudamos a identificar qué documentos traducir, qué tipo de traducción se exige y en qué orden hacer los trámites, para no pagar dos veces por el mismo trabajo.',
    ],
    forWho: [
      'Debe presentar un acta de nacimiento, un título o un récord de notas en otro idioma.',
      'Su expediente de visa, estudios o residencia pide traducciones.',
      'No sabe si basta con una traducción simple.',
    ],
    whatItIs: [
      'Algunas instituciones aceptan una traducción simple; otras exigen una traducción hecha por un traductor o intérprete autorizado, a veces seguida de una legalización o una apostilla.',
      'El orden importa: según el país de destino, a veces hay que apostillar o legalizar el original antes de traducirlo, o certificar la propia traducción.',
    ],
    howWeHelp: [
      'Revisar con usted lo que exige la institución que recibirá el documento.',
      'Organizar la traducción de sus documentos y revisar su coherencia (nombres, fechas y lugares).',
      'Orientarle sobre la legalización o la apostilla cuando sea necesaria.',
    ],
    steps: [
      { title: 'Identificar el requisito', text: '¿Qué institución, qué país, qué idioma y qué tipo de traducción?' },
      { title: 'Preparar los documentos', text: 'Hacemos la lista de documentos que traducir y el orden de los trámites.' },
      { title: 'Traducción y revisión', text: 'Se hacen las traducciones y las revisamos con usted antes de presentarlas.' },
    ],
    checklist: [
      'Los documentos que traducir (copias legibles, para llevar a la cita)',
      'Las instrucciones de la institución que los recibirá',
      'La escritura exacta de sus nombres tal como aparece en su pasaporte',
    ],
    faqs: [
      {
        q: '¿Qué documentos traducen?',
        a: 'Con más frecuencia, actas del estado civil, extractos de archivo, certificados de no antecedentes penales, títulos y récords de notas. Díganos cuáles le corresponden.',
      },
      {
        q: '¿Me aceptarán la traducción?',
        a: 'Lo decide la institución que la recibe. Revisamos sus requisitos de antemano para reducir el riesgo de rechazo, aunque no podemos garantizar la aceptación.',
      },
      {
        q: '¿Primero hay que apostillar el documento?',
        a: 'A veces. El orden depende del país donde se usará el documento y de la institución. Consulte nuestra guía o pregúntenos.',
      },
    ],
  },

  legalization: {
    slug: 'legalizacion-documentos',
    label: 'Asistencia con legalización',
    h1: 'Asistencia para la legalización de documentos',
    metaTitle: 'Asistencia para legalizar documentos — Santo Domingo',
    metaDescription:
      'Entienda y prepare la legalización de sus documentos cuando deban usarse en un país que no aplica la apostilla.',
    summary: 'Lograr que un documento oficial sea reconocido en un país que no acepta la apostilla.',
    intro: [
      'Un documento oficial emitido en un país no siempre se reconoce tal cual en otro. La legalización es la cadena de verificaciones que permite que sea reconocido.',
      'Le ayudamos a identificar la ruta correcta, a preparar sus documentos y a seguir los pasos en el orden adecuado.',
    ],
    forWho: [
      'Debe usar un documento dominicano en un país que no forma parte del Convenio de la Apostilla.',
      'Una embajada o una universidad le pide documentos «legalizados».',
      'No sabe si necesita una legalización o una apostilla.',
    ],
    whatItIs: [
      'La legalización confirma la autenticidad de la firma y del sello de la autoridad que emitió el documento. Se usa sobre todo con países que no forman parte del Convenio de La Haya de 1961; para los demás, la apostilla la reemplaza.',
      'En la República Dominicana, estas certificaciones están a cargo del Ministerio de Relaciones Exteriores (MIREX). La ruta también puede pasar por el consulado del país de destino.',
    ],
    howWeHelp: [
      'Determinar si su documento necesita una legalización o una apostilla.',
      'Explicarle los pasos y el orden que debe seguir con las autoridades correspondientes.',
      'Organizar las traducciones, si hacen falta.',
    ],
    steps: [
      { title: 'Revisar el país de destino', text: 'La ruta depende del país donde se usará el documento.' },
      { title: 'Preparar el documento', text: 'Revisamos que el original sea reciente, legible y completo.' },
      { title: 'Seguir la ruta oficial', text: 'Las autoridades competentes certifican el documento. Le ayudamos a dar seguimiento a cada paso.' },
    ],
    checklist: [
      'El documento original',
      'El país y la institución donde se presentará',
      'Las instrucciones que le haya dado esa institución, si las tiene',
    ],
    faqs: [
      {
        q: '¿Ustedes legalizan los documentos?',
        a: 'No. La legalización la hacen las autoridades competentes. Le ayudamos a preparar el trámite y a darle seguimiento.',
      },
      {
        q: '¿Un documento legalizado siempre será aceptado?',
        a: 'La legalización confirma el origen del documento, no su contenido. La institución que lo recibe mantiene su propio criterio.',
      },
    ],
  },

  apostille: {
    slug: 'asistencia-apostilla',
    label: 'Asistencia con apostilla',
    h1: 'Asistencia para apostillar sus documentos',
    metaTitle: 'Asistencia con apostilla en la República Dominicana (MIREX)',
    metaDescription:
      'Entienda qué es la apostilla, cuándo la necesita y cómo preparar sus documentos dominicanos para usarlos en el extranjero.',
    summary: 'Preparar sus actas y títulos dominicanos para usarlos en un país miembro del Convenio.',
    intro: [
      'La apostilla es un certificado único que permite que un documento público sea reconocido en los países que aplican el Convenio de La Haya de 1961.',
      'Le ayudamos a saber si su documento la necesita, a prepararlo y a evitar errores de orden que obligan a empezar de nuevo.',
    ],
    forWho: [
      'Su universidad, su empleador o una autoridad extranjera le pide un documento «apostillado».',
      'Prepara un expediente de estudios o de residencia en el extranjero.',
      'No sabe si en su caso la apostilla reemplaza la legalización.',
    ],
    whatItIs: [
      'La apostilla certifica la autenticidad de la firma, la calidad de quien firma y el sello de un documento público. No valida el contenido del documento.',
      'Según la Conferencia de La Haya, la autoridad competente en la República Dominicana es la Dirección de Legalización de Documentos del Ministerio de Relaciones Exteriores (MIREX), en Santo Domingo.',
    ],
    howWeHelp: [
      'Verificar si el país de destino acepta la apostilla.',
      'Preparar sus documentos y el orden de los trámites (apostilla y traducción).',
      'Explicarle cómo dar seguimiento a su solicitud ante la autoridad competente.',
    ],
    steps: [
      { title: 'Verificar la necesidad', text: 'País de destino, institución y tipo de documento.' },
      { title: 'Preparar el documento', text: 'Un original reciente y en regla, con las firmas que corresponden.' },
      { title: 'Trámite ante el MIREX', text: 'La autoridad competente emite la apostilla. Le ayudamos a preparar la solicitud y a darle seguimiento.' },
    ],
    checklist: [
      'El documento original (acta, título, récord o certificado)',
      'El país donde se usará el documento',
      'Las instrucciones de la institución que lo recibirá',
    ],
    faqs: [
      {
        q: '¿Ustedes emiten la apostilla?',
        a: 'No. Solo la emite la autoridad competente. Le ayudamos a preparar un expediente correcto y a seguir los pasos.',
      },
      {
        q: '¿En qué se diferencia de la legalización?',
        a: 'Entre los países miembros del Convenio, la apostilla reemplaza la legalización. Para los demás países, la legalización sigue siendo necesaria.',
      },
      {
        q: '¿Puedo apostillar un documento haitiano en la República Dominicana?',
        a: 'En principio, un documento se apostilla o se legaliza ante las autoridades del país que lo emitió. Revisemos su documento para encontrar la ruta correcta.',
      },
    ],
  },

  notarial: {
    slug: 'asistencia-documentos-notariales',
    label: 'Asistencia con documentos notariales',
    h1: 'Asistencia con documentos que deben certificarse',
    metaTitle: 'Asistencia con documentos notariales y declaraciones — Santo Domingo',
    metaDescription:
      'Orientación y preparación de declaraciones, autorizaciones y constancias que deben certificarse como parte de sus trámites.',
    summary: 'Preparar una declaración, una autorización o una constancia que debe certificarse.',
    intro: [
      'Un trámite puede exigir una declaración jurada, una autorización de los padres o una constancia firmada ante una autoridad habilitada.',
      'Le ayudamos a entender lo que se le pide, a preparar el documento y a saber dónde certificarlo.',
    ],
    forWho: [
      'Una institución le pide un documento «notarizado» o certificado.',
      'Prepara un permiso de viaje o una declaración para un familiar.',
      'No sabe qué autoridad puede certificar su documento.',
    ],
    whatItIs: [
      'La certificación de una firma o de un documento la realiza una autoridad habilitada, por ejemplo un notario, según las reglas del país donde se usará.',
      'Nuestro papel es orientarle y ayudarle a preparar el documento. La certificación en sí la realiza la autoridad competente.',
    ],
    howWeHelp: [
      'Aclarar qué tipo de documento se exige y qué debe decir.',
      'Ayudarle a preparar el texto y los documentos que debe anexar.',
      'Orientarle hacia la autoridad habilitada para certificarlo.',
    ],
    steps: [
      { title: 'Entender la solicitud', text: '¿Quién pide el documento, para qué uso y en qué país?' },
      { title: 'Preparar el documento', text: 'Texto, identidades y documentos de respaldo.' },
      { title: 'Certificación', text: 'Usted certifica el documento ante la autoridad competente.' },
    ],
    checklist: [
      'Las instrucciones de la institución que pide el documento',
      'Sus documentos de identidad y los de las demás personas que firman',
    ],
    faqs: [
      {
        q: '¿Fernand Theodore es notario?',
        a: 'Ni Fernand Theodore ni el equipo FOS se presentan como notarios. Le ayudamos a preparar el documento y le orientamos hacia la autoridad competente para certificarlo.',
      },
      {
        q: '¿Un documento certificado aquí será válido en el extranjero?',
        a: 'Puede que también necesite una apostilla o una legalización. Lo revisamos con usted según el país de destino.',
      },
    ],
  },

  'do-student': {
    slug: 'permiso-estudiante-republica-dominicana',
    label: 'Permiso de estudiante en República Dominicana',
    h1: 'Permiso de estudiante en la República Dominicana',
    metaTitle: 'Permiso de estudiante en la República Dominicana: acompañamiento',
    metaDescription:
      'Acompañamiento para preparar su solicitud de permiso de estudiante ante la Dirección General de Migración de la República Dominicana: documentos, pasos y seguimiento.',
    summary: 'Preparar su expediente de permiso de estudiante ante la Dirección General de Migración.',
    intro: [
      'Si estudia, o quiere estudiar, en una universidad o un centro educativo de la República Dominicana, su estadía debe corresponder a su condición de estudiante.',
      'Le ayudamos a entender el trámite ante la Dirección General de Migración (DGM), a reunir los documentos solicitados y a dar seguimiento a su expediente.',
    ],
    forWho: [
      'Fue admitido(a) o está inscrito(a) en un centro dominicano.',
      'Debe renovar su permiso de estudiante.',
      'Prepara la solicitud para su hijo o hija menor de edad.',
    ],
    whatItIs: [
      'El permiso de estudiante lo otorga la Dirección General de Migración. Los requisitos cambian y varían según la situación: nacionalidad, edad, tipo de estudios, primera solicitud o renovación.',
      'Los expedientes suelen incluir documentos de identidad, una prueba de admisión, pruebas de solvencia económica y actas del estado civil, a veces apostilladas o legalizadas. Antes de empezar, revisamos con usted la lista actualizada.',
    ],
    howWeHelp: [
      'Revisar la lista actualizada de documentos para su situación.',
      'Organizar las traducciones, apostillas o legalizaciones necesarias.',
      'Ayudarle a llenar los formularios y a dar seguimiento a las citas.',
      'Explicarle los mensajes y las citaciones de la DGM.',
    ],
    steps: [
      { title: 'Revisión', text: 'Centro de estudios, duración de los estudios, nacionalidad y situación actual.' },
      { title: 'Armar el expediente', text: 'Hacemos la lista de documentos y el orden de los trámites.' },
      { title: 'Depósito y seguimiento', text: 'Usted deposita la solicitud y asiste a las citas que indique la DGM, con nuestra ayuda.' },
    ],
    checklist: [
      'Su pasaporte',
      'Su carta de admisión o constancia de inscripción',
      'Sus actas del estado civil',
      'Las cartas de la DGM, si las tiene',
    ],
    faqs: [
      {
        q: '¿El permiso de estudiante me permite trabajar?',
        a: 'El permiso de estudiante corresponde a una estadía por estudios. Para trabajar se aplican otras reglas. Cuéntenos su proyecto y le orientamos correctamente.',
      },
      {
        q: '¿Cuánto tiempo toma el trámite?',
        a: 'Los plazos dependen de la DGM y de su expediente. Un expediente completo desde el principio suele evitar retrasos.',
      },
      {
        q: '¿Pueden ayudarme si ya deposité mi expediente?',
        a: 'Sí. Podemos ayudarle a entender en qué punto está su expediente y a preparar los próximos pasos.',
      },
    ],
  },

  'do-residency': {
    slug: 'residencia-trabajo-republica-dominicana',
    label: 'Residencia y trabajo en República Dominicana',
    h1: 'Residencia y permiso de trabajo en la República Dominicana: orientación',
    metaTitle: 'Residencia y permiso de trabajo en la República Dominicana: orientación',
    metaDescription:
      'Orientación para entender las vías de residencia y los permisos de trabajo en la República Dominicana, preparar sus documentos y dar seguimiento a sus citas en la DGM.',
    summary: 'Entender las vías de residencia o de trabajo posibles y preparar su expediente.',
    intro: [
      'En la República Dominicana existen varias vías de residencia, según su situación: familia, trabajo, actividad económica, inversión, jubilación o rentas.',
      'Le ayudamos a entender las opciones que podrían corresponder a su caso, a preparar sus documentos y a dar seguimiento a sus citas ante la Dirección General de Migración.',
    ],
    forWho: [
      'Vive en la República Dominicana y quiere regularizar o cambiar su estatus.',
      'Es cónyuge o familiar de un dominicano o de un residente.',
      'Tiene una oferta de empleo o un negocio y quiere informarse sobre el permiso de trabajo.',
      'Debe renovar una residencia o un permiso vigente.',
    ],
    whatItIs: [
      'Cada categoría tiene sus propias condiciones, documentos y etapas: examen médico, registro biométrico y entrega del carnet. Las decisiones corresponden a la Dirección General de Migración.',
      'Hablamos de orientación porque la vía correcta depende de verdad de su situación. Le ayudamos a identificarla con honestidad antes de empezar.',
    ],
    howWeHelp: [
      'Revisar su situación y las vías que podrían aplicarse.',
      'Preparar la lista de documentos con sus traducciones o apostillas.',
      'Ayudarle a seguir las etapas y las citas de la DGM.',
      'Acompañarle e interpretar cuando sea posible.',
    ],
    steps: [
      { title: 'Consulta', text: 'Analizamos su situación y las opciones realistas.' },
      { title: 'Preparación del expediente', text: 'Documentos, traducciones y formularios, en el orden correcto.' },
      { title: 'Seguimiento de citas', text: 'Exámenes, biometría y entrega del carnet: le ayudamos a seguir cada etapa que fija la DGM.' },
    ],
    checklist: [
      'Su pasaporte y sus documentos de residencia, si los tiene',
      'Sus actas del estado civil (nacimiento, matrimonio)',
      'Los documentos relacionados con su familia, su trabajo o su negocio',
    ],
    faqs: [
      {
        q: '¿Qué residencia corresponde a mi situación?',
        a: 'Depende de su familia, su actividad y sus documentos. Justamente para eso sirve la primera conversación.',
      },
      {
        q: '¿Pueden agilizar mi residencia?',
        a: 'No. Los plazos y las decisiones dependen de la Dirección General de Migración. Un expediente completo y bien seguido ayuda a evitar retrasos.',
      },
      {
        q: '¿Crear una empresa me da derecho a la residencia?',
        a: 'No de forma automática. Algunas vías de residencia toman en cuenta una actividad o una inversión, bajo ciertas condiciones. Hablemos de su proyecto.',
      },
    ],
  },

  'do-business': {
    slug: 'formalizacion-empresa-republica-dominicana',
    label: 'Formalización de empresa en República Dominicana',
    h1: 'Formalizar su negocio en la República Dominicana: orientación',
    metaTitle: 'Crear o formalizar su empresa en la República Dominicana: orientación',
    metaDescription:
      'Orientación para entender los pasos para formalizar un negocio en la República Dominicana: nombre comercial, registros y documentos.',
    summary: 'Entender los pasos para registrar y formalizar su negocio.',
    intro: [
      '¿Tiene un negocio, o un proyecto, y quiere darle un marco oficial en la República Dominicana? Según la forma que elija, pueden hacer falta varios registros.',
      'Le ayudamos a entender los pasos, a preparar sus documentos y a orientarse hacia las instituciones correspondientes.',
    ],
    forWho: [
      'Tiene una actividad y quiere formalizarla.',
      'Se prepara para crear una empresa.',
      'Necesita documentos traducidos o certificados para estos trámites.',
    ],
    whatItIs: [
      'Según el caso, la formalización puede incluir el registro de un nombre comercial en la ONAPI, la inscripción en la DGII y otros registros según la forma de la empresa.',
      'Los pasos exactos dependen de su proyecto. También puede ser necesario un apoyo legal o contable especializado: se lo diremos con claridad.',
    ],
    howWeHelp: [
      'Revisar su proyecto y la forma de empresa que considera.',
      'Explicarle los pasos y las instituciones involucradas.',
      'Preparar sus documentos, traducciones y constancias.',
    ],
    steps: [
      { title: 'Entender su proyecto', text: 'Actividad, socios, ubicación y objetivos.' },
      { title: 'Identificar los pasos', text: 'Los registros necesarios y su orden.' },
      { title: 'Preparar los documentos', text: 'Le ayudamos a armar un expediente completo.' },
    ],
    checklist: [
      'Una descripción de su actividad',
      'Sus documentos de identidad y los de sus socios, si los tiene',
      'El nombre que piensa usar para la empresa',
    ],
    faqs: [
      {
        q: '¿Una empresa me da un estatus migratorio?',
        a: 'No de forma automática. Los trámites de empresa y de residencia son distintos, aunque algunas vías de residencia toman en cuenta una actividad económica.',
      },
      {
        q: '¿Son un despacho contable o de abogados?',
        a: 'No. Le orientamos y le ayudamos a preparar los documentos. Cuando su proyecto necesita un profesional especializado, se lo decimos.',
      },
    ],
  },

  'ca-visitor': {
    slug: 'visa-visitante-canada',
    label: 'Visa de visitante para Canadá',
    h1: 'Visa de visitante para Canadá',
    metaTitle: 'Visa de visitante para Canadá: acompañamiento desde Santo Domingo',
    metaDescription:
      'Entienda y prepare su solicitud de visa de visitante (visa de residente temporal) para Canadá desde la República Dominicana: cuenta en línea, documentos y biometría.',
    summary: 'Preparar una solicitud de visa de residente temporal para visitar Canadá.',
    intro: [
      'La visa de visitante, o visa de residente temporal, es el documento que se coloca en su pasaporte y que muestra que usted cumple los requisitos para viajar a Canadá.',
      'La solicitud se hace en línea ante Inmigración, Refugiados y Ciudadanía Canadá (IRCC). Le ayudamos a preparar una solicitud clara, completa y fiel a su situación.',
    ],
    forWho: [
      'Quiere visitar a su familia o viajar a Canadá.',
      'Su nacionalidad exige visa para entrar a Canadá.',
      'No se siente cómodo(a) con la solicitud en línea en inglés o en francés.',
    ],
    whatItIs: [
      'Según IRCC, las tarifas empiezan en 100 dólares canadienses y los plazos de tramitación varían según el país. Pueden pedirle datos biométricos (huellas dactilares y foto).',
      'La visa de visitante le permite presentarse en la frontera: la entrada la decide el oficial al llegar. Para estudiar más de seis meses, en principio necesita un permiso de estudios, que es otro trámite.',
    ],
    howWeHelp: [
      'Ayudarle a crear su cuenta y a llenar la solicitud en línea.',
      'Organizar documentos de respaldo que reflejen de verdad su situación y su viaje.',
      'Preparar las traducciones necesarias.',
      'Explicarle los mensajes de IRCC, como la solicitud de biometría.',
    ],
    steps: [
      { title: 'Revisión', text: 'Motivo del viaje, duración, situación y viajes anteriores.' },
      { title: 'Solicitud en línea', text: 'Formularios, documentos de respaldo y pago de la tarifa oficial.' },
      { title: 'Biometría y seguimiento', text: 'Cita de biometría si se la piden y, luego, la decisión de IRCC.' },
    ],
    checklist: [
      'Su pasaporte vigente',
      'Información sobre su situación (trabajo, estudios, familia)',
      'Su plan de viaje y, si aplica, la invitación que recibió',
    ],
    faqs: [
      {
        q: '¿Puedo estudiar con una visa de visitante?',
        a: 'En algunos casos se permiten estudios cortos de seis meses o menos, pero un programa más largo requiere en principio un permiso de estudios. Vea nuestra página Estudios en Canadá.',
      },
      {
        q: '¿Hay entrevista?',
        a: 'La solicitud se hace en línea, a menudo con una cita de biometría. Puede haber entrevista, pero no siempre.',
      },
      {
        q: '¿Pueden garantizar el resultado?',
        a: 'No. La decisión es de IRCC. Le ayudamos a presentar una solicitud completa y exacta.',
      },
    ],
  },

  'ca-study': {
    slug: 'estudios-canada',
    label: 'Estudios en Canadá',
    h1: 'Estudios en Canadá: preparar su solicitud de permiso de estudios',
    metaTitle: 'Estudios en Canadá: acompañamiento para el permiso de estudios',
    metaDescription:
      'Entienda el permiso de estudios canadiense y prepare su solicitud desde la República Dominicana: carta de aceptación, carta de la provincia y prueba de fondos.',
    summary: 'Preparar su solicitud de permiso de estudios después de ser admitido(a) en un centro canadiense.',
    intro: [
      'Para seguir un programa de estudios en Canadá, la mayoría de los estudiantes extranjeros necesita un permiso de estudios, que otorga IRCC.',
      'Es un trámite distinto de la visa de visitante. Le ayudamos a entender los documentos solicitados, a organizarlos y a preparar una solicitud coherente con su proyecto de estudios.',
    ],
    forWho: [
      'Recibió, o espera, una carta de aceptación de un centro canadiense.',
      'Prepara su proyecto de estudios y quiere entender los pasos.',
      'Debe traducir o apostillar sus títulos y récords de notas.',
    ],
    whatItIs: [
      'Según IRCC, la solicitud incluye una carta de aceptación de una institución educativa designada; en la mayoría de los casos, una carta de certificación de la provincia o del territorio (en Quebec, un Certificado de Aceptación de Quebec); una prueba de solvencia económica y una prueba de identidad. La tarifa es de 150 dólares canadienses.',
      'El permiso de estudios no es una visa: si se aprueba la solicitud, también se emite una visa de residente temporal o una autorización electrónica de viaje para el viaje. Debe solicitarlo antes de salir.',
    ],
    howWeHelp: [
      'Revisar con usted los documentos que se piden para su programa y su provincia.',
      'Organizar las traducciones y apostillas de sus documentos académicos.',
      'Ayudarle a llenar la solicitud en línea y a seguir los mensajes de IRCC.',
    ],
    steps: [
      { title: 'Admisión', text: 'Usted obtiene una carta de aceptación del centro y, en la mayoría de los casos, la carta de la provincia.' },
      { title: 'Expediente', text: 'Pruebas de fondos, identidad, documentos académicos y traducciones.' },
      { title: 'Solicitud y biometría', text: 'Envío en línea, biometría si se la piden y, luego, la decisión de IRCC.' },
    ],
    checklist: [
      'Su carta de aceptación, si ya la tiene',
      'Sus títulos y récords de notas',
      'Su pasaporte',
      'Información sobre cómo financiará sus estudios',
    ],
    faqs: [
      {
        q: '¿Pueden inscribirme en una universidad canadiense?',
        a: 'La admisión la decide el centro educativo. Podemos ayudarle a preparar sus documentos; las decisiones de admisión y de permiso no dependen de nosotros.',
      },
      {
        q: '¿Qué es la carta de certificación de la provincia?',
        a: 'En la mayoría de los casos, IRCC pide una carta de certificación de la provincia o del territorio donde va a estudiar. Por lo general se obtiene a través de su centro educativo.',
      },
      {
        q: '¿Mi familia puede acompañarme?',
        a: 'En algunos casos, sus familiares pueden solicitar acompañarle. Las condiciones dependen de su situación y de las reglas vigentes.',
      },
    ],
  },

  'co-visa': {
    slug: 'visa-colombia',
    label: 'Visa para Colombia (viaje y estudios)',
    h1: 'Visa para Colombia: viaje y estudios',
    metaTitle: 'Visa para Colombia: asesoría de viaje y estudios desde Santo Domingo',
    metaDescription:
      'Asesoría para preparar su solicitud de visa colombiana, para un viaje o un proyecto de estudios: categorías, solicitud en línea y documentos.',
    summary: 'Preparar una solicitud de visa colombiana para un viaje o un proyecto de estudios.',
    intro: [
      'Según su nacionalidad, puede necesitar una visa para viajar o estudiar en Colombia. La solicitud se hace ante el Ministerio de Relaciones Exteriores de Colombia (Cancillería).',
      'Le ayudamos a identificar la categoría adecuada para su proyecto, a preparar sus documentos y a dar seguimiento a la solicitud en línea.',
    ],
    forWho: [
      'Prepara un viaje de turismo o familiar a Colombia.',
      'Tiene un proyecto de estudios o una admisión en un centro colombiano.',
      'Quiere saber si su nacionalidad necesita visa.',
    ],
    whatItIs: [
      'La Cancillería distingue tres grandes categorías de visa: visitante (V), migrante (M) y residente (R). El tipo exacto depende del motivo y de la duración de la estadía.',
      'Le ayudamos a preparar una solicitud basada en un proyecto real. Un viaje a Colombia debe tener su propio propósito: no es un paso obligatorio ni un atajo hacia otra visa.',
    ],
    howWeHelp: [
      'Identificar la categoría de visa adecuada para su proyecto.',
      'Preparar los documentos y las traducciones.',
      'Ayudarle a llenar la solicitud en línea y a dar seguimiento a las respuestas.',
    ],
    steps: [
      { title: 'Proyecto', text: 'Motivo, duración y fechas previstas de la estadía.' },
      { title: 'Documentos', text: 'Pasaporte, documentos de respaldo de su proyecto y traducciones.' },
      { title: 'Solicitud en línea', text: 'Envío ante la Cancillería y seguimiento de la decisión.' },
    ],
    checklist: [
      'Su pasaporte',
      'La información sobre su proyecto (viaje, estudios, invitación)',
      'Para estudios: la carta de admisión del centro educativo',
    ],
    faqs: [
      {
        q: '¿Un viaje a Colombia ayuda para la visa americana?',
        a: 'No hay atajos. Cada solicitud de visa americana se evalúa según su situación en conjunto. Le recomendamos viajar por motivos reales y declarar sus viajes con exactitud.',
      },
      {
        q: '¿Puedo estudiar en Colombia?',
        a: 'Sí, si es admitido(a) y obtiene la visa adecuada. Le ayudamos a preparar los documentos para la solicitud.',
      },
    ],
  },

  'mx-visa': {
    slug: 'visa-mexico',
    label: 'Visa para México (turismo y estudios)',
    h1: 'Visa para México: turismo y estudios',
    metaTitle: 'Visa de turista y estudiante para México: asesoría desde Santo Domingo',
    metaDescription:
      'Asesoría para preparar su solicitud de visa mexicana de visitante o de estudiante: cita consular, documentos y preparación de la entrevista.',
    summary: 'Preparar una solicitud de visa mexicana de visitante o de estudiante.',
    intro: [
      'Según su nacionalidad, puede necesitar una visa para visitar México o estudiar allí. Las solicitudes se hacen en las representaciones consulares de México, con cita previa.',
      'Le ayudamos a preparar sus documentos y su cita, para un viaje o un proyecto de estudios.',
    ],
    forWho: [
      'Prepara un viaje de turismo o familiar a México.',
      'Fue admitido(a) en un centro educativo mexicano.',
      'Quiere saber si su nacionalidad necesita visa.',
    ],
    whatItIs: [
      'Las visas mexicanas se otorgan después de una cita y, en la mayoría de los casos, de una entrevista consular. Para un programa de estudios largo existe la visa de residente temporal estudiante.',
      'Después, la entrada la decide el Instituto Nacional de Migración al llegar a México.',
    ],
    howWeHelp: [
      'Identificar el tipo de visa adecuado para su proyecto.',
      'Preparar los documentos y las traducciones.',
      'Ayudarle a agendar la cita y a preparar la entrevista.',
    ],
    steps: [
      { title: 'Proyecto', text: 'Turismo, visita familiar o estudios: revisamos su plan.' },
      { title: 'Cita', text: 'Agendamiento ante la representación consular que corresponde.' },
      { title: 'Entrevista', text: 'Usted presenta su expediente. La decisión es de las autoridades mexicanas.' },
    ],
    checklist: [
      'Su pasaporte',
      'Información sobre su situación y su proyecto',
      'Para estudios: la carta de admisión',
    ],
    faqs: [
      {
        q: '¿Una visa americana me exime de la visa mexicana?',
        a: 'México contempla casos en los que ciertos documentos vigentes de otros países permiten entrar sin visa mexicana, bajo condiciones precisas. Revisemos su situación juntos.',
      },
      {
        q: '¿Cuánto cuesta la visa?',
        a: 'Las tarifas las fijan las autoridades mexicanas y dependen del tipo de visa y de la nacionalidad. Le indicaremos dónde consultar el monto oficial.',
      },
    ],
  },

  'jm-travel': {
    slug: 'viaje-jamaica',
    label: 'Viaje a Jamaica',
    h1: 'Viajar a Jamaica: asesoría y preparación',
    metaTitle: 'Viaje a Jamaica: asesoría de visa desde Santo Domingo',
    metaDescription:
      'Asesoría para preparar un viaje a Jamaica: saber si necesita visa según su nacionalidad y preparar los documentos y la solicitud.',
    summary: 'Revisar los requisitos de entrada y preparar los documentos para un viaje a Jamaica.',
    intro: [
      'Los requisitos para entrar a Jamaica dependen de su nacionalidad y de su pasaporte. Algunos viajeros deben obtener una visa con anticipación.',
      'Le ayudamos a revisar lo que se aplica a su caso y a preparar una solicitud clara para un viaje real.',
    ],
    forWho: [
      'Prepara un viaje de turismo, familiar o de trabajo a Jamaica.',
      'No sabe si su pasaporte necesita visa.',
    ],
    whatItIs: [
      'Las reglas de entrada las fija la Agencia de Pasaportes, Inmigración y Ciudadanía de Jamaica (PICA). Cuando se necesita visa, la solicitud se hace a través de una representación de Jamaica.',
      'Como con cualquier destino, el viaje debe tener un propósito real. No es un paso obligatorio ni una garantía para otra solicitud de visa.',
    ],
    howWeHelp: [
      'Revisar los requisitos de entrada para su nacionalidad.',
      'Preparar los documentos y la solicitud, si hace falta.',
      'Explicarle los pasos hasta el viaje.',
    ],
    steps: [
      { title: 'Revisión', text: 'Nacionalidad, pasaporte y motivo del viaje.' },
      { title: 'Preparación', text: 'Documentos, reservas previstas y formulario si se necesita visa.' },
      { title: 'Depósito y seguimiento', text: 'Depósito ante la representación correspondiente y seguimiento de la respuesta.' },
    ],
    checklist: [
      'Su pasaporte',
      'Las fechas y el motivo de su viaje',
      'Sus visas o permisos de residencia de otros países, si los tiene',
    ],
    faqs: [
      {
        q: '¿Necesito visa para Jamaica?',
        a: 'Depende de su nacionalidad y de su pasaporte. Revisamos con usted las reglas vigentes que publican las autoridades jamaiquinas.',
      },
      {
        q: '¿Un viaje a Jamaica ayuda para la visa americana?',
        a: 'No, no es un atajo. Cada solicitud de visa americana se evalúa según su situación. Le acompañamos en viajes que tienen un propósito real.',
      },
    ],
  },
};
