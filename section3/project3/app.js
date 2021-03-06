
//Game Values
let min = 1 ,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

    //   console.log(game);
    //   console.log(minNum);
    //   console.log(maxNum);
    //   console.log(guessBtn);
    //   console.log(guessInput);
    //   console.log(message);
      
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again Event Listner
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //Validate
    if(guess < min || guess > max || isNaN(guess)){
      setMessage(`Please enter a number Between ${min} and ${max}`, 'red');
    } else{
      //check if win
         if(guess === winningNum){
           //Game over - WON 
           gameOver(true,`${winningNum} is correct , YOU WIN !!`);
         } else {
            //Wrong numbet
            guessesLeft -=1;
            if(guessesLeft === 0){
              //Game over - lost
               gameOver(false,`Game Over, You lost. The correct number was ${winningNum}`);
            } else{
               //Game continue  - ans wrong
               //Change border color
               guessInput.style.borderColor = 'red';
               //Clear Input
               guessInput.value = '';
               //Give user info
               setMessage(`${guess} is not correct, ${guessesLeft} guess Left`,'red');
            }
         }
     }
}) ;

//Set Message
function setMessage (msg, color){
    message.style.color= color ;
    message.textContent = msg;
}

//Game over
function gameOver(won, msg){
    let color;
    won === true ? color ='green' : color ='red';
    //Dissable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color;
    //Set message color
    message.style.color = color;
    //Set message
    setMessage(msg);
    //Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandomNum(min , max){
   return parseInt(Math.random()*(max-min+1)+min);
}
