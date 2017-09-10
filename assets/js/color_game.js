var startGame = document.querySelector('button');
var choices = document.querySelectorAll('.choice');
var winningColor = document.querySelector('h1');

var colorsArr = [];

startGame.addEventListener('click', function() {
    colorsArr = [];
    
    choices.forEach(function(choice) {
        var randColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        choice.style.backgroundColor = randColor;
        colorsArr.push(randColor);
    });
    
    winningColor.innerText = `${colorsArr[Math.floor(Math.random() * colorsArr.length)]}`;
});