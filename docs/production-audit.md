# Auditoría de producción — Instituto Técnico Rivedu

Fecha de revisión: 20 de septiembre de 2026

## Alcance y limitaciones

Se revisaron el repositorio local, el despliegue publicado en `https://instituto-tecnico-rivedu.vercel.app/` y sus respuestas HTTP. El dominio `https://rivedu.com` todavía no resuelve. No hay navegador controlable disponible en esta sesión, por lo que la inspección visual en 375, 390, 768, 1024 y 1440 px, el flujo de teclado real y las métricas LCP, CLS e INP quedan pendientes.

No se hizo commit, push, despliegue, cambio de DNS, compra de dominio ni envío de mensajes.

## Resumen ejecutivo

- El despliegue publicado responde correctamente para la landing, las 12 fichas, el favicon, el logo, `sitemap.xml` y `robots.txt`.
- Se confirmó un problema SEO: canonical, Open Graph, sitemap y robots apuntaban a `rivedu.com`, aunque el dominio no resuelve.
- Se confirmó un problema funcional local: los cuatro cursos destacados del hero apuntaban al ancla del catálogo en lugar de a sus fichas.
- Se corrigieron ambos problemas en local y se añadió un estado de vista previa con `noindex` reversible.
- La información comercial, acreditaciones, precios, horarios y certificaciones permanece sin publicar y pendiente de validación.

## Hallazgos

| Severidad | Área | Evidencia | Estado | Corrección / resultado |
| --- | --- | --- | --- | --- |
| P1 | SEO y dominio | Producción devolvió canonical y `og:url` con `https://rivedu.com`; las solicitudes al dominio fallaron por resolución DNS. | Confirmado | Se centralizó `siteConfig`. Por defecto usa el dominio Vercel y `noindex`; el dominio final solo se activa mediante variables aprobadas. |
| P1 | Navegación del hero | `Hero.tsx` usaba `href="#cursos"` para los cuatro destacados. | Confirmado | Cada destacado enlaza ahora a su slug correcto: Excel, Inglés Conversacional, Bachillerato por Madurez y CCNA. |
| P1 | Información oficial | Los 12 cursos usan `advertised-pending-validation`; no se muestran detalles oficiales, precios, horarios, certificaciones ni acreditaciones no verificadas. | Descartado como defecto | Se mantiene la separación entre contenido educativo general y datos pendientes. |
| P1 | WhatsApp | El código conserva `50660118430`, `50672634928`, `wa.me` y `encodeURIComponent`; no hay envío automático. | Correcto; interacción visual pendiente | Se conservaron ambos contactos y se añadió `noopener noreferrer`. No se envió ningún mensaje. |
| P1 | Rutas | Producción devolvió 200 para la landing y las 12 rutas; `/cursos/no-existe` devolvió 404. | Descartado | Rutas, slugs y `notFound()` funcionan. |
| P1 | Sitemap y robots | Producción devolvió HTTP 200, pero con URLs del dominio aún no operativo. | Confirmado | Se generan con la URL centralizada y el estado de vista previa/lanzamiento. |
| P1 | Menú móvil | El código tiene `aria-expanded`, cierre al seleccionar enlace y cierre con Escape. | No verificable visualmente | Corrección estructural aplicada; falta recorrido manual en navegador. |
| P2 | Editorial | Las fichas ya no muestran encabezados genéricos; cada una usa títulos específicos. | Descartado | Verificado en local y producción publicada. |
| P2 | Categoría tecnológica | “Tecnología y ofimática” agrupa Excel, Office y CCNA de forma coherente. | Descartado | No se cambió al no existir error funcional comprobado. |
| P2 | Rendimiento | Build estático exitoso; no se ejecutó Lighthouse ni se midieron Web Vitals. | No verificable | No se inventan métricas. |
| P2 | Seguridad | No hay `.env`, secretos, `dangerouslySetInnerHTML`, SVG visible ni vulnerabilidades de producción según `npm audit`. | Correcto con alcance limitado | Auditoría básica sin hallazgos bloqueantes. |

