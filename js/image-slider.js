




const testYearOrDate = (currentDate) => {
  const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  let currDate = currentDate + ""
  let yearOrDate = 'Year'
  // console.log(currDate)
  for (let i = 0; i <= month.length; i++) {
    if (currDate.includes(month[i])) {
      yearOrDate = 'Date'
    }
  }
  return yearOrDate
}

const formatDate = (inputDate) => {
  const dateObj = new Date(inputDate);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  return formattedDate;
}

const createCarouselItem = (image) => {
  const doesContainYear = /\d{4}/.test(image.description);
  if (doesContainYear && typeof image.year === 'number') {
    image.year = ""
  }
  const dateOrYear = testYearOrDate(image.year)
  const formattedYear = dateOrYear === 'Date' ? formatDate(image.year) : image.year
  const newItem = document.createElement('div')
  newItem.id = image.file
  newItem.classList.add('carousel-item')
  newItem.innerHTML = `
    <div class="item-info">
      <h3>${image.description}</h3>
      ${formattedYear ? `<h4 class="item-year">${dateOrYear}: ${formattedYear}</h4>` : `<div class = "space-div"></div>`}
    </div>
    <img src="img/${image.file}.JPG" class="slider-img d-block mx-auto">
  `
  return newItem
}




const addSliderItems = () => {
  let failedImgArr = []
  if (filteredImgArr.length < 2 || typeof filteredImgArr === 'undefined') {
    //check to see if there are images
    const myModal = new bootstrap.Modal(document.getElementById('imageErrorModal'));
    myModal.show();
  } else {
    // populate carousel with images from img directory
    let shuffledImages = shuffle(filteredImgArr)

    for (let image of shuffledImages) {
      const upperCaseImg = image.toUpperCase()
      const lowerCaseImg = image.toLowerCase()
      if (image) {
        if (allFolkImgData[upperCaseImg] !== undefined) {
          newItem = createCarouselItem(allFolkImgData[upperCaseImg])
          document.querySelector('.carousel-inner').append(newItem)

        } else if (allFolkImgData[lowerCaseImg]) {
          newItem = createCarouselItem(allFolkImgData[lowerCaseImg])
          document.querySelector('.carousel-inner').append(newItem)

        } else {
          failedImgArr.push(image)


        }
      }
    }
    document.querySelector('.carousel-item').classList.add('active')
  }
  const carouselItems = document.querySelectorAll('.carousel-item')


}
addSliderItems()





// issues Bill Monroe performing at the Florida Folk Festival - White Springs, Florida .



