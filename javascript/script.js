formFixed.style.right = window.innerWidth - wrapper.getBoundingClientRect().right + "px"

let clikClose = document.getElementById("close")
flexClose = document.getElementById("formFixed")
clikOpen = document.getElementById("open-block")
clikClose.addEventListener('click', function () {
    flexClose.style.display = 'none'
    clikOpen.style.display = 'block'
})
clikOpen.addEventListener('click', function () {
    clikOpen.style.display = 'none'
    flexClose.style.display = 'block'
})