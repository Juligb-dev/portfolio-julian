# Portfolio — Julian Gualberto

Portfolio personal bilingüe (ES/EN) para mostrar proyectos full-stack, casos de estudio y CV.

**Stack:** React 19 · Vite 8 · TypeScript · Tailwind CSS 4 · React Router 7 · Manrope + JetBrains Mono.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

```bash
npm run build      # typecheck + build de producción
npm run preview    # servir el build
npm run typecheck  # solo TypeScript
npm run lint       # oxlint
```

## Estructura

```text
src/
  components/      Header, Footer, Layout, SEO, cards, reveal, marquee
  data/
    site.ts        Perfil, textos, skills, proceso, contacto
    projects.ts    SKUL, EduCampus AR y Control de Flotas + casos de estudio
  lib/
    i18n.tsx       Selector ES/EN persistido en localStorage
    theme.tsx      Tema oscuro/claro persistido
  pages/
    Home.tsx
    ProjectPage.tsx
    CvPage.tsx     CV imprimible / guardable como PDF
    NotFound.tsx
public/
  avatar.jpg
  og-image.jpg
  proyectos/       Capturas de los tres proyectos
```

## Editar contenido

### Datos personales

Abrí `src/data/site.ts`:

- `profile.email`: **está vacío a propósito**. Completalo antes de publicar.
- `profile.location`: hoy dice “Remoto”.
- `profile.github`, `profile.currentSite`, `profile.avatar`.
- `about.body`: bio editable.
- `skills`, `principles`, `processSteps`.

### Proyectos

Abrí `src/data/projects.ts`. Cada proyecto tiene:

- textos ES/EN, rol, año, stack y links;
- métricas;
- caso de estudio (`challenge`, `approach`, `quote`, `features`, `impact`, `learnings`);
- captura en `public/proyectos/`.

Para agregar un proyecto fuera de GitHub, duplicá un objeto, cambiá el `slug` y agregá la captura. La home y el CV se actualizan solos.

### Capturas

Las capturas actuales son de las aplicaciones reales:

- `skul-home.jpg` — `https://skullt.web.app/`
- `educampus-home.jpg` — `https://educampus-ar.web.app/`
- `flotas-home.jpg` — app local de Control de Flotas (`localhost:3000`)

Si actualizás una app, reemplazá el JPG manteniendo el nombre.

## Deploy en Vercel

### Opción A — desde GitHub (recomendado)

1. Crear el repo en GitHub.
2. Importarlo en Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

`vercel.json` ya incluye:

- rewrites de SPA para que `/proyectos/:slug` y `/cv` funcionen al refrescar;
- headers de seguridad (CSP, HSTS, `X-Frame-Options`, etc.);
- cache inmutable para `/assets/*`.

### Opción B — CLI

```bash
npx vercel
npx vercel --prod
```

Requiere login de Vercel.

## Antes de publicar

- [ ] Completar `profile.email` en `src/data/site.ts`.
- [ ] Confirmar bio, ubicación y foto.
- [ ] Agregar proyectos que no están en GitHub (si aplica).
- [ ] Revisar el CV (`/cv`) y agregar formación/experiencia si corresponde.
- [ ] Cambiar `SITE_URL` si el dominio final no es `portfolio-julian.vercel.app`:
  - `src/components/Seo.tsx`
  - `public/robots.txt`
  - `public/sitemap.xml`
  - `index.html` (metas OG)
- [ ] Reemplazar `public/og-image.jpg` si cambia el mensaje principal.

## Decisiones de contenido

- No se inventaron PDFs ni material protegido en EduCampus: cada referencia declara su acceso.
- El repo de EduCampus es privado; el caso de estudio lo aclara.
- Control de Flotas no tiene demo pública: se muestra el repo y la captura de la app local.
- Las métricas salen de los proyectos reales (tests de SKUL, materias/referencias/casos de EduCampus).

## Licencia

Contenido y capturas: © Julian Gualberto. El código puede usarse como referencia, pero los textos personales y las capturas no deben reutilizarse sin permiso.
