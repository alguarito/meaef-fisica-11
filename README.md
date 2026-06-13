# MEAEF — Física 11° · Guardianes del Sistema

Plataforma educativa de **Física 11°** basada en el **Modelo Energético-Ambiental para la Enseñanza de la Física (MEAEF)**. Aplicación web progresiva (PWA) con simuladores PhET y fichas HIEM interactivas, diseñada para uso multigrado y funcionamiento sin conexión.

## Características

- 📱 **Responsive** — diseño *mobile-first*; navegación inferior en móvil que se transforma en barra lateral en escritorio (≥1024px).
- 🔌 **PWA / Offline** — instalable y con contenido disponible sin internet (Service Worker + caché de simuladores PhET y fuentes).
- 💾 **Progreso local** — el avance, las fichas HIEM y las insignias se guardan en el dispositivo con IndexedDB (Dexie).
- 🧭 **SPA con router por hash** — compatible directo con GitHub Pages, sin configuración de servidor.

## Tecnologías

| Área | Herramienta |
|------|-------------|
| Build / dev server | [Vite](https://vitejs.dev/) 6 |
| PWA | `vite-plugin-pwa` + Workbox |
| Persistencia | [Dexie](https://dexie.org/) (IndexedDB) |
| Despliegue | GitHub Pages (GitHub Actions) |

## Estructura

```
.
├── index.html              # Punto de entrada + navegación
├── vite.config.js          # Configuración Vite + PWA
├── public/                 # Recursos estáticos (favicon, íconos PWA)
└── src/
    ├── main.js             # Arranque de la app
    ├── router.js           # Router SPA por hash
    ├── db.js               # IndexedDB (Dexie)
    ├── toast.js            # Notificaciones
    ├── style.css           # Sistema de diseño responsive
    ├── data/curriculum.js  # Contenido curricular
    └── pages/              # Vistas: home, periodo, semana, hiem, progreso, laboratorio
```

## Desarrollo local

Requiere [Node.js](https://nodejs.org/) 20+.

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # compilar a producción (carpeta dist/)
npm run preview  # previsualizar el build
```

## Despliegue en GitHub Pages

El repositorio incluye un flujo de GitHub Actions (`.github/workflows/deploy.yml`) que compila y publica automáticamente en cada *push* a `main`.

1. Sube el repositorio a GitHub.
2. En **Settings → Pages**, selecciona **Source: GitHub Actions**.
3. Cada *push* a `main` desplegará la versión actualizada.

---

Material educativo · I.E. Sor María Juliana · Área de Tecnología e Informática.
