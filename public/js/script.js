const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
const overlay = document.getElementsByClassName('overlay')[0]

hamburgerMenu.addEventListener('click', function() {
    overlay.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
})