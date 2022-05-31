# daily-weather

Vue 3 + Vite frontend to display daily weather and 10 day forecast data using Daily Weather FastAPI backend (uses Tomorrow.io).
The Weather code icons are from https://github.com/Tomorrow-IO-API/tomorrow-weather-codes.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Dev Proxy Setup for CORS

under vite.config.js,
```
/api points to http://localhost:8080
```