## Verificación HTTP de producción

Realizada contra `https://instituto-tecnico-rivedu.vercel.app/`:

- Landing: `200`, `text/html`.
- Las 12 rutas de cursos: `200`, `text/html`.
- Slug inexistente: `404`.
- `sitemap.xml`: `200`, `application/xml`, exactamente 13 URLs: landing + 12 cursos.
- `robots.txt`: `200`, `text/plain`.
- `favicon.ico`: `200`, `image/vnd.microsoft.icon`.
- `logo-rivedu.png`: `200`, `image/png`.
- HTML con `lang="es"` y un H1 en la landing y en las fichas revisadas.
- Metadata de la landing y de Excel/Tercer Ciclo: title, description, canonical y Open Graph presentes.
- La producción no mostró una directiva `noindex`; el dominio Vercel estaba técnicamente indexable aunque el dominio definitivo no estuviera aprobado.

La producción inspeccionada todavía refleja el estado anterior a las correcciones locales porque no se hizo push ni despliegue.

## Verificación local

- `npm run lint`: aprobado.
- `npx tsc --noEmit`: aprobado.
- `npm run build`: aprobado; genera landing, 12 páginas, `robots.txt` y `sitemap.xml`.
- `npm audit --omit=dev`: 0 vulnerabilidades conocidas.
- Los cursos relacionados se limitan a tres y excluyen el curso actual.
- WhatsApp construye URLs `https://wa.me/{número}?text={encodeURIComponent(mensaje)}`.
- El correo usa `mailto:direccionrivedu@gmail.com`.
- `git diff --check`: sin errores de espacios.

## Configuración SEO pendiente de aprobación

Vista previa:

```text
NEXT_PUBLIC_SITE_URL=https://instituto-tecnico-rivedu.vercel.app
NEXT_PUBLIC_SITE_LAUNCHED=false
```

Lanzamiento, únicamente cuando el propietario confirme dominio y publicación:

```text
NEXT_PUBLIC_SITE_URL=https://rivedu.com
NEXT_PUBLIC_SITE_LAUNCHED=true
```

Pasos restantes:

1. Adquirir y conectar `rivedu.com` en el proveedor elegido.
2. Confirmar DNS, HTTPS y la variante canónica.
3. Configurar las variables de lanzamiento sin incluirlas en Git.
4. Desplegar la corrección aprobada.
5. Verificar nuevamente canonical, Open Graph, sitemap, robots, redirecciones y Search Console.

## Pendientes del propietario

- Validar nombre oficial, vigencia, temario, modalidad, duración, precios, horarios, fechas, requisitos, certificaciones y disponibilidad de cada curso.
- Confirmar que los números de WhatsApp y el correo siguen autorizados para publicación.
- Confirmar autorización de uso del logotipo y textos institucionales.
- Aprobar el dominio, la publicación y la política de indexación.
- Revisar visualmente landing, fichas, filtros, menú móvil, selector de WhatsApp y footer en los cinco anchos solicitados.

## Clasificación final

### Bloqueantes de publicación

- Ningún bloqueo de compilación, rutas o dependencias en local.
- El dominio definitivo no está operativo; no activar el estado de lanzamiento hasta resolverlo.
- Revisión visual e interactiva manual pendiente por falta de navegador controlable.

### Recomendados antes de publicar

- Desplegar y verificar la corrección SEO de vista previa/lanzamiento.
- Completar pruebas manuales responsive, teclado, foco, Escape y selector de WhatsApp.
- Validar toda la información comercial con el propietario.

### Mejoras futuras no necesarias para el lanzamiento

- Medición formal de Web Vitals con Lighthouse en el dominio definitivo.
- Auditoría de seguridad externa y monitorización de disponibilidad.
