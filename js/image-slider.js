// carousel controls
let myCarousel = document.querySelector('#carouselExampleControls')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 6000,
  keyboard: true
})

// function to generate random number that doesn't repeat
let nums = [];
const genRandNum = (max) => {
  let rand = (Math.random() * max).toFixed();
  rand = Number(rand);
  if (!nums.includes(rand)) {
    nums.push(rand);
    return rand;
  } else {
    if (nums.length < max) {
      return genRandNum(max);
    } else {
      return false;
    }
  }
}

const getRandImage = () => {
  let randIndex = genRandNum(images.length - 1)
  let randImage = images[randIndex]
  return randImage
}

const yearOrDate = (currentDate) => {
  const month = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
  let currDate = currentDate + ""
  let yearOrDate = 'Year'
  for (let i = 0; i <= month.length; i++) {
      if (currDate.includes(month[i])) {
          yearOrDate = 'Date'
      }
  }
  return yearOrDate
}

// ${randImage.year && `<h4 class="item-year">Year: ${randImage.year}</h4>` }
const createCarouselItem = (randImage) => {
  const doesContainYear = /\d{4}/.test(randImage.description);
  if (doesContainYear && typeof randImage.year === 'number') {
    randImage.year = ""
  }
  const dateOrYear = yearOrDate(randImage.year)
  const newItem = document.createElement('div')
  newItem.id = randImage.id
  newItem.classList.add('carousel-item')
  newItem.innerHTML = `
    <div class="item-info">
      <h3>${randImage.description}</h3>

      ${randImage.year ? `<h4 class="item-year">${dateOrYear}: ${randImage.year}</h4>` : `<div class = "space-div"></div>`}


    </div>
    <img src="img/${randImage.file}.JPG" class="slider-img d-block mx-auto">
  `
  const itemYear = document.querySelector('.item-year')

  return newItem
}

// populate carousel with images from img directory
const carouselInner = document.querySelector('.carousel-inner')
for (let i = 0; i < images.length - 1; i++) {
  let randImage = getRandImage()
  const newItem = createCarouselItem(randImage)
  carouselInner.append(newItem)
}

const firstItem = document.querySelector('.carousel-item').classList.add('active')








