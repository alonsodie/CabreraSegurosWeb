# Cabrera Seguros — Sitio web

Sitio estático responsive en HTML, CSS y JavaScript. No requiere instalación, compilación ni servicios pagos.

## Publicar en GitHub Pages

1. Ingresar a GitHub con la cuenta `alonsodie` y crear un repositorio público, por ejemplo `cabrera-seguros`.
2. Subir **el contenido de esta carpeta** a la raíz del repositorio (index.html, styles.css, script.js y assets/). No subir solamente el ZIP.
3. Ir a **Settings → Pages → Build and deployment**.
4. Elegir **Deploy from a branch**, rama `main`, carpeta `/(root)`, y guardar.
5. La dirección habitual será `https://alonsodie.github.io/cabrera-seguros/` cuando GitHub complete el despliegue.

## Antes de publicar

- Abrir `script.js` y completar `WHATSAPP_NUMBER` con el número comercial de Cabrera Seguros, formato internacional sin `+` (por ejemplo `59899123456`). Mientras esté vacío, el formulario **no envía mensajes**: solamente los copia.
- Revisar la lista de coberturas y confirmar que realmente se ofrecen todos los rubros anunciados.
- Confirmar si corresponde comunicar exactamente 40 años o «más de 40 años». El texto principal usa 40 años; la portada visual usa 40+.
- Agregar email, redes sociales, dirección o información legal/comercial si se desea.
- Verificar con las aseguradoras los textos y autorizaciones comerciales aplicables.

## Archivos

- `index.html`: contenido y secciones.
- `styles.css`: diseño adaptable.
- `script.js`: menú y formulario de consulta.
- `assets/logo.svg`: logo vectorial principal.
- `assets/logo-light.svg`: logo para fondo oscuro.
- `assets/favicon.svg`: ícono de pestaña.

Los recursos tipográficos se cargan desde Google Fonts; con bloqueo de red se utilizan fuentes alternativas del sistema.
