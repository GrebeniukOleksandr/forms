formFixed.style.right = window.innerWidth - wrapper.getBoundingClientRect().right + "px"

let clikClose = document.getElementById("close")
    flexClose = document.getElementById("formFixed")
clikClose.addEventListener('click' , function() {
     flexClose.style.display = 'none';
})
