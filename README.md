# API / ARC components ESLint configuration

Use [ESLint](https://eslint.org/) to lint your es6 code. This module contains default configuration for API/ARC components linters.

## Usage

```sh
$ npm i --save-dev @advanced-rest-client/eslint-config
```

-   Copy [.eslintignore](./templates/.eslintignore) to `.eslintignore`
-   Copy [.eslintrc.js](./templates/.eslintrc.js) to `.eslintrc.js`

Add these scripts to your package.json

```js
"scripts": {
  "lint:eslint": "eslint --ext .js,.html .",
  "format:eslint": "eslint --ext .js,.html . --fix"
},
```

## Run:
-   `npm run lint:eslint` to check if any file is not correctly formatted
-   `npm run format:eslint` to auto format your files
