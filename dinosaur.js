
//board
let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

//dinosaur
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight
    board.width = boardWidth

    context = board.getContext("2d"); //board'ı çizmek için kullanıyoruz.

    //draw inital dinosaur
    // context.fillStyle="green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function() {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }
    
}