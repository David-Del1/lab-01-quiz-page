// import functions and grab DOM elements

import {countsAsAYes} from './utils.js';
// initialize state

// set event listeners to update state and DOM

const startBtn = document.getElementById('startBtn');
const outcomeDiv = document.getElementById('outcomeDiv');

startBtn.addEventListener('click', () => {
    alert('Welcome to the Octopus quiz!');



    const readyToTakeQuiz = confirm('Would you like to start the quiz now?');

    if (!readyToTakeQuiz) {
        alert('Come back when you are ready to take the octo-challenge.');
        return;
    }

    const name = prompt('What is your name?')

    let score = 0;

    const firstAnswer = prompt('Is an octopus considered a Crustacean?');
    const secondAnswer = prompt('Is an octopus considered one of the most intelligent invertebrates on earth?');
    const thirdAnswer = prompt('Are all octopuses deadly to humans?');
    const quizCompleted = alert('You finished the quiz! See below for your results.')

    if(!countsAsAYes(firstAnswer)) {
        score++;
    }
    if(countsAsAYes(secondAnswer)) {
        score++;
    }
    if(!countsAsAYes(thirdAnswer)) {
        score++;
    }

    const outcomeString = `Okay ${name}, you got ${score}/3 correct!`;

    outcomeDiv.textContent = outcomeString;


});


// USE the recipe