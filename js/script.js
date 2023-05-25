
const images = ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "060", "061", "062", "063", "064", "065", "066", "067", "068", "069", "070", "071", "072", "073", "074", "075", "076", "077"]

// add array of song titles
//titles must be identical to file names from music directory
const songs = ["1. What is Folklife", "2. Black Mountain Rag", "3. Alma Corazon Y Vida", "4. Shove it Over", "5. Orange Blossom Special", "6. Old County Church", "7. Somethings Got a Hold of Me", "8. Welcome to Rainbow Springs", "9. La Viya", "10. Understanding Folklife", "11. Camilia La Tejana", "12. Arkansas Traveler", "13. That Old Time Religion", "14. Just Got Married", "15. Sissy In the Barn", "16. Alligator Dance", "17. I'm Going to Die With the Staff in My Hand", "18. El Gavilan Cjaropo", "19. That's Alright", "20. Which Way Did My Baby Go", "21. Where Could I Go But To The Lord", "22. Devil's Dream", "23. Give a Poor Dog a Bone", "24. Somewhere to Lay My Head", "25. I believe", "26. Butter Beans", "27. Chu Shui Lian", "28. The Cuckoo", "29. One Dime Blues", "30. Qua Cãu Gió Bay", "31. The Water is Wide", "32. Kimble's Rachel", "33. Gonna Paint the Town", "34. Kind Hearted Woman Blues", "35. The Cruel Weather", "36. Back in the Saddle Again", "37. Lord Wellington's Reel", "38. Nottamun Town", "39. Until I Found the Lord", "40. The Wayfaring Stranger"]

$('.carousel').carousel({

  interval: 8000,

});




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
      console.log('No more numbers available.')
      return false;
    }
  }
}


const carouselInner = document.querySelector('.carousel-inner')

for (let i = 0; i < images.length - 1; i++) {
  let randIndex = genRandNum(images.length - 1)
  let randImage = images[randIndex]
  const newItem = document.createElement('div')
  newItem.id = randIndex
  newItem.classList.add('carousel-item')
  newItem.innerHTML = `

    
    <img src="img/image${randImage}.jpg" class="d-block mx-auto">

  `

  carouselInner.append(newItem)
}
const firstItem = document.querySelector('.carousel-item').classList.add('active')




// music player code
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');


// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;

}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime(e) {
  const { duration, currentTime } = e.srcElement;
  var sec;
  var sec_d;

  // define minutes currentTime
  let min = (currentTime == null) ? 0 :
    Math.floor(currentTime / 60);
  min = min < 10 ? '0' + min : min;

  // define seconds currentTime
  function get_sec(x) {
    if (Math.floor(x) >= 60) {

      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
          sec = Math.floor(x) - (60 * i);
          sec = sec < 10 ? '0' + sec : sec;
        }
      }
    } else {
      sec = Math.floor(x);
      sec = sec < 10 ? '0' + sec : sec;
    }
  }

  get_sec(currentTime, sec);

  // // change currentTime DOM
  // currTime.innerHTML = min + ':' + sec;

  // define minutes duration
  let min_d = (isNaN(duration) === true) ? '0' :
    Math.floor(duration / 60);
  min_d = min_d < 10 ? '0' + min_d : min_d;


  function get_sec_d(x) {
    if (Math.floor(x) >= 60) {

      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
          sec_d = Math.floor(x) - (60 * i);
          sec_d = sec_d < 10 ? '0' + sec_d : sec_d;
        }
      }
    } else {
      sec_d = (isNaN(duration) === true) ? '0' :
        Math.floor(x);
      sec_d = sec_d < 10 ? '0' + sec_d : sec_d;
    }
  }

  // define seconds duration

  get_sec_d(duration);

  // change duration DOM
  // durTime.innerHTML = min_d + ':' + sec_d;

};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate', DurTime);

const audioTracks = document.querySelector('#audio')


console.log(data[0])