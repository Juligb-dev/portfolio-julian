export type Lang = 'es' | 'en'

export type L = {
  es: string
  en: string
}

export function pick(value: L, lang: Lang): string {
  return value[lang]
}

export const profile = {
  name: 'Julian Gualberto',
  shortName: 'Julian',
  initials: 'JG',
  handle: 'Juligb-dev',
  avatar: '/avatar.jpg',
  github: 'https://github.com/Juligb-dev',
  currentSite: 'https://skullt.web.app/',
  // Completar con el email real antes de publicar.
  email: '',
  role: {
    es: 'Desarrollador full-stack',
    en: 'Full-stack developer',
  } satisfies L,
  availability: {
    es: 'Disponible para nuevos proyectos',
    en: 'Available for new projects',
  } satisfies L,
  headline: {
    es: 'Construyo productos web de punta a punta.',
    en: 'I build web products end to end.',
  } satisfies L,
  intro: {
    es: 'Diseño y desarrollo experiencias con foco en el producto: interfaces cuidadas, datos confiables y una base técnica que aguanta producción.',
    en: 'I design and build product-focused experiences: considered interfaces, reliable data, and a technical foundation that holds up in production.',
  } satisfies L,
  location: {
    es: 'Remoto',
    en: 'Remote',
  } satisfies L,
}

export const nav = [
  { href: '/#trabajo', label: { es: 'Trabajo', en: 'Work' } satisfies L },
  { href: '/#capacidades', label: { es: 'Capacidades', en: 'Capabilities' } satisfies L },
  { href: '/#sobre-mi', label: { es: 'Sobre mí', en: 'About' } satisfies L },
  { href: '/#proceso', label: { es: 'Proceso', en: 'Process' } satisfies L },
  { href: '/#contacto', label: { es: 'Contacto', en: 'Contact' } satisfies L },
]

export const ui = {
  skip: { es: 'Saltar al contenido', en: 'Skip to content' },
  menu: { es: 'Abrir menú', en: 'Open menu' },
  closeMenu: { es: 'Cerrar menú', en: 'Close menu' },
  language: { es: 'Cambiar idioma', en: 'Switch language' },
  theme: { es: 'Cambiar tema', en: 'Toggle theme' },
  themeDark: { es: 'Tema oscuro', en: 'Dark theme' },
  themeLight: { es: 'Tema claro', en: 'Light theme' },
  ctaWork: { es: 'Ver proyectos', en: 'See selected work' },
  ctaContact: { es: 'Hablemos', en: 'Let’s talk' },
  ctaCv: { es: 'Ver CV', en: 'View CV' },
  ctaGithub: { es: 'Escribime por GitHub', en: 'Message me on GitHub' },
  ctaSite: { es: 'Ver sitio actual', en: 'Visit current site' },
  backHome: { es: 'Volver al inicio', en: 'Back home' },
  nextProject: { es: 'Siguiente proyecto', en: 'Next project' },
  viewCase: { es: 'Ver caso de estudio', en: 'View case study' },
  viewLive: { es: 'Ver en vivo', en: 'View live' },
  viewRepo: { es: 'Ver repositorio', en: 'View repository' },
  privateRepo: { es: 'Repo privado', en: 'Private repository' },
  scroll: { es: 'Scrolleá para explorar', en: 'Scroll to explore' },
  available: { es: 'Disponible', en: 'Available' },
  builtWith: { es: 'Diseñado y desarrollado por', en: 'Designed and developed by' },
  rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  print: { es: 'Imprimir / Guardar PDF', en: 'Print / Save PDF' },
  emailCopied: { es: 'Email copiado', en: 'Email copied' },
  copyEmail: { es: 'Copiar email', en: 'Copy email' },
  noEmail: {
    es: 'El email directo está en camino. Por ahora, escribime por GitHub.',
    en: 'A direct email is on the way. For now, reach me on GitHub.',
  },
  project: { es: 'Proyecto', en: 'Project' },
  role: { es: 'Rol', en: 'Role' },
  year: { es: 'Año', en: 'Year' },
  stack: { es: 'Stack', en: 'Stack' },
  links: { es: 'Links', en: 'Links' },
  challenge: { es: 'El desafío', en: 'The challenge' },
  approach: { es: 'El enfoque', en: 'The approach' },
  whatBuilt: { es: 'Qué construí', en: 'What I built' },
  impact: { es: 'Impacto', en: 'Impact' },
  learnings: { es: 'Qué aprendí', en: 'What I learned' },
  allProjects: { es: 'Todos los proyectos', en: 'All projects' },
  notFoundTitle: { es: 'Esta página no existe.', en: 'This page does not exist.' },
  notFoundBody: {
    es: 'Puede que el link esté viejo o que el proyecto haya cambiado de nombre.',
    en: 'The link may be old, or the project may have a new name.',
  },
}

