// Пример декоратора
function logger(fn, name = 'анонимная') {
  return function (...params) {
    console.log(`start call ${name}`)
    const response = fn(...params)
    console.log(`finish call ${name}`)
    return response
  }
}

const sum = (a, b) => {
  return a + b
}

const sumLogger = logger(sum, 'сумма двух чисел')

console.log(sumLogger(2, 3))
