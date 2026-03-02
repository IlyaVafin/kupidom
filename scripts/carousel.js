const carousel = document.querySelector(".promo__content")
const list = carousel.querySelector(".promo__carousel")
const listElems = carousel.querySelectorAll(".promo__card")
const prevButton = document.querySelector(".promo__carousel-button_prev")
const nextButton = document.querySelector(".promo__carousel-button_next")

let position = 0
const WIDTH = 660
const COUNT = 2

prevButton.onclick = function () {
	position += WIDTH * COUNT
	position = Math.min(position, 0)
	list.style.transform = `translateX(${position + "px"})`
}

nextButton.onclick = function () {
	position -= WIDTH * COUNT
	position = Math.max(position, -WIDTH * (listElems.length - COUNT))
    console.log(position)
	list.style.transform = `translateX(${position + "px"})`
}
