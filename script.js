const propositionBlock = document.getElementById('proposition-block')
const propositionSend = document.getElementById('proposition-send')
const findBlock = document.getElementById('find-block')

propositionSend.addEventListener('click', () => {
  propositionBlock.className = 'hidden'
  findBlock.className = ''
})