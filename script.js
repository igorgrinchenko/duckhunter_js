let body = window.document;
let duck = document.querySelector('.duckImg');
let score = document.querySelector('.score');
let myScore = document.querySelector('#my-score');
let gameOver = document.querySelector('.game-over');
let menu = document.querySelector('.menu');
let mainMusic = document.querySelector('.mainMusic');
let buttonsWrap = document.querySelector('.buttons-wrap');
let difficultWrap = document.querySelector('.difficult-wrap');
let difficultInfo = document.querySelector('.difficult-info');
let startBtn = document.querySelector('#start');
let difficultBtn = document.querySelector('#difficult');
let quitBtn = document.querySelector('#quit');
let muteBtn = document.querySelector('.mute');
let goToMenuBtn = document.querySelector('#go-to-menu');
let interval = 1000;
let scoreNumber = 1;
let easy = 'easy';
let medium = 'medium';
let hard = 'hard';
let godMod = 'GOD MOD';

body.addEventListener('click', shootingClick);
startBtn.addEventListener('click', startTheGame);
goToMenuBtn.addEventListener('click', goToMenu);
difficultBtn.addEventListener('click', changeDifficult);
quitBtn.addEventListener('click', quitFromGame);
muteBtn.addEventListener('click', muteMusic)
mainMusic.volume = 0.03;

function startTheGame() {
    menu.classList.add('menu-unvisible');
    gameOver.classList.toggle('game-over-visible');
    score.style.opacity = '1';
    duck.style.opacity = '1';
    setInterval(mooveDuck, interval);
}

function changeDifficult() {
    buttonsWrap.classList.toggle('buttons-wrap-unvisible');
    difficultWrap.classList.toggle('difficult-wrap-visible');
}

function quitFromGame() {
    window.close()
}

function mooveDuck() {
    duck.style.top = `${Math.floor(Math.random() * Math.floor(screen.height - 250))}px`;
    duck.style.left = `${Math.floor(Math.random() * Math.floor(screen.width - 200))}px`;
}

function muteMusic() {
    if (muteBtn.value === 'Mute') {
        muteBtn.value = 'Unmute';
        mainMusic.volume = 0;
        console.log(muteBtn.value);
    } else if (muteBtn.value === 'Unmute') {
        muteBtn.value = 'Mute'
        mainMusic.volume = 0.03;
        console.log(muteBtn.value);
    }
}

function shootingClick(e) {
    let target = e.target;

    if (target.classList.contains('duckImg')) {
        score.innerHTML = `Your score: ${scoreNumber++}`;
        let audio = new Audio();
        audio.src = 'sounds/quack.mp3';
        audio.autoplay = true;
        audio.volume = 1;
    } else {
        gameOver.classList.toggle('game-over-visible');
        myScore.innerHTML = `Your score: ${scoreNumber - 1}`;
        scoreNumber = 1;
        score.innerHTML = `Your score: 0`;
        duck.style.top = `10px`;
        duck.style.left = `10px`;
        let audioClick = new Audio();
        audioClick.src = 'sounds/click.mp3';
        audioClick.autoplay = true;
        audioClick.volume = 0.5
    }

    if (target.id == 'easy') {
        interval = 1500;
        buttonsWrap.classList.toggle('buttons-wrap-unvisible');
        difficultWrap.classList.toggle('difficult-wrap-visible');
        difficultInfo.innerHTML = `Your difficult: <span class='easy'>${easy}</span>`;
    } else if (target.id == 'medium') {
        interval = 1000;
        buttonsWrap.classList.toggle('buttons-wrap-unvisible');
        difficultWrap.classList.toggle('difficult-wrap-visible');
        difficultInfo.innerHTML = `Your difficult: <span class='medium'>${medium}</span>`;
    } else if (target.id == 'hard') {
        interval = 500;
        buttonsWrap.classList.toggle('buttons-wrap-unvisible');
        difficultWrap.classList.toggle('difficult-wrap-visible');
        difficultInfo.innerHTML = `Your difficult: <span class='hard'>${hard}</span>`;
    } else if (target.id == 'godMod') {
        interval = 300;
        buttonsWrap.classList.toggle('buttons-wrap-unvisible');
        difficultWrap.classList.toggle('difficult-wrap-visible');
        difficultInfo.innerHTML = `Your difficult: <span class='godMod'>${godMod}</span>`;
    }
}

function goToMenu() {
    location.reload()
}

function changeColor() {
    difficultInfo.style.color = `rgb(${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))})`;
}

setInterval(changeColor, 200)