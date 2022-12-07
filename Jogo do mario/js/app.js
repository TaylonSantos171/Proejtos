const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipepostion = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsposition = clouds.offsetLeft;

    if(pipepostion <= 120 && pipepostion > 0 &&marioposition < 88) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipepostion}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;
        
        clouds.style.animation = none
        clouds.style.left = `${cloudsposition}px`;

        mario.src='/imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginleft = '50px';

        clearInterval(loop);

    }

}, 10);

document.addEventListener("keydown" , jump);