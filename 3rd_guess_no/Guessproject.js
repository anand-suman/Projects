let randomNumber= parseInt(Math.random()*100+1);
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaing = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.results')
let p = document.createElement('p')
let prevGuess=[];
let numGuess = 1;
let playGame=true;


if(playGame)
{
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)
    validatGuess(guess)
  })
};
function validatGuess(guess)
{
  if(isNaN(guess))
  {
    alert('PLease enter a valid number')
  }
  else if(guess < 1)
  {
    alert('PLease enter a number more than 1')
  }
  else if(guess>100){
    alert('PLease enter a number less than 100')
  }
  else
  {
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessege(`HaHaHa! tera kam khatm phir se try kar bhai Game over Ramdom number was ${randomNumber}`)
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }

  }
}

function checkGuess(guess)
{
  if(guess === randomNumber)
  {
    displayMessege(`Sahi hai beru ekdum correct Guess kiya`)
    endGame();
  }else if(guess < randomNumber){
    displayMessege(`Number is TOOO low`);
  }else if(guess > randomNumber){
    displayMessege(`Number is TOOO High`);
  }
}

function displayGuess(guess)
{
  userInput.value= '';
  guessSlot.innerHTML+=`${guess}, `;
  numGuess++;
  remaing.innerHTML= `${11-numGuess} `;
}
function displayMessege(Massege)
{
  lowOrHi.innerHTML= `<h2>${Massege}</h2>`;
}

function endGame()
{
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame()
{
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function (e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaing.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled','');
    startOver.removeChild(p);
    displayMessege('')
    playGame = true;
  })
}
