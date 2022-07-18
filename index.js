// const imgs = document.getElementById('imgs')
// const leftBtn = document.getElementById('left')
// const rightBtn = document.getElementById('right')

// const img = document.querySelectorAll('#imgs .img-group')

// let idx = 0

// let interval = setInterval(run, 2000)

// function run() {
//   idx++
//   changeImage()
// }

// function changeImage() {
//   if (idx > img.length - 1) {
//     idx = 0
//   } else if (idx < 0) {
//     idx = img.length - 1
//   }
//   imgs.style.transform = `translateX(${-idx * 500}px)`
// }

// function resetInterval() {
//   clearInterval(interval)
//   interval = setInterval(run, 2000)
// }

// rightBtn.addEventListener('click', () => {

//   idx++
//   changeImage()
//   resetInterval()
// })

// leftBtn.addEventListener('click', () => {

//   idx--
//   changeImage()
//   resetInterval()
// })

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})