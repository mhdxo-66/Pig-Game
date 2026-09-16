"use strict";
let pl1 = JSON.parse(localStorage.getItem('pl1')) || 0;
let pl2 = JSON.parse(localStorage.getItem('pl2')) || 0;
let player1 = document.querySelector('.pl1');
let player2 = document.querySelector('.pl2');
let current1 = JSON.parse(localStorage.getItem('current1')) || 0;
let current2 = JSON.parse(localStorage.getItem('current2')) || 0;
let c1 = document.querySelector('.current1');
let c2 = document.querySelector('.current2');
let ds = document.querySelector('.ds');
function plscore() {
    player1.textContent = pl1;
    player2.textContent = pl2;
    c1.innerHTML = `- Current - <br>  ${current1}`;
    c2.innerHTML = `- Current - <br>  ${current2}`;
};
plscore();
let p1 = true;
let p2 = false;

function gover() {
    if (pl1 <= -20) {
        alert(`Player 2 Won`)
        rst();
    } else if (pl2 <= -20) {
        alert(`Player 1 Won`)
        rst();
    }
}

function rst() {
    localStorage.clear();
    location.reload();
}
document.querySelector('.rst').addEventListener('click', function () {
    rst();
})
function rnmc() {
    let rnm = Math.trunc(Math.random() * 6) + 1;
    return rnm;
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
    ds.src = `./dice-${rnum}.png`;
    console.log(rnum);
    if (p1 == true) {
        if (rnum > 1) {
            current1 += rnum;
            localStorage.setItem("current1", JSON.stringify(current1));
            plscore();
        } else if (rnum < 2) {
            pl1 += current1 - 5;
            current1 = 0;
            localStorage.setItem("current1", JSON.stringify(current1));
            localStorage.setItem("pl1", JSON.stringify(pl1));
            p1 = false;
            p2 = true;
            plscore();
            clrc(2);
        }
    } else if (p2 == true) {
        if (rnum > 1) {
            current2 += rnum;
            localStorage.setItem("current2", JSON.stringify(current2));
            plscore();
        } else if (rnum < 2) {
            pl2 += current2 - 5;
            current2 = 0;
            localStorage.setItem("current1", JSON.stringify(current1));
            localStorage.setItem("pl2", JSON.stringify(pl2));
            p1 = true;
            p2 = false;
            plscore();
            clrc(1);

        }
    }
    gover();
}
)

document.querySelector('.hold').addEventListener('click', function () {
    if (p1 === true) {
        pl1 += current1;
        current1 = 0;
        localStorage.setItem("pl1", JSON.stringify(pl1));
        localStorage.setItem("current1", JSON.stringify(current1));
        p1 = false;
        p2 = true;
        plscore();
        clrc(2);
    } else if (p2 === true) {
        pl2 += current2;
        current2 = 0;
        localStorage.setItem("pl2", JSON.stringify(pl2));
        localStorage.setItem("current2", JSON.stringify(current2));
        p1 = true;
        p2 = false;
        plscore();
        clrc(1);
    }

})

