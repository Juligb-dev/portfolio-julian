import type { L } from './site'

export type ProjectMetric = {
  value: string
  label: L
}

export type ProjectFeature = {
  title: L
  body: L
}

export type Project = {
  slug: string
  name: string
  category: L
  tagline: L
  description: L
  role: L
  year: string
  stack: string[]
  cover: string
  coverAlt: L
  previewLabel: string
  accent: string
  accentSoft: string
  accentLight: string
  accentSoftLight: string
  live?: string
  repo?: string
  repoNote?: L
  metrics: ProjectMetric[]
  caseStudy: {
    challenge: L
    approach: L
    quote: L
    features: ProjectFeature[]
    impact: L
    learnings: L
  }
}

export const projects: Project[] = [
  {
    slug: 'skul',
    name: 'SKUL',
    category: { es: 'E-commerce · Proyecto estrella', en: 'E-commerce · Flagship' },
    tagline: {
      es: 'Tienda de ropa con drops, stock real y pagos reales.',
      en: 'Clothing store with drops, real stock and real payments.',
    },
    description: {
      es: 'E-commerce completo con catálogo, carrito, cupones, gift cards y panel admin. Checkout con Mercado Pago, stock validado del lado del servidor y 675+ tests.',
      en: 'Full e-commerce with catalog, cart, coupons, gift cards and admin panel. Mercado Pago checkout, server-side stock validation, 675+ tests.',
    },
    role: { es: 'Diseño y desarrollo full-stack', en: 'Design and full-stack development' },
    year: '2026',
    stack: [
      'React',
      'Vite',
      'Firebase',
      'Firestore',
      'Cloudflare Workers',
      'Mercado Pago',
      'MiCorreo',
      'Telegram',
      'Cloudinary',
      'Playwright',
      'Vitest',
    ],
    cover: '/proyectos/skul-home.jpg',
    coverAlt: {
      es: 'Home de SKUL, tienda de ropa con estética oscura.',
      en: 'SKUL home page, a clothing store with a dark aesthetic.',
    },
    previewLabel: 'skullt.web.app',
    accent: '#ff6a3d',
    accentSoft: 'rgba(255, 106, 61, 0.16)',
    accentLight: '#9e3415',
    accentSoftLight: 'rgba(158, 52, 21, 0.11)',
    live: 'https://skullt.web.app/',
    repo: 'https://github.com/Juligb-dev/skul-site',
    metrics: [
      { value: '675+', label: { es: 'tests automatizados', en: 'automated tests' } },
      { value: '5', label: { es: 'capas de testing', en: 'testing layers' } },
      { value: '0', label: { es: 'secretos en el cliente', en: 'secrets in the client' } },
    ],
    caseStudy: {
      challenge: {
        es: 'SKUL vende drops limitados y prendas de catálogo. La tienda necesitaba cobrar de verdad, no sobrevender stock y no confiar en el navegador para calcular precios, descuentos o saldos de gift cards.',
        en: 'SKUL sells limited drops and catalog pieces. The store needed to charge for real, avoid overselling stock, and not trust the browser to calculate prices, discounts, or gift card balances.',
      },
      approach: {
        es: 'Separé la experiencia de compra (React + Firestore) del backend sensible (Cloudflare Worker). El Worker guarda los secretos, recalcula precios, valida stock, firma las subidas a Cloudinary y confirma cada pago contra Mercado Pago. Firestore guarda catálogo y pedidos; las reglas deciden quién lee y quién escribe.',
        en: 'I separated the shopping experience (React + Firestore) from the sensitive backend (Cloudflare Worker). The Worker stores secrets, recalculates prices, validates stock, signs Cloudinary uploads, and confirms every payment against Mercado Pago. Firestore stores the catalog and orders; rules decide who reads and who writes.',
      },
      quote: {
        es: 'El navegador no decide nada: precios, descuentos, stock y saldos de gift cards los recalcula el Worker.',
        en: 'The browser decides nothing: prices, discounts, stock, and gift card balances are recalculated by the Worker.',
      },
      features: [
        {
          title: { es: 'Checkout real', en: 'Real checkout' },
          body: {
            es: 'Mercado Pago Checkout Pro y un webhook que re-verifica el pago antes de dar la orden por buena.',
            en: 'Mercado Pago Checkout Pro and a webhook that re-verifies the payment before marking the order as valid.',
          },
        },
        {
          title: { es: 'Stock por variante', en: 'Stock by variant' },
          body: {
            es: 'Talle y color conectados al inventario; el carrito valida el tope de unidades disponibles.',
            en: 'Size and color connected to inventory; the cart validates the available unit limit.',
          },
        },
        {
          title: { es: 'Panel de administración', en: 'Admin panel' },
          body: {
            es: 'Productos, cupones, gift cards, estado del sitio y countdown, sin tocar el código.',
            en: 'Products, coupons, gift cards, site status, and countdown, without touching code.',
          },
        },
        {
          title: { es: 'Logística y avisos', en: 'Logistics and alerts' },
          body: {
            es: 'Cotización de envíos con MiCorreo y notificación de pedidos por Telegram.',
            en: 'Shipping quotes with MiCorreo and order notifications through Telegram.',
          },
        },
        {
          title: { es: 'Testing por capas', en: 'Layered testing' },
          body: {
            es: '430 tests del sitio, 196 del Worker, 42 de reglas de Firestore, 7 de backup y E2E con Playwright + Axe.',
            en: '430 site tests, 196 Worker tests, 42 Firestore rules checks, 7 backup tests, and E2E with Playwright + Axe.',
          },
        },
      ],
      impact: {
        es: 'Una tienda real con pagos, stock y logística conectados, y 675+ pruebas automatizadas para que el checkout no dependa de la suerte.',
        en: 'A real store with payments, stock, and logistics connected, plus 675+ automated tests so checkout does not depend on luck.',
      },
      learnings: {
        es: 'La parte más difícil no fue la UI: fue hacer que el servidor fuera la única fuente de verdad y que cada flujo tuviera una prueba.',
        en: 'The hardest part was not the UI: it was making the server the single source of truth and giving every flow a test.',
      },
    },
  },
  {
    slug: 'educampus',
    name: 'EduCampus AR',
    category: { es: 'EdTech · En desarrollo', en: 'EdTech · In development' },
    tagline: {
      es: 'Plataforma para aprender con 966 materias universitarias.',
      en: 'Learning platform covering 966 university subjects.',
    },
    description: {
      es: 'Hub con guías, bibliografías, casos guiados y comunidad. En desarrollo, siendo testeado por estudiantes entre 5 y 20.',
      en: 'Hub with guides, bibliographies, guided cases and community. In development, being tested by a small group of students.',
    },
    role: {
      es: 'Producto, diseño y desarrollo full-stack',
      en: 'Product, design, and full-stack development',
    },
    year: '2026',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Firebase',
      'Firestore',
      'Three.js',
      'Zustand',
      'React Router',
    ],
    cover: '/proyectos/educampus-home.jpg',
    coverAlt: {
      es: 'Home de EduCampus AR, plataforma educativa.',
      en: 'EduCampus AR home page, an educational platform.',
    },
    previewLabel: 'educampus-ar.web.app',
    accent: '#7c9cff',
    accentSoft: 'rgba(124, 156, 255, 0.16)',
    accentLight: '#3b56a8',
    accentSoftLight: 'rgba(59, 86, 168, 0.11)',
    live: 'https://educampus-ar.web.app/',
    repoNote: {
      es: 'Código privado. Puedo mostrarlo en una entrevista.',
      en: 'Private code. I can walk through it in an interview.',
    },
    metrics: [
      { value: '966', label: { es: 'materias cubiertas', en: 'subjects covered' } },
      { value: '3.357', label: { es: 'referencias', en: 'references' } },
      { value: '51', label: { es: 'casos guiados', en: 'guided cases' } },
      { value: '10/10', label: { es: 'checks de reglas', en: 'rules checks' } },
    ],
    caseStudy: {
      challenge: {
        es: 'La información de una carrera está dispersa entre PDFs, grupos y apuntes. Había que ordenar 966 materias sin inventar contenido y abrir una comunidad sin login que no se convirtiera en un basurero de spam.',
        en: 'A degree’s information is scattered across PDFs, group chats, and notes. The challenge was to organize 966 subjects without inventing content and open a no-login community that would not become a spam dump.',
      },
      approach: {
        es: 'Modelé el contenido por universidad, carrera y materia. Generé guías base solo a partir de bibliografía existente, separé el material curado del comunitario y diseñé la comunidad con validación estricta, votos limitados y un kill switch. No se alojan PDFs protegidos: cada referencia declara su acceso.',
        en: 'I modeled content by university, degree, and subject. I generated base guides only from existing bibliography, separated curated material from community material, and designed the community with strict validation, limited votes, and a kill switch. No protected PDFs are hosted: every reference states its access.',
      },
      quote: {
        es: '966 materias cubiertas, 3.357 referencias y cero PDFs inventados.',
        en: '966 subjects covered, 3,357 references, and zero invented PDFs.',
      },
      features: [
        {
          title: { es: 'Contenido a escala', en: 'Content at scale' },
          body: {
            es: '966 guías base y 3.357 referencias; 28 bibliotecas curadas y 6 bibliotecas base.',
            en: '966 base guides and 3,357 references; 28 curated libraries and 6 base libraries.',
          },
        },
        {
          title: { es: 'Casos guiados', en: 'Guided cases' },
          body: {
            es: '51 casos: 20 por carrera, 28 por materia y 3 interdisciplinarios, con examen, feedback diferido y entregables.',
            en: '51 cases: 20 by degree, 28 by subject, and 3 interdisciplinary, with exams, deferred feedback, and deliverables.',
          },
        },
        {
          title: { es: 'Portafolio de aprendizaje', en: 'Learning portfolio' },
          body: {
            es: 'Métricas, materias y competencias débiles, guardado local y descarga.',
            en: 'Metrics, weak subjects and skills, local storage, and download.',
          },
        },
        {
          title: { es: 'Comunidad con reglas', en: 'Community with rules' },
          body: {
            es: 'Firestore valida campos, URLs http(s) y solo permite sumar un voto; no se pueden ocultar aportes ajenos.',
            en: 'Firestore validates fields, http(s) URLs, and only allows adding one vote; other people’s contributions cannot be hidden.',
          },
        },
        {
          title: { es: 'Accesibilidad', en: 'Accessibility' },
          body: {
            es: 'Lectura en voz alta, navegación por teclado, foco visible y respeto por reduced motion.',
            en: 'Read-aloud, keyboard navigation, visible focus, and respect for reduced motion.',
          },
        },
      ],
      impact: {
        es: 'Una plataforma que cubre 966 materias y 51 casos, con una comunidad que se puede apagar sin redeployar si algo se sale de control.',
        en: 'A platform covering 966 subjects and 51 cases, with a community that can be turned off without a redeploy if something gets out of hand.',
      },
      learnings: {
        es: 'La calidad del contenido importa tanto como la arquitectura. Y sin autenticación, la seguridad se diseña con reglas, límites y un plan para cortar la escritura.',
        en: 'Content quality matters as much as architecture. And without authentication, security is designed with rules, limits, and a plan to shut down writes.',
      },
    },
  },
  {
    slug: 'control-de-flotas',
    name: 'Control de Flotas',
    category: { es: 'Facultad · Trabajo práctico', en: 'Uni · Assignment' },
    tagline: {
      es: 'Checklist diario para inspección de flota.',
      en: 'Daily vehicle inspection checklist.',
    },
    description: {
      es: 'App para que choferes hagan checklist y supervisores lo revisen. Express + SQLite, roles, sesiones y exportación CSV.',
      en: 'App for drivers to check vehicles and supervisors to review. Express + SQLite, roles, sessions and CSV export.',
    },
    role: { es: 'Desarrollo full-stack', en: 'Full-stack development' },
    year: '2026',
    stack: [
      'Node.js',
      'Express',
      'SQLite',
      'better-sqlite3',
      'scrypt',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    cover: '/proyectos/flotas-home.jpg',
    coverAlt: {
      es: 'Pantalla de checklist de Control de Flotas.',
      en: 'Control de Flotas checklist screen.',
    },
    previewLabel: 'localhost:3000',
    accent: '#65e0b5',
    accentSoft: 'rgba(101, 224, 181, 0.16)',
    accentLight: '#196b4f',
    accentSoftLight: 'rgba(25, 107, 79, 0.11)',
    repo: 'https://github.com/Juligb-dev/proyecto-gestion-flota',
    metrics: [
      { value: '10', label: { es: 'ítems de control', en: 'checklist items' } },
      { value: '2', label: { es: 'roles', en: 'roles' } },
      { value: 'CSV', label: { es: 'historial exportable', en: 'exportable history' } },
    ],
    caseStudy: {
      challenge: {
        es: 'El control de la flota se hacía en planillas y mensajes. Los supervisores necesitaban saber quién revisó cada vehículo, qué falló y cuándo, sin depender de un Excel.',
        en: 'Fleet control was handled through spreadsheets and messages. Supervisors needed to know who inspected each vehicle, what failed, and when, without relying on Excel.',
      },
      approach: {
        es: 'Construí una API con Express y SQLite, autenticación por DNI con scrypt, sesiones de 7 días y roles. La UI guía al chofer en tres pasos y el admin ve historial, estadísticas y usuarios.',
        en: 'I built an API with Express and SQLite, DNI-based authentication with scrypt, 7-day sessions, and roles. The UI guides drivers through three steps, while admins see history, statistics, and users.',
      },
      quote: {
        es: 'Un formulario operativo tiene que ser rápido, tolerante a errores y mostrar solo lo que cada rol necesita.',
        en: 'An operational form has to be fast, forgiving, and show only what each role needs.',
      },
      features: [
        {
          title: { es: 'Checklist en 3 pasos', en: 'Three-step checklist' },
          body: {
            es: 'Vehículo, 10 ítems y resumen; el conductor solo confirma.',
            en: 'Vehicle, 10 items, and summary; the driver just confirms.',
          },
        },
        {
          title: { es: 'Roles y sesiones', en: 'Roles and sessions' },
          body: {
            es: 'Conductor/admin, tokens Bearer con vencimiento y contraseñas hasheadas con scrypt.',
            en: 'Driver/admin, expiring Bearer tokens, and scrypt-hashed passwords.',
          },
        },
        {
          title: { es: 'Historial y CSV', en: 'History and CSV' },
          body: {
            es: 'Tabla por revisión y exportación compatible con Excel (BOM + separador punto y coma).',
            en: 'A table per inspection and Excel-friendly export (BOM + semicolon separator).',
          },
        },
        {
          title: { es: 'Estadísticas', en: 'Statistics' },
          body: {
            es: 'Totales, vehículos únicos, porcentaje de fallas y fallas por ítem.',
            en: 'Totals, unique vehicles, failure rate, and failures by item.',
          },
        },
        {
          title: { es: 'Nómina de choferes', en: 'Driver roster' },
          body: {
            es: 'Solo DNIs de la nómina con cargo “chofer” pueden registrarse.',
            en: 'Only roster DNIs with the “driver” role can register.',
          },
        },
      ],
      impact: {
        es: '10 ítems de control, 2 roles, historial exportable y estadísticas para priorizar mantenimiento.',
        en: '10 checklist items, 2 roles, exportable history, and statistics to prioritize maintenance.',
      },
      learnings: {
        es: 'La utilidad de una herramienta operativa se mide en el tiempo que le ahorra a quien la usa, no en la cantidad de pantallas.',
        en: 'The value of an operational tool is measured by the time it saves the person using it, not by the number of screens.',
      },
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
