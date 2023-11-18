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
            new Audio("./sounds/boo.mp3").play();
            totalScore = 0;
            score.textContent = totalScore;
            button.style.display = 'none';
            reset.style.display = 'block';
        }

        else{
            totalScore += diceRoll;
            score.textContent = totalScore;
        }

        if(totalScore >= 20)
        {
            finalResult.textContent = "Congratulations! you won.";
            new Audio("./sounds/congratulations.mp3").play();
            score.textContent = totalScore;
            button.style.display = 'none';
            reset.style.display = 'block';
        }
    });

reset.addEventListener('click', () => {
    finalResult.textContent = "";
    totalScore = 0;
    score.textContent = totalScore;
    button.style.display = 'block';
    reset.style.display = 'none';
});



// let totalScore = 0;
// reset.style.display = 'none';
// score.style.display = 'block';
// button.addEventListener('click', () => {
//         let diceRoll = Math.floor((Math.random() * 6) + 1);
//         diceImage.src = "./images/" + diceRoll + ".gif";
//         new Audio("./sounds/dice.mp3").play();
//         if(diceRoll == 1)
//         {
//             finalResult.textContent = "Sorry you lose. Please try again!";
//             new Audio("./sounds/boo.mp3").play();
//             totalScore = 0;
//             score.textContent = totalScore;
//             score.style.display = 'block';
//             button.style.display = 'none';
//             reset.style.display = 'block';
//         }

//         else{
//             totalScore += diceRoll;
//             score.textContent = totalScore;
//         }

//         if(totalScore >= 20)
//         {
//             finalResult.textContent = "Congratulations! you won.";
//             new Audio("./sounds/congratulations.mp3").play();
//             score.textContent = totalScore;
//             button.style.display = 'none';
//             reset.style.display = 'block';
//         }
//     });

// reset.addEventListener('click', () => {
//     finalResult.textContent = "";
//     totalScore = 0;
//     score.textContent = totalScore;
//     button.style.display = 'block';
//     reset.style.display = 'none';
// });