export const heroStats = [
  {
    value: '03',
    label: { es: 'productos full-stack', en: 'full-stack products' } satisfies L,
  },
  {
    value: '675+',
    label: { es: 'tests automatizados en SKUL', en: 'automated tests in SKUL' } satisfies L,
  },
  {
    value: '966',
    label: { es: 'materias modeladas en EduCampus', en: 'subjects modeled in EduCampus' } satisfies L,
  },
]

export const marquee = [
  'React',
  'TypeScript',
  'Vite',
  'Firebase',
  'Firestore',
  'Cloudflare Workers',
  'Node.js',
  'Express',
  'SQLite',
  'Mercado Pago',
  'Playwright',
  'Vitest',
  'Tailwind CSS',
  'Accesibilidad',
]

export const sections = {
  work: {
    index: '01',
    label: { es: 'Trabajo seleccionado', en: 'Selected work' } satisfies L,
    title: { es: 'Productos, no pantallas.', en: 'Products, not screens.' } satisfies L,
    body: {
      es: 'Tres proyectos con problemas distintos: vender sin sobrevender, ordenar contenido educativo a escala y digitalizar una operación que vivía en planillas.',
      en: 'Three projects with different problems: selling without overselling, organizing educational content at scale, and digitizing an operation that lived in spreadsheets.',
    } satisfies L,
  },
  capabilities: {
    index: '02',
    label: { es: 'Capacidades', en: 'Capabilities' } satisfies L,
    title: { es: 'Del dato a la interfaz.', en: 'From data to interface.' } satisfies L,
    body: {
      es: 'Me muevo cómodo en todo el recorrido: modelo el dato, diseño el flujo, construyo la UI y dejo la lógica crítica del lado del servidor.',
      en: 'I’m comfortable across the whole path: modeling data, designing the flow, building the UI, and keeping critical logic on the server.',
    } satisfies L,
  },
  process: {
    index: '04',
    label: { es: 'Cómo trabajo', en: 'How I work' } satisfies L,
    title: { es: 'Entender, construir, endurecer.', en: 'Understand, build, harden.' } satisfies L,
    body: {
      es: 'No empiezo por el framework. Empiezo por el problema y por lo que tiene que pasar para que el producto sea confiable.',
      en: 'I don’t start with the framework. I start with the problem and with what has to happen for the product to be reliable.',
    } satisfies L,
  },
  about: {
    index: '03',
    label: { es: 'Sobre mí', en: 'About' } satisfies L,
    title: { es: 'Producto, diseño y engineering en la misma conversación.', en: 'Product, design, and engineering in the same conversation.' } satisfies L,
  },
  contact: {
    index: '05',
    label: { es: 'Contacto', en: 'Contact' } satisfies L,
    title: { es: '¿Construimos algo?', en: 'Shall we build something?' } satisfies L,
    body: {
      es: 'Estoy disponible para desarrollos full-stack, productos web y colaboraciones. Si tenés una idea o un problema para resolver, escribime.',
      en: 'I’m available for full-stack work, web products, and collaborations. If you have an idea or a problem to solve, get in touch.',
    } satisfies L,
  },
}

export const skills = [
  {
    title: { es: 'Frontend', en: 'Frontend' } satisfies L,
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML / CSS', 'Accesibilidad'],
  },
  {
    title: { es: 'Backend & cloud', en: 'Backend & cloud' } satisfies L,
    items: ['Node.js', 'Express', 'Cloudflare Workers', 'Firebase', 'Firestore', 'SQLite'],
  },
  {
    title: { es: 'Integraciones', en: 'Integrations' } satisfies L,
    items: ['Mercado Pago', 'MiCorreo', 'Cloudinary', 'Telegram Bot API', 'REST APIs', 'Webhooks'],
  },
  {
    title: { es: 'Calidad', en: 'Quality' } satisfies L,
    items: ['Playwright', 'Vitest', 'Axe', 'Firestore Rules', 'Testing por capas', 'Git / GitHub'],
  },
]

