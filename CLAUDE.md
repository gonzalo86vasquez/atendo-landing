# Atendo Landing — Instrucciones para Claude Code

## Proyecto

Landing page de marketing para **Atendo**, un agente de WhatsApp con IA. React 19 + Vite + TypeScript, sin backend. Deployada en Vercel desde GitHub.

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **GSAP** para animaciones
- CSS vanilla (sin framework de estilos)
- Sin variables de entorno ni backend

## Comandos

```bash
npm run dev      # servidor local (puerto 5173)
npm run build    # tsc -b && vite build → dist/
npm run preview  # preview del build local
npm run lint     # eslint
```

## Ambientes y workflow de ramas

| Rama | Ambiente | URL |
|---|---|---|
| `master` | Production | dominio real |
| `develop` | Preview (pre-producción) | URL auto-generada por Vercel |
| `feature/*` | Preview (por rama) | URL auto-generada por Vercel |

**Flujo estándar:**

```
feature/xxx  →  develop  →  master
                (revisar     (producción)
                preview)
```

- Cualquier push a una rama distinta de `master` genera una Preview URL en Vercel automáticamente.
- Nunca pushear directo a `master` sin revisar en `develop` primero.
- Las Preview URLs aparecen en el Vercel Dashboard → Deployments.

## Estructura de componentes

Los componentes en `src/components/` siguen el orden de la página:

```
Navbar → Hero → ProofBar → Problema → ComoFunciona →
Beneficios → ParaQuien → Precios → FAQ → CTAFinal → Footer
```

`WAFloat` es el botón flotante de WhatsApp (posición fija).
