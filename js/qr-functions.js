// -------------gen default qr code----------------------------
// function to update qr code



function makeDefaultQr(fileId) {
  const currItem = allFolkImgData[fileId]
  // console.log(currItem)
  const defaultQrSize = qrsize
  $("#qr-code").html("");
  var qrcode = new QRCode("qr-code", {
    text: `https://www.floridamemory.com/items/show/${currItem.id}`,
    width: defaultQrSize,
    height: defaultQrSize,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

}

const updateDefaultQr = (item) => {
  const currItem = allFolkImgData[item.id]
  // console.log(currItem)

  let qrTime = genQrSpeed()
  let mobileInfoLink = document.querySelector('#mobile-info-link')
  mobileInfoLink.href = `https://www.floridamemory.com/items/show/${currItem.id}`
  setTimeout(() => {
    makeDefaultQr(currItem.file);
  }, qrTime);

}

// ------------------------Gen qr with image------------------------------------
function makeImgQr(value, imagePath) {
  var version = 10;
  const imgQrSize = parseInt(qrsize);
  new QArt({
    value: value,
    willReadFrequently: true,
    imagePath: imagePath,
    filter: 'color',
    version: version,
    size: 250,
    fillType: 'fill'
  }).make(document.getElementById('combine'));

}



const updateImgQr = (item) => {

  const currItem = allFolkImgData[item]

  const currImg = currItem.file
  const imgLocation = `img/${currImg}.JPG`
  let qrTime = genQrSpeed()
  const id = currItem.id;
  const qrValue = `https://www.floridamemory.com/items/show/${id}`
  // const qrImagePath = item.children[1].src;
  const mobileInfoLink = document.querySelector('#mobile-info-link')
  mobileInfoLink.href = qrValue
  setTimeout(() => {
    // makeQR(qrValue);
    makeImgQr(qrValue, imgLocation)
  }, qrTime);

}

let wasPlaying = false;

const resumeSongAfterVid = () => {
  if (wasPlaying) {
    wasPlaying = false
    playSong()
  }
}

const resetVideo = (item, time) => {
  if (item.classList.contains('video-item')) {
    setTimeout(() => {
      item.children[0].load()
      resumeSongAfterVid()
    }, time);
  }
}




$('#carouselExampleControls').on('slide.bs.carousel', function onSlide(ev) {
  const musicPlayer = document.querySelector('#music-container')
  const options = carousel._config
  if (ev.relatedTarget.children[0].nodeName === 'VIDEO') {
    console.log('this is a video')
    musicPlayer.classList.add('disable')
    document.querySelector('#qr-container').style.opacity = '0'
    document.querySelector('#music-container').style.opacity = '0'


    const currVid = ev.relatedTarget.querySelector('video');
    const vidDuration = currVid.duration * 1000
    options.interval = vidDuration
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
      wasPlaying = true
      pauseSong();
    }
    currVid.currentTime = 0;
    currVid.play();
    $(currVid).on('stop ended', function (e) {
      carousel.next()
      setTimeout(() => {
        currVid.load();
        resumeSongAfterVid()
      }, 2000);
    });
  } else {

    document.querySelector('#qr-container').style.opacity = '1'
    document.querySelector('#music-container').style.opacity = '1'


    musicPlayer.classList.remove('disable')
    const currIndex = ev.to;
    const nextIndex = (currIndex + 1) % carousel._items.length;
    const prevIndex = (currIndex - 1 + carousel._items.length) % carousel._items.length;
    const nextItem = carousel._items[nextIndex];
    const prevItem = carousel._items[prevIndex];

    resetVideo(nextItem, 1000)
    resetVideo(prevItem, 1000)
    options.interval = carouselSpeed
    if (qrGenIsActive) {
      $(".qr-container").fadeOut(qrTime);
      if (!qrHasImage) {
        updateDefaultQr(ev.relatedTarget)
      } else {
        updateImgQr(ev.relatedTarget.id)
      }
      $(".qr-container").fadeIn(1000);
    }
  }
});

if (filteredImgArr.length > 1 && typeof filteredImgArr !== 'undefined') {
  // default qr on load
  const carouselItem = document.querySelector('.carousel-item')
  makeDefaultQr(carouselItem.id)
  // image qr on load
  const initialItem = document.querySelector('.active')
  updateImgQr(carouselItem.id)
}















