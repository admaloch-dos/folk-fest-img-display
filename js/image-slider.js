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

// populate carousel with images from img directory
const carouselInner = document.querySelector('.carousel-inner')
for (let i = 0; i < images.length - 1; i++) {
  let randIndex = genRandNum(images.length - 1)
  let randImage = images[randIndex]
  const newItem = document.createElement('div')
  newItem.id = randImage.id
  newItem.classList.add('carousel-item')
  newItem.innerHTML = `
    <div class="item-info">
      <h3 class="item-description">${randImage.description}</h3>
      <h4 class="item-year">Year: ${randImage.year}</h4>
    </div>
    <img src="img/${randImage.file}.JPG" class=" d-block mx-auto">
  `
  carouselInner.append(newItem)
}

const firstItem = document.querySelector('.carousel-item').classList.add('active')

$('.carousel').carousel({
  Keyboard: true,
  pause: 'hover'
 })