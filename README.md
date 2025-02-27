# UXUI Fans Kit

Una librería de componentes UI para React creada por UXUI Fans.

## Instalación

```bash
npm install uxuifanskit
# o
yarn add uxuifanskit
```

## Uso básico

1. Importa el CSS global en tu archivo principal (por ejemplo, en `App.js` o `index.js`):

```jsx
import 'uxuifanskit/dist/globals.css';
```

2. Importa y usa los componentes:

```jsx
import { Button } from 'uxuifanskit';

function App() {
	return (
		<div className='app'>
			<Button>Haz clic aquí</Button>
		</div>
	);
}
```

## Personalización de colores

Esta librería utiliza variables CSS para los colores, lo que te permite personalizarlos en tu proyecto.

Puedes sobrescribir estas variables en tu archivo CSS principal:

```css
:root {
	--background: #e9ecef; /* Cambia esto por tu color deseado */
	--surface: #f8f9fa;
	--input: #dee2e6;
	--border: #bcc4cd;
	--placeholder: #adb5bd;
	--body: #495057;
	--title: #212529;
	--foreground: #212529;
	--accent: #000;
}

/* También puedes personalizar el tema oscuro */
@media (prefers-color-scheme: dark) {
	:root {
		--background: #212529;
		--surface: #343a40;
		/* ... otras variables ... */
	}
}
```

## Configuración de Tailwind

Si estás usando Tailwind en tu proyecto, puedes extender la configuración para incluir las variables CSS de UXUI Fans Kit:

```js
// tailwind.config.js
module.exports = {
	// ... tu configuración existente
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				surface: 'var(--surface)',
				input: 'var(--input)',
				border: 'var(--border)',
				placeholder: 'var(--placeholder)',
				body: 'var(--body)',
				title: 'var(--title)',
				foreground: 'var(--foreground)',
				accent: 'var(--accent)',
			},
		},
	},
};
```
