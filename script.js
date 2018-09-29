// index reference
// 0 = elephant
// 1 = train
// 2 = alien
// 3 = minion
letterIndices = ['e','t','a','m'];

var currLessonID;

var maxTries = 2;

//if user touches one of the cards
var trainDiv = document.getElementById('train');

// keeps track of what is pressed (sequence of morse chars)
var answerValue = '';
var numberOfTries = 0;

var video = [];
var lesson = [];

// var buttons = document.querySelectorAll('.morse-button'), i;

for(let id = 0; id < 4; id++){
  video[id] = document.getElementById('video'+id);
  lesson[id] = document.getElementById('lesson'+id);
  document.getElementById('card'+id).addEventListener("click", function(){
    beginLesson(id);
  });
}

//morse buttons
document.getElementById("dahButton").addEventListener("click", function(){
  dahAudio.play();
  answerValue = answerValue + "-"
  checkAnswer();
});
document.getElementById("ditButton").addEventListener("click", function(){
  ditAudio.play();
  answerValue = answerValue + "•"
  checkAnswer();
});

var ditAudio = document.getElementById("dit");
var dahAudio = document.getElementById("dah");

function checkAnswer(){
  console.log('answerValue', answerValue);
  if(answerValue[answerValue.length-1] !== englishToMorse[''+letterIndices[currLessonID]][answerValue.length-1]) {
    //if answer is wrong
    numberOfTries++;
    answerValue = '';
    if (numberOfTries > maxTries) {
      reset();
    } else {
      beginLesson(currLessonID)
      if(englishToMorse[''+letterIndices[currLessonID]][0] == '•'){
        blinkDitButton()
      } else {
        blinkDahButton()
      }
    }
  }
  // compare whole string
  if((englishToMorse[''+letterIndices[currLessonID]]) == answerValue){
    answerValue = '';
    numberOfTries = 0;
    video[currLessonID].style.display = 'block';
  }
}

function beginLesson(lessonID){
  currLessonID = lessonID;
  //TODO autoplay video here
  answerValue = '';
  trainDiv.style.display = 'none';
  document.getElementById('yellowbg').style.background = '#f7f7f7';
  lesson[lessonID].style.display = 'block';
}

function reset(){
  console.log("reset!")
  pressed = '';
  location.reload();
  trainDiv.style.display = 'block';
  console.log(trainDiv);
}

//#21d68c
function blinkDitButton(){
  console.log(dit);
  ////"press Dit
  var magicCheck = false;
  setInterval(function() {
    var dit = document.getElementById("ditButton");
    if(magicCheck == false) {
      console.log();
      dit.style.color = '#f7f7f7';
      dit.style.background = '#f7f7f7';
      magicCheck = true;
    } else {
      console.log('esle');
      dit.style.color = '#404040';
      dit.style.background = '#21d68c';
      magicCheck = false;
    }
  }, 1000);
}

function blinkDahButton(){
  console.log(dit);
  //"press Dah
  var magicCheck = false;
  setInterval(function() {
    var dah = document.getElementById("dahButton");
    if(magicCheck == false) {
      dah.style.color = '#f7f7f7';
      dah.style.background = '#f7f7f7';
      magicCheck = true;
    } else {
      dah.style.color = '#404040';
      dah.style.background = '#21d68c';
      magicCheck = false;
    }
  }, 1000);
}
