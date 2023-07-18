// -------------gen default qr code----------------------------
// function to update qr code
function makeDefaultQr(id) {
  const defaultQrSize = qrsize - 35

  $("#qr-code").html("");
  var qrcode = new QRCode("qr-code", {
    text: `https://www.floridamemory.com/items/show/${id}`,
    width: defaultQrSize,
    height: defaultQrSize,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

const updateDefaultQr = (id) => {
  let qrTime = genQrSpeed()
  let mobileInfoLink = document.querySelector('#mobile-info-link')
  mobileInfoLink.href = `https://www.floridamemory.com/items/show/${id}`
  setTimeout(() => {
    makeDefaultQr(id);
  }, 1000);

}

// ------------------------Gen qr with image------------------------------------
function makeImgQr(value, imagePath) {
  var version = 10;
  const imgQrSize = qrsize
  new QArt({
    value: value,
    imagePath: imagePath,
    filter: 'color',
    version: version,
    size: imgQrSize,
    fillType: 'fill'
  }).make(document.getElementById('combine'));
}

const updateImgQr = (item) => {
  let qrTime = genQrSpeed()

  const id = item.id;
  const qrValue = `https://www.floridamemory.com/items/show/${id}`
  const qrImagePath = item.children[1].src;
  const mobileInfoLink = document.querySelector('#mobile-info-link')
  mobileInfoLink.href = qrValue
  setTimeout(() => {
    // makeQR(qrValue);
    makeImgQr(qrValue, qrImagePath)
  }, qrTime);

}


// function runs on carousel slide change to update qr code to new image
$('#carouselExampleControls').on('slide.bs.carousel', function onSlide(ev) {
  $(".qr-container").fadeOut(qrTime);
  if (!qrHasImage) {
    updateDefaultQr(ev.relatedTarget.id)
  } else {
    updateImgQr(ev.relatedTarget)
  }
  $(".qr-container").fadeIn(1000);
});


// default qr on load
const carouselItem = document.querySelector('.carousel-item')
makeDefaultQr(carouselItem.id)
// image qr on load
const initialItem = document.querySelector('.active')
updateImgQr(initialItem)















