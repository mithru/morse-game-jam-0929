//if user touches one of the cards
var trainDiv = document.getElementById('train');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

var pressed = '';
var numberOfTries = 0;

var buttons = document.querySelectorAll('.morse-button'), i;

document.getElementById("card1").addEventListener("click", beginLessonElephant);
document.getElementById("card2").addEventListener("click", beginLessonTrain);
document.getElementById("card3").addEventListener("click", beginLessonAlien);
document.getElementById("card4").addEventListener("click", beginLessonMinion);

var alienVideo = document.getElementById('alienVideo');
var trainVideo = document.getElementById('trainVideo');
var elephantVideo = document.getElementById('elephantVideo');
var minionVideo = document.getElementById('minionVideo');

var trainLesson = document.getElementById('lessonT');
var alienLesson = document.getElementById('lessonA');
var elephantLesson = document.getElementById('lessonE');
var minionLesson = document.getElementById('lessonM');

document.getElementById("dahButton").addEventListener("click", playDahAudio);
document.getElementById("ditButton").addEventListener("click", playDitAudio);

var ditAudio = document.getElementById("dit");
var dahAudio = document.getElementById("dah");

/////////////////////////
//ELEPHANT
/////////////////////////
function beginLessonElephant() {
  //show the lesson illustration in the lesson div
  if (trainDiv) {
    if (trainDiv.style.display == 'none') {
      trainDiv.style.display = 'block';
      elephantLesson.style.display = 'none';
    } else {
      trainDiv.style.display = 'none';
      document.getElementById('yellowbg').style.background = '#f7f7f7';
      elephantLesson.style.display = 'block';
      // elephantLesson.play();
    }
  }
  //for every morse code button
  for (i = 0; i < buttons.length; i++) {

    //add the event listeners for the train lesson
    //and connect those event listeners to a unique function
    //that will process whether Ben has entered the right answer
    buttons[i].addEventListener('click', elephantListeners, false);
  }

  //the unique function to test Ben's answer
  //pass in the user's behavior
  function elephantListeners(event) {
    //store in a hidden input field the user's inputs
    //to be able to collect a string
    pressed = document.getElementById('pressed');
    pressed.value += this.value + "|";
    //this shows us what Ben has entered
    console.log(pressed.value)

    // Ben needs to answer dit-dah / 1 2 for the letter A

    // if he enteres dah / 2, he's already wrong
    if (pressed.value[0] == '2') {
      // tell him he's wrong
      // clear the string
      // ditAudio.pause();
      pressed.value = ''
      tryAgain();
    }

    if (pressed.value[0] == '1') {
      // alert('yay!')
      pressed.value = ''
      elephantVideo.style.display = "block";
      numberOfTries = 0;
    }
  }
}

/////////////////////////
//TRAIN
/////////////////////////
function beginLessonTrain() {
  console.log("train begins");
  //show the lesson illustration in the lesson div
  if (trainDiv) {
    if (trainDiv.style.display == 'none') {
      trainDiv.style.display = 'block';
      trainLesson.style.display = 'none';
    } else {
      trainDiv.style.display = 'none';
      document.getElementById('yellowbg').style.background = '#f7f7f7';
      trainLesson.style.display = 'block';
      // trainLesson.play();
    }
  }
  //for every morse code button
  for (i = 0; i < buttons.length; i++) {

    //add the event listeners for the train lesson
    //and connect those event listeners to a unique function
    //that will process whether Ben has entered the right answer
    buttons[i].addEventListener('click', trainListeners, false);
  }

  //the unique function to test Ben's answer
  //pass in the user's behavior
  function trainListeners(event) {
    //store in a hidden input field the user's inputs
    //to be able to collect a string
    pressed = document.getElementById('pressed');
    pressed.value += this.value + "|";
    //this shows us what Ben has entered
    console.log(pressed.value)

    // Ben needs to answer dit-dah / 1 2 for the letter A

    // if he enteres dah / 2, he's already wrong
    if (pressed.value[0] == '1') {
      // tell him he's wrong
      // clear the string
      pressed.value = ''
      tryAgain();
    }

    if (pressed.value[0] == '2') {
      // alert('yay!')
      pressed.value = ''
      console.log("train video");
      trainVideo.style.display = "block";
      numberOfTries = 0;
    }
  }
}

