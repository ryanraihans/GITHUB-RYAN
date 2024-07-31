const p1button = document.querySelector('#p1-button');
const p2button = document.querySelector('#p2-button');
const p1display = document.querySelector('#p1-display');
const p2display = document.querySelector('#p2-display');
const resetbutton = document.querySelector('#reset');
const winpointoption = document.querySelector('#winpoint')
const p1buttonminus = document.querySelector('#p1-button-minus')
const p2buttonminus = document.querySelector('#p2-button-minus')


let p1score = 0 ;
let p2score = 0 ;
let winpoint = 0 ;
let isgameover = false;

function reset() {
    isgameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0 ;
    p2display.textContent = 0 ;
    
}

p1button.addEventListener('click', function() {
    if (!isgameover){
        p1score += 1;
        if (p1score === winpoint){
            isgameover = true;
        }
        p1display.textContent = p1score;
    }
});

p2button.addEventListener('click', function() {
    if (!isgameover){
        p2score += 1;
        if (p2score === winpoint){
            isgameover = true;
        }
        p2display.textContent = p2score;
    }
});

p1buttonminus.addEventListener('click', function() {
    if (!isgameover){
        p1score -= 1;
        p1display.textContent =p1score;
    }
});

p2buttonminus.addEventListener('click', function() {
    if (!isgameover){
        p2score -= 1;
        p2display.textContent =p2score;
    }
});


resetbutton.addEventListener('click', reset);

winpointoption.addEventListener('change', function() {
    winpoint = parseInt(this.value);
    if (winpoint == 15 ){
        winpoint = winpoint+16
    }
    if (winpoint == 10 ){
        winpoint = winpoint+17
    }
    reset();
});


