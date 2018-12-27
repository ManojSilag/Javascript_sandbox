
//Game Values
let min = 1 ,
    max = 10,
    winningNum = 2,
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

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    
    //Validate
    if(guess < min || guess > max || isNaN(guess)){
      setMessage(`Please enter a number Between ${min} and ${max}`, 'red');
    }

    //check if win
    if(guess === winningNum){
      //Dissable input
      guessInput.disabled = true;
      //Change border color
      guessInput.style.borderColor = 'green';
      //Set message
      setMessage(`${winningNum} is correct , YOU WIN !`, 'green');
    } else {
      setMessage('You fail')
    }
});

//Set Message
function setMessage (msg, color){
    message.style.color= color ;
    message.textContent = msg;
}