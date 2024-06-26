let turn = "X"
let isGameOver = false;
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")


// Function to change the turn
const changeTrun = () => {
    return turn === "X"? "0" : "X"

}
 
 document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

// Function to check for a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");

    let win = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],

    ]

    win.forEach(e => {
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== ""){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won "
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            gameover.play(); // Play the game over sound
        }
    })
}

    
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(isGameOver) return;
        music.play(); // Prevent further actions if the game is over
        if(boxtext.innerText === '')
            {
                boxtext.innerText = turn;
                turn= changeTrun();
                audioTurn.play();
                checkWin();
                if(!isGameOver)
                    {
                        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            
                    }
            }
    })
})

const reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ''
    })
    turn = "X";
    isGameOver= false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

    gameover.pause();
    gameover.currentTime = 0;
})


