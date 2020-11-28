"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require('@babel/register')({
    presets: ['@babel/preset-env'],
});
// import 'module-alias/register';
const hello_1 = require("./hello");
console.log(hello_1.hello());
console.log(process.env.TEST);
// import { hello2 } from '@services';
