// function to update qr code
function updateQRCode(id) {
    $("#qrcode").html("");
    var qrcode = new QRCode("qrcode", {
      text: `https://www.floridamemory.com/items/show/${id}`,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  // function runs on carousel slide change to update qr code to new image
  $('#carouselExampleControls').on('slide.bs.carousel', function onSlide(ev) {
    var id = ev.relatedTarget.id;
    urlId = id
    setTimeout(() => {
      updateQRCode(id);
    }, 1000);
  });

  // set qr code on page load for initial image
  const carouselItem = document.querySelector('.carousel-item')
  updateQRCode(carouselItem.id)