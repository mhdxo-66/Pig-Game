"use strict";
let pl1 = 0;
let pl2 = 0;
let player1 = document.querySelector('.pl1');
let player2 = document.querySelector('.pl2');
let current1 = 0;
let current2 = 0;
let c1 = document.querySelector('.current1');
let c2 = document.querySelector('.current2');
function plscore() {
    player1.textContent = pl1;
    player2.textContent = pl2;
    c1.innerHTML = `Current <br> - ${current1} -`;
    c2.innerHTML = `Current <br> - ${current2} -`;
};
plscore();
let p1 = true;
let p2 = false;

function rnmc() {
    return Math.trunc(Math.random() * 6) + 1;
}
let clr1 = document.querySelector('.P1');
let clr2 = document.querySelector('.P2');
function clrc(stat) {
    clr1.style.opacity = stat === 1 ? '1.0' : '0.6';
    clr2.style.opacity = stat === 2 ? '1.0' : '0.6';
}
clrc(1);
document.querySelector('.dise').addEventListener('click', function () {
    let rnum = rnmc();
    console.log(rnum);
    if (p1 == true) {
        if (rnum > 1) {
            current1 += rnum;
            plscore();
        } else if (rnum < 2) {
            pl1 += current1 - 10;
            current1 = 0;
            p1 = false;
            p2 = true;
            plscore();
            clrc(2);
        }
    } else if (p2 == true) {
        if (rnum > 1) {
            current2 += rnum;
            plscore();
        } else if (rnum < 2) {
            pl2 += current2 - 10;
            current2 = 0;
            p1 = true;
            p2 = false;
            plscore();
            clrc(1);

        }
    }
}
)

