require('dotenv').config();
require('@babel/register')({
  presets: ['@babel/preset-env'],
});
import 'module-alias/register';
import { hello } from './hello';
import { hello2 } from 'services';

console.log(process.env.TEST);
hello();
hello2();
