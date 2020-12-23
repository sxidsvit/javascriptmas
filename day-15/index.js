const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
const gallery = document.querySelector('.gallery')

const STEP = 220
const SLIDESNUMBER = 5

let currentSlideNum = 0

previous.addEventListener('click', () => {
  if (currentSlideNum <= 0) {
    return
  } else {
    currentSlideNum--
    gallery.style.transform = `translateX(${-STEP * currentSlideNum}px)`
    next.style.opacity = 1
    currentSlideNum === 0 ? previous.style.opacity = 0.3 : ''
  }
})

next.addEventListener('click', () => {
  if (currentSlideNum >= SLIDESNUMBER - 1) {
    return
  } else {
    currentSlideNum++
    gallery.style.transform = `translateX(${-STEP * currentSlideNum}px)`
    previous.style.opacity = 1
    currentSlideNum === SLIDESNUMBER - 1 ? next.style.opacity = 0.3 : ''
  }
})