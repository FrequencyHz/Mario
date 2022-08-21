
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const txtscore = document.querySelector('.txtscore');
const clouds = document.querySelector('.clouds');
let score = 0;

const marioAnimation = () =>{
    mario.classList.add('mario-animation');

    setTimeout(() => {
        mario.classList.remove('mario-animation');
    }, 500);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './image/game-over.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '50px';

        clearInterval(loop)
    }

    score = score+1; 
    txtscore.textContent = score;

}, 10);

document.addEventListener('keydown', marioAnimation);