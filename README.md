# Web Scraping with Puppeteer

## Setup

# Add node + typescript:
0. `mkdir puppeteer`
0. `cd puppeteer`
0. `yarn init -y`
0. `yarn add typescript @types/node -D`
0. `vim tsconfig.json`

Add the typescript config:
```json
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                    
    "lib": ["es6"],                     
    "allowJs": true,
    "outDir": "build",                          
    "rootDir": "src",
    "strict": true,         
    "noImplicitAny": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```
# Save the file and exit vim:
`:x`

# Create the src folder and index.ts
0. `mkdir src`
0. `vim index.ts`
0. `s` to insert
0. `console.log('hello world')`
0. `:x` to save and exit

# Add cold reloading for local development flow
0. `yarn add -D nodemon ts-node`
0. `vim nodemon.json`

Add nodemon config:
```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
```

# Add build script:
0. `yarn add -D rimraf`
0. `vim package.json`

Add the build and start scripts:
```json
{
  "build": "rimraf ./build && tsc",
  "start": "npm run build && node build/index.js"
}
```
# Add linter
0. `yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
0. `vim .eslintrc`

Enter the eslint config:
```json
{
  "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
  "parserOptions": {
    "ecmaVersion": 2020, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module", // Allows for the use of imports
    "ecmaFeatures": {
      "jsx": true // Allows for the parsing of JSX
    }
  },
  "settings": {
    "react": {
      "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  "extends": [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  "rules": {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": "off"
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
  }
}
```
# Igore folders we don't want to lint:
0. `vim .eslintignore`
0. `s` to insert

Enter the files to ignore:
```
node_modules
dist
```

# Add a script to lint files:
0. `"lint": "eslint . --ext .ts",`

# Add prettier to enforce code consistency:
0. `yarn add prettier eslint-config-prettier eslint-plugin-prettier`

Add prettier config:
```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

Add husky to lint prior to commits:
0. `yarn add -D husky lint-staged`

Add commands to package.json
```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": [
      "eslint --fix"
    ]
  },
  ```

Add babel to enable ESM support:
0. `yarn add -D @babel/core @babel/preset-env @babel/register`

Add babel setup to the top of src/index.ts
```javascript
  require('@babel/register')({
    presets: ['@babel/preset-env'],
  });
```

# Add aliasing to enable global namespacing:
0. `yarn add module-alias`

Import at top of src/index.ts
`import 'module-alias/register';`

Add to tsconfig.json:
```json
  "baseUrl": "./src",
  "paths": {
    "@services/*": ["services/*"]
  }
```

# Add a dot env file to save environment variables
0. `yarn add dotenv`
0.  `require('dotenv').config();`
0. `vim .env` and add `TEST="This is a test"`
0. Ignore `.env` in .gitignore

Start using environment variables:
`console.log(process.env.TEST);`
