// When the toggle button is clicked, enter/exit fullscreen
document.getElementById("full-screen").addEventListener("click", () => {

    const footer = document.querySelector(".footer-content");
    if (window.innerWidth > 1200) {
        footer.classList.remove('d-none')
    } else {
        footer.classList.add('d-none')
    }

    const fullScreenElement = document.getElementById("main-container");
    console.log(fullScreenElement)
    if (document.fullscreenElement) {
        // exitFullscreen is only available on the Document object.
        document.exitFullscreen();
    } else {
        fullScreenElement.requestFullscreen();
    }
    carousel.next()
    carousel.cycle()
});





