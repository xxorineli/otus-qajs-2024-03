function kolobok(character) {
  switch (character) {
    case 'Дедушка':
      return 'Я от дедушки ушел'
    case 'Заяц':
      return 'Я от зайца ушел'
    case 'Лиса':
      return 'Меня съели'
    default:
      return 'Я встретил кого-то неизвестного'
  }
}

console.log(kolobok('Дедушка'))
console.log(kolobok('Заяц'))
console.log(kolobok('Лиса'))

function newYear(character) {
  switch (character) {
    case 'Дед Мороз':
    case 'Снегурочка':
      return `${character}! ${character}! ${character}!`
    default:
      // return 'Неизвестный персонаж';
      throw new Error('Неизвестный персонаж')
  }
}

console.log(newYear('Дед Мороз'))
console.log(newYear('Снегурочка'))
