function scrollButton() {
    if(window.scrollY === 0) {
        document.querySelector(".button__nav").style.display = "none"
    } else {
        document.querySelector(".button__nav").style.display = "flex"
    }
}
window.addEventListener("scroll", scrollButton)

function upScroll() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}