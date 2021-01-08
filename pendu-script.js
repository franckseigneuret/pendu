const propositionBlock = document.getElementById('proposition-block')
const propositionSend = document.getElementById('proposition-send')
const findBlock = document.getElementById('find-block')
const checkletter = document.getElementById('check-letter')
const show = document.getElementById('show')
const suggestionLetter = document.getElementById('suggestion-letter')
const alert = document.querySelector('.alert')

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

  for (let i = 0; i < wordArray.length; i++) {
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

  if (parseWordObj.success) {
    showMessage('success')
  }
})

parseWord = (letter) => {
  // console.log('letter recherchée = ', letter)
  let countLetterFind = 0

  wordArray.forEach((element, k) => {
    if (element === letter) {
      countLetterFind++
      partialWord = partialWord.substring(0, k) + letter + partialWord.substring(k + 1)
    }
  })
  console.log("partialWord.indexOf('_') = ", partialWord.indexOf('_'))
  let success = /\_/.test(partialWord) ? false : true // s'il n'y a plus d'underscore => success
  return { partialWord, countLetterFind, success }
}

const diminue = () => {
  countValue--
  compteur.textContent = countValue

  if (countValue === 0) {
    showMessage('fail')
  }
}

suggestionLetter.addEventListener('keyup', () => {
  alert.textContent = suggestionLetter.value.length > 1 ? '1 seule lettre' : ''
})

// message victoire / perdu
const showMessage = (type) => {
  findBlock.querySelectorAll('input').forEach((el) => {
    el.className = 'hidden'
  })
  const p = document.createElement('p')
  if(type === 'success') {
    p.className = 'victory'
    p.textContent = 'Victory'
  }
  if(type === 'fail') {
    p.className = 'fail'
    p.textContent = `Perdu, le mot était : "${word}"`
  }
  show.append(p)
}