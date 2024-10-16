const showFullScreen = () => {
    const footer = document.querySelector(".footer-content");
  
    const fullScreenElement = document.getElementById("main-container");
    // console.log(fullScreenElement)
    if (document.fullscreenElement) {
        // exitFullscreen is only available on the Document object.
        document.exitFullscreen();
    } else {
        fullScreenElement.requestFullscreen();
    }
    carousel.next()
    carousel.cycle()
}

// When the toggle button is clicked, enter/exit fullscreen
document.getElementById("full-screen").addEventListener("click", () => {
    showFullScreen()
});


// if (filteredImgArr.length > 2 && typeof filteredImgArr !== 'undefined') {
//     setTimeout(() => {
//         showFullScreen()
//     }, 500);
// }

