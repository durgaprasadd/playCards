let imagesList = ['images/king.png', 'images/queen.png', 'images/jack.png'];
let score = 0;

const shuffler = function(list) {
  let shuffledList = [];
  let temporaryList = list.slice();
  let length = list.length;
  while (length > 0) {
    let randomNumber = Math.floor(Math.random() * length);
    shuffledList.push(temporaryList[randomNumber]);
    let lastElement = temporaryList.pop();
    if (length - 1 != randomNumber) {
      temporaryList[randomNumber] = lastElement;
    }
    length--;
  }
  return shuffledList;
};

const flipCards = function() {
  document.getElementById('start').innerHTML =
    "<h1 id='score'> score: " +
    score +
    "</h1><img onclick='changeImage(imagesList[0],\"0\")' id='0' src='images/backside.gif'/> <img onclick='changeImage(imagesList[1],\"1\")' id='1'src='images/backside.gif' /> <img onclick='changeImage(imagesList[2],\"2\")' id='2' src='images/backside.gif'/>";
};
const showCards = function() {
  console.log(imagesList);
  document.getElementById('start').innerHTML =
    "<h1 id='score'> score: " +
    score +
    '</h1><img src=' +
    imagesList[0] +
    ' /> <img src=' +
    imagesList[1] +
    ' /> <img src=' +
    imagesList[2] +
    '>';
};

const changeImage = function(picture, id) {
  document.getElementById(id).src = picture;
  let image = document.images;
  if (image[id].src.includes('king')) {
    score++;
    document.getElementById('score').innerText = 'score: ' + score;
  }
  setTimeout(function() {
    if (image[id].src.includes('king')) {
      imagesList = shuffler(imagesList);
      flipCards();
    } else {
      setTimeout(function() {
        document.getElementById('start').innerHTML =
          '<h1>' +
          'You Lose!' +
          '\nYour score is ' +
          score +
          '</h1>' +
          '<button onclick="location.reload()">Restart</button>';
      }, 1000);
      showCards();
    }
  }, 500);
};

const startGame = function() {
  flipCards();
};

window.onload = function() {
  imagesList = shuffler(imagesList);
};
