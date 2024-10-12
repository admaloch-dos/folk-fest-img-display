// let filteredVidArr = currVidArr.filter(vid => vid)
let filteredVidArr = shuffle(currVidArr.filter(vid => vid))

// console.log(filteredVidArr)
const addVideoItem = () => {
    // let myCarousel = document.querySelector('#carouselExampleControls')
    // let carousel = new bootstrap.Carousel(myCarousel, {
    //     interval: 6000,
    //     keyboard: true
    // })
    const slides = document.querySelectorAll('.carousel-item')
    const imgLength = slides.length
    const videoLength = filteredVidArr.length
    const startingVidItem = Math.ceil(imgLength / (videoLength + 2))
    let currVidIndex = startingVidItem
    for (let video of filteredVidArr) {
        if (video) {
            const newItem = document.createElement('div')
            newItem.classList.add('carousel-item', 'video-item', 'video-margin')

            newItem.innerHTML = `
        <video id="${video}" controls>
            <source src="video/${video}.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        `
            const targetSlide = slides[currVidIndex];
            targetSlide.parentNode.insertBefore(newItem, targetSlide.nextSibling);



            currVidIndex += startingVidItem
        }

    }




}
addVideoItem()


// $('video').on('play', function (e) {
//     $("#carouselExampleControls").carousel('pause');
// });
// $('video').on('stop pause ended', function (e) {
//     $("#carouselExampleControls").carousel();
// });