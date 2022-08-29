
const pony = document.querySelector('.pony');
const pipe = document.querySelector('.pipe');
const jump = ()=>{
    pony.classList.add('jump');

    setTimeout(() =>{
        pony.classList.remove('jump');

    }, 500);


}

const loop= setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const ponyPosition = +window.getComputedStyle(pony).bottom.replace('px', '');

    if(pipePosition <= 70 && pipePosition > 0 && ponyPosition < 70){

        pipe.style.animation = 'none';
        pipe.style.left =`${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom =`${ponyPosition}px`;

        pony.src='./image/gameover.jpg';
        pony.style.width ='100%';
        
        clearInterval(loop);
    }


}, 10);

document.addEventListener('keydown', jump);