// model
let hints = ["Your number is too low", "Your number is too high", "You guessed the right number!"]
let randomNumber;
let guessedNumber = '';
let guessedIndex = '';
let guessedNumbers = '';
let colorOffset = 1;
let red = 255;
let green = 255;
let blue = 255;

// view
updateView();
randomizeNumber();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="background" style="background-color: rgb(${red}, ${green}, ${blue})">
        <h1>Guess the number between 1-30</h1>
        <input id="guessedNumber"
        type="number"
        placeholder="${guessedNumber}"
        onchange="guess()" />
        <div id="winText">${guessedIndex}</div>
        <div>${guessedNumbers}</div>
        <div></div>
    </div>
    `;
}

// controller
function guess() {
    guessedNumber = document.getElementById('guessedNumber').value;
    guessedNumbers = guessedNumbers += guessedNumber + ' ';
    if (guessedNumber < randomNumber) {
        guessedIndex = hints[0];
    } else if (guessedNumber > randomNumber) {
        guessedIndex = hints[1];
    } else {
        guessedIndex = hints[2];
        document.getElementById('winText').classList.add('winText')
        animateBackground();
    }
    updateView();
}

function randomizeNumber() {
    randomNumber = Math.floor((Math.random() * 30) + 1)
}

function animateBackground(){
        red = (80 + colorOffset) % 255;
        green = (160 + colorOffset) % 255;
        blue = (230 + colorOffset) % 255;
        colorOffset += 3;
        updateView();
        requestAnimationFrame(animateBackground);
}