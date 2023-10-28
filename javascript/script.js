formFixed.style.right = window.innerWidth - wrapper.getBoundingClientRect().right + "px"

let clikClose = document.getElementById("close");
 flexClose = document.getElementById("formFixed");
 clikOpen = document.getElementById("open-block");

function toggleDisplay() {
    if (flexClose.style.display === 'none') {
        flexClose.style.display = 'block';
        clikOpen.style.display = 'none';
    } else {
        flexClose.style.display = 'none';
        clikOpen.style.display = 'block';
    }
}

clikClose.addEventListener('click', toggleDisplay);
clikOpen.addEventListener('click', toggleDisplay);