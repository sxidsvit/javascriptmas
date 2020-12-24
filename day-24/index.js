const spinningElem = document.getElementById('spinning');
const result = document.getElementById('result');

let pushed = false  //stop button
let targetInt = 0 //target number 
let counter = 0  // counter

//  Start functionality

const setTargetInt = () => {
  const targetElem = document.getElementById('targetNum');
  targetInt = Math.floor(Math.random() * 101)
  targetElem.textContent = targetInt;
}

const spin = async () => {
  counter = 0;
  spinningElem.textContent = counter;

  while (pushed === false && counter < 100) {
    await sleep(100);
    counter++;
    spinningElem.textContent = counter;
  }
  stop(counter);
}

const start = () => {
  setTargetInt();
  spin();
}

//  Stop & sleep functionality

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function stop(i) {
  if (i != targetInt) {
    result.textContent = `Sorry, but you missed ${Math.abs(targetInt - i)} numbers  😪 ! Try again! 😃 `;
  } else {
    result.textContent = '🔥 You are winner! 🔥';
  }
}

//Event listeners & hendlers

const buttonPressedHendler = () => pushed = true
document.getElementById("buttonPressed").addEventListener("click", buttonPressedHendler);

const resetGameHandler = () => location.reload()
document.getElementById('reset').addEventListener("click", resetGameHandler);

// Initialisation

start();