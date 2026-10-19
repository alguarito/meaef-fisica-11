# MEAEF — Física 11° · Guardianes del Sistema

Plataforma educativa de **Física 11°** basada en el **Modelo Energético-Ambiental para la Enseñanza de la Física (MEAEF)**. Aplicación web progresiva (PWA) con simuladores PhET y fichas HIEM interactivas, diseñada para uso multigrado y funcionamiento sin conexión.

---

## 🚀 Cómo publicar en GitHub

> Este proyecto **no incluye `node_modules/` ni `dist/`** a propósito: pesan ~90 MB y miles de archivos, y se regeneran solos. **Nunca subas esas dos carpetas** — son la causa habitual de que falle una subida manual.

**Opción A — con Git (recomendada):**

1. Crea un repositorio **vacío** en GitHub (sin README ni .gitignore) y copia su URL.
2. En una terminal, dentro de esta carpeta, ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Versión inicial"
   git branch -M main
   git remote add origin https://github.com/USUARIO/REPOSITORIO.git
   git push -u origin main
   ```
3. En el repositorio: **Settings → Pages → Source → GitHub Actions**.

**Opción B — sin Git (por la web):**

1. Crea un repositorio nuevo en GitHub.
2. **Add file → Upload files** y arrastra el contenido de esta carpeta (~20 archivos).
3. Pulsa *Commit changes* y luego **Settings → Pages → Source → GitHub Actions**.

En ambos casos, GitHub Actions instala las dependencias y compila el sitio en la nube automáticamente: **no hay que subir dependencias ni archivos compilados**.

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

> El flujo de despliegue ya está incluido en `.github/workflows/deploy.yml`: cada *push* a `main` recompila y publica el sitio automáticamente.

---

Material educativo · I.E. Sor María Juliana · Área de Tecnología e Informática.

## Licencia

Código: MIT (`LICENSE`). Contenidos educativos: CC BY-SA 4.0 (`LICENCIA-CONTENIDOS.md`). Los simuladores PhET conservan su licencia CC BY 4.0.

## Cómo citar

Cardenas Orozco, A. (2026). *MEAEF — Física 11.º: Guardianes del Sistema* [Software]. https://github.com/alguarito/meaef-fisica-11

El archivo `CITATION.cff` trae la cita lista para Zotero, Mendeley y GitHub («Cite this repository»).

## Autor

**Alvaro Cardenas Orozco**, PhD en Ciencias de la Educación e ingeniero de sistemas · [alvarocardenasorozco.com](https://alvarocardenasorozco.com) · ORCID [0000-0003-1820-301X](https://orcid.org/0000-0003-1820-301X)

¿Quiere algo así para su institución? Vea el [programa de currículo STEM+](https://alvarocardenasorozco.com/educacion-stem-steam.html) o [agende un diagnóstico gratuito de 30 minutos](https://calendly.com/alvaro-cardenas-orozco/diagnostico-institucional-30-min).
