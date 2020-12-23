const dices = [
  ['dot1'],
  ['dot2', 'dot22'],
  ['dot1', 'dot2', 'dot22'],
  ['dot2', 'dot22', 'dot4', 'dot42'],
  ['dot1', 'dot2', 'dot22', 'dot4', 'dot42'],
  ['dot2', 'dot22', 'dot4', 'dot42', 'dot6', 'dot62'],
]

const title = document.querySelector('.title')
const dice = document.querySelector('.dice')
const diceChildrens = dice.querySelectorAll('div')

dice.addEventListener('click', (e) => {
  const target = e.target
  target.innerHTML = ''
  const currentNumber = Math.floor(Math.random() * 6)
  const diceClasses = dices[currentNumber]
  const html = diceClasses.map(currentClass => {
    return `<div class=${currentClass}></div>`
  }).join('')

  target.innerHTML = html

  target.style.transform = "scale(1.2)"

  title.innerHTML = `<p>You clicked. 
  Current number - ${currentNumber + 1} </p>
    <p>Click once more ...</p>`

})