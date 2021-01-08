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
let partialWord = ''

propositionSend.addEventListener('click', () => {
  propositionBlock.className = 'hidden'
  findBlock.className = ''
  word = document.getElementById('find-this-word').value
  wordArray = word.split('')

  for(let i = 0; i <wordArray.length; i++){
    partialWord += '_'
  }

  show.textContent = partialWord
})

checkletter.addEventListener('click', () => {
  propositionBlock.className = 'hidden'
  findBlock.className = ''
  const parseWordObj = parseWord(suggestionLetter.value)

  if (parseWordObj.countLetterFind > 0) {
    show.textContent = parseWordObj.partialWord
  } else {
    diminue()
  }
  suggestionLetter.value = ''
})

parseWord = (letter) => {
  console.log('letter recherchée = ', letter)
  let countLetterFind = 0

  wordArray.forEach((element, k) => {
    if (element === letter) {
      console.log(element)
      countLetterFind++
      
      partialWord = partialWord.substring(0, k) + letter + partialWord.substring(k+1)
    } 
  })
  return { partialWord, countLetterFind }
}

const diminue = () => {
  countValue--
  compteur.textContent = countValue
}