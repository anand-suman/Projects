// Game constants & variables

let Direction = {x: 0, y: 0}; // discrip the direction 
const FoodSound = new Audio('music/food.mp3'); // if the snake is eat the food then it will play
const GameOverSound= new Audio('music/gameover.mp3'); //if the game is over then this sound is play
const MoveSound = new Audio('music/move.mp3');  //it will play when the game snake is trun
const MusicSound = new Audio('music/music.mp3'); // it will play over the game
let speed = 8;  //it is the speed of the snake
let score = 0; // it is score of the game as per each game
let lastpaintTime = 0; // it is the time
let snakeArr = [
    {x: 13, y: 15}
]; // it is the array of snake

food = {x: 6 , y: 7}; // this is the food of the snake

// Game function

function main(ctime){   // 
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastpaintTime)/1000 < 1/speed){
        return;
    }
    lastpaintTime = ctime;
    gameEngine();
}

// Function to collided snake 

function isCollide(snake){
    // agar apne aap me takra jaye toh
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
        
    }

    // agar dnake wall se tara jaye

    // if (snake[0].x >= 20 || snake[0].x <= 0 || snake[0].y >=20 || snake[0].y <= 0 ) {
    //     return true;
    // }

    return false;
}


function gameEngine(){
    // part 1 Updation the snake array & Food

    if(isCollide(snakeArr)){
        GameOverSound.play();
        MusicSound.pause();
        Direction = {x: 0 , y: 0};
        alert("Game Over Press any key to Play again!");
        snakeArr = [{x: 13, y: 15}];
        MusicSound.play();
        score = 0;
    }

    // if we have eaten the food increment the score and regenerate the food

    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x)
    {
        FoodSound.play();
        score += 1;
        if(score > hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "Hiscore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + Direction.x, y: snakeArr[0].y + Direction.y});
        let a = 2;
        let b= 20;
        food = {
                x: Math.round(a+(b-a)*Math.random()),
                y: Math.round(a+(b-a)*Math.random())
        };
    }


// Moveing the snake

    for (let i = snakeArr.length -2; i >= 0; i--) {
       snakeArr[i+1]= {...snakeArr[i]};
      
    }

    snakeArr[0].x += Direction.x;
    snakeArr[0].y += Direction.y;

// part 2 display the snake and food

// Display the snake

board.innerHTML = "";
snakeArr.forEach((e, index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if(index === 0){
        snakeElement.classList.add('head');
    }
    else{
        snakeElement.classList.add('snake');
    }
    board.appendChild(snakeElement);
});
// display food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);


    if (snake[0].x >= 20 || snake[0].x <= 0 || snake[0].y >=20 || snake[0].y <= 0 ) {
        // return true;
        if(snake[0].x === 20)
        {
            
        }
    }

}

// Main logic start hear

MusicSound.play();
let highscore = localStorage.getItem("hiscore");
if (highscore === null) {
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(highscore);
    hiscoreBox.innerHTML = "HiScore" + highscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    Direction = {x: 0, y: 1}
    MoveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            Direction.x = 0;
            Direction.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            Direction.x = 0;
            Direction.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            Direction.x = -1;
            Direction.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            Direction.x = 1;
            Direction.y = 0;
            break;
    
        default:
            break;
    }
});
