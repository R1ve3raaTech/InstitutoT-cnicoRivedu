# Instituto Técnico Rivedu — Prompt maestro para Codex
## Fase 8: auditoría de producción y corrección final

**Proyecto publicado:** https://instituto-tecnico-rivedu.vercel.app/  
**Dominio previsto (aún no adquirido ni conectado):** https://rivedu.com  
**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, App Router.

Actúa como ingeniero frontend senior, auditor de QA, accesibilidad, SEO técnico, seguridad y rendimiento. Trabaja sobre el repositorio existente, sin reconstruir el proyecto. La web contiene una landing, filtros, 12 páginas de cursos, enlaces contextuales de WhatsApp y contenido educativo general. Tu objetivo es **verificar antes de corregir**, resolver defectos reproducibles y documentar los puntos que necesitan aprobación del propietario. No hagas commit, push, despliegue, compras ni cambios de DNS.

### 1. Método y alcance

1. Inspecciona `git status`, rama, último commit, remote, dependencias y configuración de Next.js/Vercel. No sobrescribas cambios locales ni modifiques la identidad de Git.
2. Compara el código local con el sitio publicado solo si puedes verificar la versión desplegada; si no, declara la limitación.
3. Clasifica cada hallazgo como **confirmado**, **descartado**, **no verificable** o **pendiente del propietario**. Para cada problema confirmado, conserva evidencia (URL, archivo, pasos, resultado esperado y real).
4. Prioriza P0 (contactos rotos, secretos, información materialmente engañosa, fallos de rutas/indexación), P1 (accesibilidad, responsive, UX y contenido), P2 (cosmética). No hagas cambios por intuición.
5. No instales herramientas voluminosas solo para esta auditoría ni afirmes haber probado visualmente algo que no pudiste probar.

### 2. SEO y dominio provisional — prioridad alta

Comprueba en la **versión publicada**, no solo en el código:
- `metadataBase`, `<title>`, description, canonical, Open Graph URL, robots y sitemap.
- `https://instituto-tecnico-rivedu.vercel.app/sitemap.xml` y `/robots.txt`: estado HTTP, Content-Type y contenido. El sitemap debe enumerar exactamente la landing y las 12 rutas existentes, sin URLs 404 ni fechas `lastmod` inventadas.
- Si las canonical o el sitemap ya apuntan a `rivedu.com` pese a no estar operativo. No presupongas que ocurre: compruébalo.
- Si la vista previa está indexable sin aprobación; propone una estrategia de *noindex temporal* explícita y reversible si corresponde. `robots.txt` no sustituye `noindex`; evita bloquear el rastreo necesario para leer esa directiva.
- Diseña dos estados documentados: **vista previa** (dominio Vercel antes de aprobación) y **lanzamiento** (`rivedu.com` adquirido, conectado y funcional). Centraliza la URL de producción y define las condiciones para activar canonical, sitemap, redirecciones y robots definitivos. No redirijas ahora a un dominio no operativo ni alteres DNS.
- Revisa unicidad de metadata de los 12 cursos, idioma `es`, H1 único, nombres de rutas y 404 para slugs inexistentes. No introduzcas ratings, precios, certificaciones ni datos estructurados ficticios.

### 3. Recorrido funcional completo

Prueba, con navegador real si está disponible, estos recorridos:
- Landing → «Explorar cursos» → filtro → «Ver detalles» → ficha → «Volver a los cursos».
- Desde una ficha, enlaces Inicio, Cursos, Nosotros y Contacto → anclas correctas en `/`, sin títulos cubiertos por el navbar sticky.
- Los cuatro cursos destacados del hero → fichas correctas.
- Menú móvil: abrir, cerrar, navegar, manejo de foco y Escape donde corresponda.
- Filtros: conteos, estado activo, accesibilidad por teclado, desplazamiento horizontal solo dentro de chips en móvil y ausencia de categorías visualmente deshabilitadas por error.
- Cursos relacionados: máximo tres, sin curso actual, enlaces correctos.
- WhatsApp: ambos números `50660118430` y `50672634928`, URL `wa.me`, `encodeURIComponent`, nombre correcto del curso, selector con apertura/cierre/foco accesibles, sin enviar ni abrir conversaciones automáticamente. **No afirmes que un mensaje se envió** si solo probaste el enlace.
- Correo `direccionrivedu@gmail.com`: `mailto:` válido; enlaces externos con atributos apropiados.
- Comprueba que «Inscríbase» no induzca a creer que existe una matrícula automática: en esta web se consulta por WhatsApp.

### 4. Auditoría página por página

Visita y verifica las doce rutas:

1. `/cursos/excel-desde-cero`
2. `/cursos/microsoft-office`
3. `/cursos/manipulacion-de-alimentos`
4. `/cursos/servicio-al-cliente`
5. `/cursos/ingles-conversacional`
6. `/cursos/portugues`
7. `/cursos/secretariado-ejecutivo`
8. `/cursos/contabilidad`
9. `/cursos/ccna`
10. `/cursos/bachillerato-por-madurez`
11. `/cursos/tercer-ciclo`
12. `/cursos/desechos-hospitalarios`

Para cada una revisa: HTTP, título, categoría, descripción, contenido educativo general, listas, público potencial, metadata, H1, CTA y mensaje contextual, navegación, relacionados y diseño adaptable. Evita contenido cruzado o duplicado accidental.

