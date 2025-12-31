console.log("Welcome to Tic Tac Toe");

let audioturn = new Audio("../audio/WhatsApp Audio 2025-07-15 at 16.12.21_f156f851.mp3");
let music=new Audio("../audio/music.mp3");
music.play();
let gameover = false;
let turn = "X";

// Function to change turn
const changeturn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, -45],
    ];

    win.forEach(e => {
        if (
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won";
            gameover = true;
            music.pause();
           
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform =
                `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
               
        }
    });
};

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            audioturn.play(); // ✅ Play sound BEFORE changing turn
            checkwin();
            if (!gameover) {
                turn = changeturn();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Add on click listener to reset button
let reset = document.getElementById("reset"); // ✅ Make sure this element exists
reset.addEventListener('click', () => {
    music.play();
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element => {
        Element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0';
});