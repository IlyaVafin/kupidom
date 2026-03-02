const faqList = document.querySelector(".faq__list")
faqList.addEventListener("click", e => {
	const header = e.target.closest(".faq__list-item")
	if (!header) return
	const block = header.closest(".faq__block")
	faqList.querySelectorAll(".faq__block.active").forEach(el => {
		if (el !== block) {
			el.classList.remove("active")
		}
	})
	block.classList.toggle("active")
})
