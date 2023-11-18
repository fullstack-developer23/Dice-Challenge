const button = document.getElementById('button');
const reset = document.getElementById('reset');
const score = document.getElementById('score');
const finalResult = document.getElementById('result');
const diceImage = document.getElementById('diceImage');

let totalScore = 0;
reset.style.display = 'none';
button.addEventListener('click', () => {
        let diceRoll = Math.floor((Math.random() * 6) + 1);
        diceImage.src = "./images/" + diceRoll + ".gif";
        new Audio("./sounds/dice.mp3").play();
        if(diceRoll == 1)
        {
            finalResult.textContent = "Sorry you lose. Please try again!";
            new Audio("./sounds/dice.mp3").play();
            totalScore = 0;
            button.style.display = 'none';
            reset.style.display = 'block';
        }
        if(diceRoll >= 20)
        {
            finalResult.textContent = "Congratulations! you won. Play again!";
            totalScore = 0;
            reset.style.display = 'block';
        } else{
            totalScore += diceRoll;
        }
    });

reset.addEventListener('click', () => {
    // score.textContent = 0;
    finalResult.textContent = "";
    button.style.display = 'block';
    reset.style.display = 'none';
});