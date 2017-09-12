// TODO: fade effect
// TODO: simplify code with an NewGame Object?
// TODO: separate functions from click events


var startGame = document.querySelector('#start-game');
var choices = document.querySelectorAll('.choice');
var groups = document.querySelectorAll('.group');
var firstRow = document.querySelectorAll('.group:first-child .choice');
var game = document.querySelector('.game');
var winningColor = document.querySelector('h1');
var header = document.querySelector('header');
var feedback = document.querySelector('#feedback');
var easyMode = document.querySelector('#easy');
var hardMode = document.querySelector('#hard');


var colorsArr = []; // holds the six current random colors
var winningColorId = 0; // holds the winning id number
var isWon = true; // activates whether or not .choices is clickable



easyMode.addEventListener('click', activateEasyMode);
hardMode.addEventListener('click', activateHardMode);
startGame.addEventListener('click', renderGame);
choices.forEach(function(choice) {
    choice.addEventListener('click', chooseColor);
});


function chooseColor() {
    if (isWon) { // detects the end of the game
        return false; // does not allow 'click' functionality
    } else {
        if (this.getAttribute('id') === String(winningColorId)) { // the choice is correct
            feedback.textContent = 'You win!' // winner winner chicken dinner!
            choices.forEach(function(choice) {
                choice.classList.remove('invisible'); // make all .choices visible again
                choice.style.backgroundColor = colorsArr[winningColorId]; // update the bgColors to the winning color
            });
            isWon = !isWon; // update isWon to mention game is over
            header.style.backgroundColor = colorsArr[winningColorId]; // update the header bgColor to the winning color
        } else {
            this.classList.add('invisible'); // hide the wrong answer and request user tries again
            feedback.textContent = 'Keep trying...';
        }
    }
}



function renderGame() {
    header.style.backgroundColor = '#69acdd'; // returns the header back to its normal color
    colorsArr = []; // ready to hold six new random colors
    winningColorId = 0;  // ready to hold a new winning color id
    isWon = !isWon; // ready to make the .choices clickable
    feedback.textContent = ''; // reset feedback
    
    if (hardMode.classList.contains('active')) {
        var modeChoices = document.querySelectorAll('.choice');
    } else {
        var modeChoices = document.querySelectorAll('.group:first-child .choice');
    }
    
    modeChoices.forEach(function(choice) {
        choice.classList.remove('invisible'); // ensure all .choices are clickable

        var randColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`; // create a new backgroundColor for each choice
        choice.style.backgroundColor = randColor; // update its backgroundColor
        colorsArr.push(randColor); // push the option into the arr
    });
    
    winningColorId = Math.floor(Math.random() * colorsArr.length); // select a random color
    winningColor.innerText = `${colorsArr[winningColorId]}`; // update the text in the header
}


function activateHardMode() {
    if (hardMode.classList.contains('active')) {
        return;
    } else {
        hardMode.classList.add('active');
        easyMode.classList.remove('active');
        groups[1].classList.remove('invisible');
    }
}


function activateEasyMode() {
    if (easyMode.classList.contains('active')) {
        return;
    } else {
        easyMode.classList.add('active');
        hardMode.classList.remove('active');
        groups[1].classList.add('invisible');
    }
}