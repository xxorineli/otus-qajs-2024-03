// function greet(name) {
//     return `Hello, ${name}!`
// }
//
// // Стрелочная функция
// const farewell = name => {
//     return `Goodbye, ${name}!`
// }
//
// console.log(greet('World'))
// console.log(farewell('World'))

// import { greet, farewell } from './modules.js'
const { greet, farewell } = require('./modules.js')
console.log(greet('World'))
console.log(farewell('World'))
