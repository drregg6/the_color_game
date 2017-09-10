// newGame should start on pageload



var startGame = document.querySelector('button');
var choices = document.querySelectorAll('.choice');
var winningColor = document.querySelector('h1');
var header = document.querySelector('header');

var colorsArr = [];
var winningColorId = 0;
var isWon = true;

startGame.addEventListener('click', function() {
    header.style.backgroundColor = '#69acdd';
    colorsArr = [];
    winningColorId = 0;
    isWon = !isWon;
    
    choices.forEach(function(choice) {
        choice.classList.remove('invisible');
        
        var randColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        choice.style.backgroundColor = randColor;
        colorsArr.push(randColor);
    });
    
    winningColorId = Math.floor(Math.random() * colorsArr.length);
    winningColor.innerText = `${colorsArr[winningColorId]}`;
});

choices.forEach(function(choice) {
    choice.addEventListener('click', function() {
        if (isWon) {
            return false;
        } else {
            if (choice.getAttribute('id') === String(winningColorId)) {
                console.log('You Win!');
                choices.forEach(function(choice) {
                    choice.classList.remove('invisible');
                    choice.style.backgroundColor = colorsArr[winningColorId];
                });
                isWon = !isWon;
                header.style.backgroundColor = colorsArr[winningColorId];
            } else {
                this.classList.add('invisible');
                console.log('Keep trying...');
            }
        }
    });
});



