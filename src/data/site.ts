export type Lang = 'es' | 'en'

export type L = {
  es: string
  en: string
}

export function pick(value: L, lang: Lang): string {
  return value[lang]
}

export const profile = {
  name: 'Julián Gualberto',
  shortName: 'Julián',
  initials: 'JG',
  handle: 'Juligb-dev',
  avatar: '/avatar.jpg',
  github: 'https://github.com/Juligb-dev',
  currentSite: 'https://skullt.web.app/',
  // Completar con el email real antes de publicar.
  email: '',
  role: {
    es: 'Desarrollador Full Stack',
    en: 'Full Stack Developer',
  } satisfies L,
  availability: {
    es: 'Disponible',
    en: 'Available',
  } satisfies L,
  headline: {
    es: 'Julián Gualberto',
    en: 'Julián Gualberto',
  } satisfies L,
  intro: {
    es: 'Desarrollador Full Stack.',
    en: 'Full Stack Developer.',
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
  menu: { es: 'Menú', en: 'Menu' },
  closeMenu: { es: 'Cerrar', en: 'Close' },
  language: { es: 'Idioma', en: 'Language' },
  theme: { es: 'Tema', en: 'Theme' },
  themeDark: { es: 'Oscuro', en: 'Dark' },
  themeLight: { es: 'Claro', en: 'Light' },
  ctaWork: { es: 'Ver trabajos', en: 'View work' },
  ctaContact: { es: 'Contacto', en: 'Contact' },
  ctaCv: { es: 'CV', en: 'CV' },
  ctaGithub: { es: 'GitHub', en: 'GitHub' },
  ctaSite: { es: 'Sitio', en: 'Site' },
  backHome: { es: 'Inicio', en: 'Home' },
  nextProject: { es: 'Siguiente', en: 'Next' },
  viewCase: { es: 'Ver', en: 'View' },
  viewLive: { es: 'Ver online', en: 'Live' },
  viewRepo: { es: 'Repo', en: 'Repo' },
  privateRepo: { es: 'Privado', en: 'Private' },
  scroll: { es: 'Scroll', en: 'Scroll' },
  available: { es: 'Disponible', en: 'Available' },
  builtWith: { es: 'Por', en: 'By' },
  rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  print: { es: 'Imprimir', en: 'Print' },
  emailCopied: { es: 'Copiado', en: 'Copied' },
  copyEmail: { es: 'Copiar', en: 'Copy' },
  noEmail: {
    es: 'GitHub',
    en: 'GitHub',
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
    value: '01',
    label: { es: 'Producto estrella', en: 'Flagship product' } satisfies L,
  },
  {
    value: '675+',
    label: { es: 'Tests en SKUL', en: 'Tests in SKUL' } satisfies L,
  },
  {
    value: '966',
    label: { es: 'Materias en EduCampus', en: 'Subjects in EduCampus' } satisfies L,
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
    label: { es: 'Proyectos', en: 'Projects' } satisfies L,
    title: { es: 'Proyectos', en: 'Projects' } satisfies L,
    body: {
      es: '',
      en: '',
    } satisfies L,
  },
  capabilities: {
    index: '02',
    label: { es: 'Stack', en: 'Stack' } satisfies L,
    title: { es: 'Stack', en: 'Stack' } satisfies L,
    body: {
      es: '',
      en: '',
    } satisfies L,
  },
  process: {
    index: '04',
    label: { es: 'Proceso', en: 'Process' } satisfies L,
    title: { es: 'Proceso', en: 'Process' } satisfies L,
    body: {
      es: '',
      en: '',
    } satisfies L,
  },
  about: {
    index: '03',
    label: { es: 'Sobre mí', en: 'About' } satisfies L,
    title: { es: 'Sobre mí', en: 'About' } satisfies L,
  },
  contact: {
    index: '05',
    label: { es: 'Contacto', en: 'Contact' } satisfies L,
    title: { es: 'Contacto', en: 'Contact' } satisfies L,
    body: {
      es: '',
      en: '',
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
    title: { es: '', en: '' } satisfies L,
    body: {
      es: '',
      en: '',
    } satisfies L,
  },
  {
    number: '02',
    title: { es: '', en: '' } satisfies L,
    body: {
      es: '',
      en: '',
    } satisfies L,
  },
  {
    number: '03',
    title: { es: '', en: '' } satisfies L,
    body: {
      es: '',
      en: '',
    } satisfies L,
  },
  {
    number: '04',
    title: { es: '', en: '' } satisfies L,
    body: {
      es: '',
      en: '' } satisfies L,
  },
]

export const about = {
  body: [] satisfies L[],
  currently: [],
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
