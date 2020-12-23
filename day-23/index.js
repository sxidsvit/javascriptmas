//  Element for interections
const input = document.getElementById('string')
const counterFooter = document.getElementById('counterFooter')
const btn = document.getElementById('btn')

// Constants
const charactersLimit = 140
const warningLimit = 20
counterFooter.innerText = `0\/${charactersLimit}`

// Input handler
const inputHandler = () => {
  const textLength = input.value.length
  counterFooter.innerText = `${textLength}\/${charactersLimit}`

  textLength + warningLimit > charactersLimit
    ? counterFooter.classList.add("red")
    : counterFooter.classList.remove("red")

  textLength > charactersLimit
    ? btn.setAttribute("disabled", true)
    : btn.removeAttribute("disabled")
}

const btnHandler = () => {
  const reference = `http://twitter.com/intent/tweet?text=${input.value}`
  window.location.href = reference
}

// Event listeners
input.addEventListener('input', inputHandler)
btn.addEventListener('click', btnHandler)

/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
