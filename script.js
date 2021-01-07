const propositionBlock = document.getElementById('proposition-block')
const propositionSend = document.getElementById('proposition-send')
const findBlock = document.getElementById('find-block')
const checkletter = document.getElementById('check-letter')
const show = document.getElementById('show')
const suggestionLetter = document.getElementById('suggestion-letter')

const compteur = document.getElementById('count')
let countValue = parseInt(compteur.textContent)

let word = ''
let wordArray = []

propositionSend.addEventListener('click', () => {
  propositionBlock.className = 'hidden'
  findBlock.className = ''
  word = document.getElementById('find-this-word').value
  wordArray = word.split('')
})

checkletter.addEventListener('click', () => {
  const letter = suggestionLetter.value
  propositionBlock.className = 'hidden'
  findBlock.className = ''
  let positionsLetter = parseWord(letter)
  console.log(wordArray.indexOf(letter))

  console.log(positionsLetter)
  if(positionsLetter.countLetterFind > 0) {
    show.textContent = positionsLetter.halfWord
  } else {
    diminue()
  }
  suggestionLetter.value = ''
})

parseWord = (letter) => {
  let positionsLetter = []
  console.log('letter', letter)
  let halfWord = ''
  let countLetterFind = 0

  wordArray.forEach((element, k) => {
    if (element === letter) {
      countLetterFind++
      positionsLetter.push(k)
      halfWord += ' ' + letter
    } else {
      halfWord += ' _'
    }
  })
  console.log(positionsLetter)
  return { halfWord, countLetterFind }
}

const diminue = () => {
  countValue--
  compteur.textContent = countValue
}