export const principles = [
  {
    title: { es: 'Producto antes que framework', en: 'Product before framework' } satisfies L,
    body: {
      es: 'La tecnología es un medio. Si una decisión técnica no mejora la experiencia o la confiabilidad, no entra.',
      en: 'Technology is a means. If a technical decision doesn’t improve the experience or reliability, it doesn’t go in.',
    } satisfies L,
  },
  {
    title: { es: 'La seguridad no es un extra', en: 'Security is not an extra' } satisfies L,
    body: {
      es: 'Precios, stock y permisos se validan del lado del servidor. El navegador no es una fuente de verdad.',
      en: 'Prices, stock, and permissions are validated server-side. The browser is not a source of truth.',
    } satisfies L,
  },
  {
    title: { es: 'Tests que documentan', en: 'Tests that document' } satisfies L,
    body: {
      es: 'Cada capa tiene su prueba: UI, Worker, reglas, backup y E2E. Un cambio seguro se puede explicar.',
      en: 'Every layer has its test: UI, Worker, rules, backup, and E2E. A safe change can be explained.',
    } satisfies L,
  },
  {
    title: { es: 'Detalles que se sienten', en: 'Details you can feel' } satisfies L,
    body: {
      es: 'Tipografía, foco, estados de carga y mensajes de error. Lo pequeño es lo que hace que una interfaz se sienta terminada.',
      en: 'Typography, focus, loading states, and error messages. The small things make an interface feel finished.',
    } satisfies L,
  },
]

export const processSteps = [
  {
    number: '01',
    title: { es: 'Entender', en: 'Understand' } satisfies L,
    body: {
      es: 'Problema, usuarios, restricciones y qué significa que funcione. Antes de escribir código, dejo claro qué no puede fallar.',
      en: 'Problem, users, constraints, and what “working” means. Before writing code, I make clear what cannot fail.',
    } satisfies L,
  },
  {
    number: '02',
    title: { es: 'Diseñar', en: 'Design' } satisfies L,
    body: {
      es: 'Flujos, arquitectura y una interfaz que no necesite explicación. Prototipo lo suficiente para descubrir los casos raros.',
      en: 'Flows, architecture, and an interface that needs no explanation. I prototype enough to discover the edge cases.',
    } satisfies L,
  },
  {
    number: '03',
    title: { es: 'Construir', en: 'Build' } satisfies L,
    body: {
      es: 'Código tipado, componentes reutilizables y datos validados. La lógica sensible vive del lado del servidor.',
      en: 'Typed code, reusable components, and validated data. Sensitive logic lives on the server.',
    } satisfies L,
  },
  {
    number: '04',
    title: { es: 'Endurecer', en: 'Harden' } satisfies L,
    body: {
      es: 'Tests, reglas, accesibilidad y deploy. Lo que se rompe, se arregla antes de salir; lo que puede abusarse, se limita.',
      en: 'Tests, rules, accessibility, and deploy. What breaks is fixed before launch; what can be abused is limited.',
    } satisfies L,
  },
]

export const about = {
  body: [
    {
      es: 'Trabajo en la intersección entre producto, diseño y engineering. Me gusta entender el problema antes de escribir código, construir interfaces que se sientan simples y dejar la lógica crítica del lado del servidor.',
      en: 'I work at the intersection of product, design, and engineering. I like to understand the problem before writing code, build interfaces that feel simple, and keep critical logic on the server.',
    },
    {
      es: 'Vengo de proyectos donde no alcanza con que la pantalla se vea bien: hay que cobrar, validar stock, proteger datos, escribir tests y pensar qué pasa cuando algo falla.',
      en: 'I come from projects where a good-looking screen is not enough: you have to charge, validate stock, protect data, write tests, and think about what happens when something fails.',
    },
    {
      es: 'Actualmente estoy construyendo EduCampus AR, una plataforma educativa para estudiantes universitarios, y SKUL, una tienda de ropa con pagos y logística reales.',
      en: 'I’m currently building EduCampus AR, an educational platform for university students, and SKUL, a clothing store with real payments and logistics.',
    },
  ] satisfies L[],
  currently: [
    {
      name: 'EduCampus AR',
      detail: {
        es: 'EdTech · 966 materias · 51 casos',
        en: 'EdTech · 966 subjects · 51 case studies',
      } satisfies L,
    },
    {
      name: 'SKUL',
      detail: {
        es: 'E-commerce · pagos · logística',
        en: 'E-commerce · payments · logistics',
      } satisfies L,
    },
  ],
}

export const contactLinks = {
  github: {
    label: 'GitHub',
    href: profile.github,
    handle: '@Juligb-dev',
  },
  site: {
    label: { es: 'Sitio actual', en: 'Current site' } satisfies L,
    href: profile.currentSite,
    handle: 'skullt.web.app',
  },
}