**Hallazgos a comprobar, no a asumir:**
- En Tercer Ciclo se observó una introducción tipo «Un programa anunciado dentro del área de educación secundaria». Si sigue presente, sustitúyela por texto natural y preciso sobre la etapa educativa, sin inventar la oferta específica de Rivedu.
- El hero y algunas tarjetas usan descripciones demasiado generales. Mejora concisión y especificidad usando únicamente conocimiento educativo general fiable y lo ya confirmado; no inventes temarios.
- La etiqueta «Tecnología y ofimática» agrupa CCNA con Excel y Office: valora si «Tecnología» comunica mejor la categoría. Si se modifica, actualiza de forma consistente datos, filtros, conteos, rutas y relacionados, sin cambiar slugs.
- En CCNA, diferencia fundamentos de redes de una certificación oficial de Cisco; no atribuyas acreditación, laboratorios, examen incluido ni título.
- En Bachillerato por Madurez y Tercer Ciclo, distingue preparación académica de procesos oficiales de evaluación y titulación: no prometas título, aprobación o plazos.
- Manipulación de Alimentos y Desechos Hospitalarios: no atribuyas avales, permisos, cumplimiento legal ni procedimientos técnicos específicos sin evidencia.
- Contabilidad: no conviertas menciones históricas de TribuCR o IVA en temario vigente verificado.
- El contenido de las fichas es principalmente educativo general. No lo presentes como «Lo que aprenderá en este curso» ni como temario oficial sin aprobación.

### 5. Información pendiente y validación del propietario

Conserva o actualiza `docs/course-information-pending.md`. Para cada curso indica qué falta validar: vigencia de oferta, nombre oficial, temario, modalidad, duración, precio, horarios, fecha de inicio, requisitos, certificación y disponibilidad. Pide validar también números, correo, autorización de uso del logo y textos. No publiques promociones antiguas ni datos fiscales/societarios privados. La carencia de información comercial no se resuelve inventando textos ni precios.

### 6. Responsive, accesibilidad y presentación

Si tienes navegador, inspecciona 375, 390, 768, 1024 y 1440 px; prueba al menos landing, filtros, ficha de Excel, Bachillerato, Manipulación de Alimentos, selector WhatsApp y footer. Revisa:
- Menú móvil, botones, tamaño táctil, contraste, foco y orden de teclado.
- Títulos largos, listas, CTA, tarjetas relacionadas y modales sin recorte o overflow horizontal.
- Hero sin espacio excesivo; tarjetas móviles legibles; chips desplazables en su contenedor sin scroll global.
- H1 único, encabezados semánticos, breadcrumbs accesibles, alt del logo y `prefers-reduced-motion`.
- Separadores duplicados, textos internos de desarrollo, huecos artificiales y pie excesivamente espaciado.

Corrige causas concretas; no tapes defectos con `overflow-x:hidden` global. Si no hay navegador, marca la revisión visual como **pendiente**: inspeccionar CSS no es una prueba visual.

### 7. Rendimiento y seguridad

Cuando sea posible, mide LCP, CLS, INP y peso de recursos con Lighthouse o equivalente; no inventes cifras ni puntuaciones. Revisa uso de Server/Client Components, imágenes y `next/image`, fuentes, JavaScript, CSS y generación estática. Corrige solo problemas demostrados. Mantén `public/logo-rivedu.png`; no uses favicon como imagen visible ni SVG defectuoso.

Audita `.gitignore`, `.env`, secretos en código/bundle/historial accesible, variables públicas, dependencias, enlaces externos, `dangerouslySetInnerHTML` y cabeceras HTTP. Ejecuta `npm audit --omit=dev`; cero alertas conocidas **no equivale** a seguridad total. No impongas CSP sin comprobar que no rompe el sitio.

### 8. Verificaciones obligatorias

Ejecuta y registra resultados reales:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm audit --omit=dev
```

Comprueba landing `200`, las doce fichas `200`, ruta inexistente `404`, `/sitemap.xml`, `/robots.txt`, favicon, PNG del logo, metadata por ruta, links, filtros, cursos relacionados y números de WhatsApp. Distingue pruebas locales de pruebas de producción. Si alguna herramienta falla por permisos, red o falta de navegador, informa el bloqueo sin simular éxito.

### 9. Entrega y límites

Crea o actualiza `docs/production-audit.md` con tabla de hallazgos: severidad P0/P1/P2, página/archivo, evidencia, estado (confirmado/descartado/no verificado/pendiente del propietario), corrección, pruebas y resultado. Adjunta lista de archivos modificados, diferencias entre local y producción que hayas podido demostrar, problemas pendientes y pasos concretos para aprobar la web y conectar `rivedu.com` más adelante.

**Restricciones:** no reconstruir landing; no cambiar stack, logo ni paleta; no LMS, pagos, auth, bases de datos o panel; no inventar contenido oficial, precios, avales, testimonios ni resultados; no instalar dependencias injustificadas; no modificar DNS, comprar dominio, enviar WhatsApps, hacer commit, push ni desplegar. Si aparece un bloqueo de seguridad crítico, documenta y detén acciones riesgosas. Termina con un resumen ejecutivo corto y espera autorización.
