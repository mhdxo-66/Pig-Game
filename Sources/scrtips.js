"use strict";
let player1 = 0;
let player2 = 0;
let pl1 = document.querySelector('.pl1');
let pl2 = document.querySelector('.pl2');

function plscore() {
    pl1.textContent = player1;
    pl2.textContent = player2;
}
plscore();