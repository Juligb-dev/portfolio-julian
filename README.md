# Portfolio — Julián Gualberto

Portfolio personal de una sola página: una lista editorial de proyectos con preview en hover y foco de teclado. Sin frameworks de UI, sin tema claro y sin páginas secundarias.

**Producción:** [portfolio-julian-seven.vercel.app](https://portfolio-julian-seven.vercel.app)

**Stack:** React 19 · Vite 8 · TypeScript · CSS (preflight de Tailwind) · Satoshi self-hosted.

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
  App.tsx          Lista de proyectos, cursor y preview
  index.css        Tipografía, layout y estados de foco
  main.tsx         Entrada de React
public/
  fonts/           Satoshi variable (self-hosted)
  proyectos/       Capturas de SKUL, EduCampus AR y Control de Flotas
  og-image.jpg     Imagen 1200 × 630 para redes
  favicon.svg
```

## Editar proyectos

Los proyectos viven en el array `works` de `src/App.tsx`:

```ts
{
  id: '01',
  title: 'SKUL',
  cat: 'store',
  url: 'https://skullt.web.app/',
  img: '/proyectos/skul-home.jpg',
}
```

- `id`: número visible en la lista.
- `title`: nombre del proyecto.
- `cat`: categoría corta en inglés (`store`, `platform`, `ops`).
- `url`: destino al hacer click.
- `img`: captura que aparece en el preview.

Para agregar un proyecto, sumá un objeto al array y una captura en `public/proyectos/`. Mantené el orden del array: es el orden en pantalla.

Las capturas actuales son de las aplicaciones reales:

- `skul-home.jpg` — `https://skullt.web.app/`
- `educampus-home.jpg` — `https://educampus-ar.web.app/`
- `flotas-home.jpg` — app local de Control de Flotas

## Preview y responsive

- En desktop, la captura aparece al pasar el mouse o al enfocar un proyecto con Tab.
- En mobile y en dispositivos táctiles, el preview se oculta para no tapar la lista. Los proyectos siguen siendo links directos.
- El cursor decorativo también se oculta en dispositivos táctiles.

## Tipografía

Satoshi se sirve desde `public/fonts/satoshi-variable.woff2` para evitar pedidos a terceros y cumplir la CSP. La licencia y la fuente están documentadas en `public/fonts/README.md`.

## Deploy en Vercel

### Desde GitHub

1. Importá `Juligb-dev/portfolio-julian` en Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

### Desde la CLI

```bash
npx vercel
npx vercel --prod
```

`vercel.json` incluye headers de seguridad, cache inmutable para `/assets/*` y `/fonts/*`, y no reescribe rutas inexistentes al home.

## Metadata

La URL canónica de producción es `https://portfolio-julian-seven.vercel.app`. Si cambia el dominio, actualizá:

- `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`)
- `public/robots.txt`
- `public/sitemap.xml`
- `public/og-image.jpg` si cambia el mensaje principal

## Contenido

Los tres proyectos son reales y los links apuntan a sus destinos actuales:

- **SKUL** — e-commerce con pagos en producción.
- **EduCampus AR** — plataforma educativa.
- **Control de Flotas** — herramienta operativa; el link va al repositorio.

No se incluyen métricas, PDFs ni datos personales inventados.

## Licencia

Contenido y capturas: © Julián Gualberto. El código puede usarse como referencia, pero los textos personales y las capturas no deben reutilizarse sin permiso.
