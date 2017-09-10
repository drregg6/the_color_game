var startGame = document.querySelector('button');
var choices = document.querySelectorAll('.choice');
var winningColor = document.querySelector('h1');
var header = document.querySelector('header');

var colorsArr = []; // holds the six current random colors
var winningColorId = 0; // holds the winning id number
var isWon = true; // activates whether or not .choices is clickable



startGame.addEventListener('click', function() {
    header.style.backgroundColor = '#69acdd'; // returns the header back to its normal color
    colorsArr = []; // ready to hold six new random colors
    winningColorId = 0;  // ready to hold a new winning color id
    isWon = !isWon; // ready to make the .choices clickable
    
    choices.forEach(function(choice) {
        choice.classList.remove('invisible'); // ensure all .choices are clickable
        
        var randColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`; // create a new backgroundColor for each choice
        choice.style.backgroundColor = randColor; // update its backgroundColor
        colorsArr.push(randColor); // push the option into the arr
    });
    
    winningColorId = Math.floor(Math.random() * colorsArr.length); // select a random color
    winningColor.innerText = `${colorsArr[winningColorId]}`; // update the text in the header
});




choices.forEach(function(choice) {
    choice.addEventListener('click', function() {
        if (isWon) { // detects the end of the game
            return false; // does not allow 'click' functionality
        } else {
            if (choice.getAttribute('id') === String(winningColorId)) { // the choice is correct
                console.log('You Win!'); // winner winner chicken dinner!
                choices.forEach(function(choice) {
                    choice.classList.remove('invisible'); // make all .choices visible again
                    choice.style.backgroundColor = colorsArr[winningColorId]; // update the bgColors to the winning color
                });
                isWon = !isWon; // update isWon to mention game is over
                header.style.backgroundColor = colorsArr[winningColorId]; // update the header bgColor to the winning color
            } else {
                this.classList.add('invisible'); // hide the wrong answer and request user tries again
                console.log('Keep trying...');
            }
        }
    });
});