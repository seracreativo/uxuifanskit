# UXUI Fans Kit

Una librería de componentes UI para React Native creada por UXUI Fans.

## Instalación

```bash
npm install uxuifanskit
```

### Dependencias requeridas

Asegúrate de tener estas dependencias en tu proyecto de React Native:

```bash
npm install react-native-safe-area-context react-icons nativewind
```

## Configuración

### 1. Configura NativeWind en tu proyecto

En tu `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

### 2. Configura Babel

En tu `babel.config.js`:

```javascript
module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: ['nativewind/babel'],
};
```

### 3. Configura Metro

En tu `metro.config.js`:

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
```

## Uso

```jsx
import React from 'react';
import { View } from 'react-native';
import { Button, Form, Section, Spacer } from 'uxuifanskit';

export default function App() {
	return (
		<Form>
			<Section title='Mi App'>
				<Button onPress={() => console.log('Presionado!')}>Mi Botón</Button>
				<Spacer height={20} />
			</Section>
		</Form>
	);
}
```

## Componentes Disponibles

### Básicos

- `Button` - Botón con estilos personalizables
- `Spacer` - Espaciador con altura y ancho configurables

### UI

- `Form` - Contenedor principal con scroll y refresh
- `Section` - Sección con título y contenido
- `Label` - Etiqueta de texto
- `InputLabel` - Etiqueta para inputs
- `Note` - Nota o descripción
- `Footer` - Pie de página

### Secciones

- `Featured` - Sección destacada
- `FooterSection` - Sección de pie de página
  --accent: #000;
  }

/_ También puedes personalizar el tema oscuro _/
@media (prefers-color-scheme: dark) {
:root {
--background: #212529;
--surface: #343a40;
/_ ... otras variables ... _/
}
}

````

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
````
