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