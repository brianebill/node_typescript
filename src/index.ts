require('dotenv').config();
require('@babel/register')({
  presets: ['@babel/preset-env'],
});
// import 'module-alias/register';

import { hello } from './hello';
console.log(hello());
console.log(process.env.TEST);
// import { hello2 } from '@services';