/////////////////////////
//ALIEN
/////////////////////////
function beginLessonAlien() {

  //show the lesson illustration in the lesson div
  if (trainDiv) {
    if (trainDiv.style.display == 'none') {
      trainDiv.style.display = 'block';
        alienLesson.style.display = 'none';
    } else {
      trainDiv.style.display = 'none';
      document.getElementById('yellowbg').style.background = '#f7f7f7';
      alienLesson.style.display = 'block';
    // alienLesson.play();
    }
  }


    //for every morse code button
    for (i = 0; i < buttons.length; i++) {

      //add the event listeners for the train lesson
      //and connect those event listeners to a unique function
      //that will process whether Ben has entered the right answer
      buttons[i].addEventListener('click', alienListeners, false);
    }

    //the unique function to test Ben's answer
    //pass in the user's behavior
    function alienListeners(event) {
      //store in a hidden input field the user's inputs
      //to be able to collect a string
      pressed = document.getElementById('pressed');
      pressed.value += this.value + "|";
      //this shows us what Ben has entered
      console.log(pressed.value)

      // Ben needs to answer dit-dah / 1 2 for the letter A

      // if he enteres dah / 2, he's already wrong
      if (pressed.value[0] == '2') {
        // do wrong
        // tell him he's wrong
        // clear the string
        //clear the string
        pressed.value = ''
        tryAgain();
      }

      //check to see if we're getting inputs of the right length ?
      // console.log(pressed.value.length)

      // if Ben enters two buttons
      if (pressed.value.length === 4) {
        // and if he enters dit and dah / 1 2
        if (pressed.value === '1|2|') {
          // do good
         alienVideo.style.display = "block";
          pressed.value = '';
          numberOfTries = 0;
          //otherwise, he's wrong
        } else {
          // do wrong
          // tell him he's wrong
          // clear the string
          pressed.value = ''
          tryAgain();
        }
      }
    }
}

/////////////////////////
//MINION
/////////////////////////
function beginLessonMinion() {
  //show the lesson illustration in the lesson div
  if (trainDiv) {
    if (trainDiv.style.display == 'none') {
      trainDiv.style.display = 'block';
      minion.style.display = 'none';
    } else {
      trainDiv.style.display = 'none';
      document.getElementById('yellowbg').style.background = '#f7f7f7';
      minionLesson.style.display = 'block';
      // minionLesson.play();
    }
  }
  for (i = 0; i < buttons.length; i++) {

    //first remove old event listners for every other lesson
    //buttons[i].removeEventListener('click', trainListeners);
    // buttons[i].removeEventListener('click', alienListeners, false);
    // buttons[i].removeEventListener('click', elephantListeners, false);


    //add the event listeners for the train lesson
    //and connect those event listeners to a unique function
    //that will process whether Ben has entered the right answer
    buttons[i].addEventListener('click', minionListeners, false);
  }

  //the unique function to test Ben's answer
  //pass in the user's behavior
  function minionListeners(event) {
    //store in a hidden input field the user's inputs
    //to be able to collect a string
    var pressed = document.getElementById('pressed');
    pressed.value += this.value + "|";
    //this shows us what Ben has entered
    console.log(pressed.value)

    // Ben needs to answer dit-dah / 1 2 for the letter A

    // if he enteres dah / 2, he's already wrong
    if (pressed.value[0] == '1') {
      // do wrong
      // tell him he's wrong
      // clear the string
      tryAgain();
      //clear the string
      pressed.value = ''
    }

    //check to see if we're getting inputs of the right length ?
    console.log(pressed.value.length)

    // if Ben enters two buttons
    if (pressed.value.length === 4) {
      // and if he enters dit and dah / 1 2
      if (pressed.value === '2|2|') {
        // do good
        minionVideo.style.display = "block";
        pressed.value = '';
        numberOfTries = 0;
        //otherwise, he's wrong
      } else {
        // do wrong
        // tell him he's wrong
        // clear the string

        pressed.value = ''
        tryAgain();
        // reset();

      }
    }
  }

}

function reset(){
  console.log("reset!")
  pressed = '';
  location.reload();
  trainDiv.style.display = 'block';
  console.log(trainDiv);
  document.getElementById('lessonT').style.display = 'none';
}

function tryAgain() {
  //blink the correct button
  //play sound for let's try again
  console.log("Let's Try Again");
  numberOfTries++;
  console.log(numberOfTries);

  if (numberOfTries == 2) {
    reset();
  }

  //if beginLessonMinion
  if (minionLesson.style.display == 'block'){
    blinkDahButton();
    //blink dahButton
    //play sound for let's try again

  }

  //if beginLessonTrain
  if (trainLesson.style.display == 'block'){
    blinkDahButton();
    //blink dahButton
    //play sound for let's try again


  }
  //if beginLessonAlien
  if (alienLesson.style.display == 'block'){
    blinkDitButton();
    //blink ditButton
    //play sound for let's try again

  }
  //if beginLessonElephant
  if (elephantLesson.style.display == 'block'){
    blinkDitButton();
    //blink ditButton
    //play sound for let's try again
  }
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

function closeVideoModal() {
  modal.style.display = 'none';
  if (modal.style.display == 'none') {
    trainDiv.style.display = 'block';
  } else {
    trainDiv.style.display = 'none';
  }
}

function playDitAudio(){
  ditAudio.play();
}

function playDahAudio(){
  dahAudio.play();
}
