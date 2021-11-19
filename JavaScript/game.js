const question = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreElement = document.getElementById('score');
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');

let index = 0;
const SCORE_POINTS = 100;
let score = 0;

const questions = [
    {
        question : "What is 2 + 3?",
        choice1 : "2", 
        choice2 : "22", 
        choice3 : "5", 
        choice4 : "34",
        answer : 3,
    },
    {
        question : "How many legs does a cow have?",
        choice1 : "6", 
        choice2 : "4", 
        choice3 : "44", 
        choice4 : "7",
        answer : 2,
    },
    {
        question : "What cows drink?",
        choice1 : "Milk", 
        choice2 : "Orange Juice", 
        choice3 : "Coffee", 
        choice4 : "Water",
        answer : 4,
    },
    {
        question : "What shape is the earth?",
        choice1 : "Circle", 
        choice2 : "Rectangle", 
        choice3 : "Flat", 
        choice4 : "Tringale",
        answer : 1,
    }
]

const MAX_QUESTIONS = questions.length;

startGame = () => {
    getNewQuestion();
    checkAnswer();
}

isGameOver = () => {
    if(index >= MAX_QUESTIONS){
        return true;
    }else{
        return false;
    }
}

displayProgressText = () => {
    progressText.innerText = `Question ${index + 1} Of ${MAX_QUESTIONS}`;
}

displayProgressBar = () => {
    let questionNumber = index + 1;
    progressBarFull.style.width = ((questionNumber / MAX_QUESTIONS) * 100) + '%';
}

addScoreToStorage = () => {
    window.localStorage.setItem('score', score);
}

getNewQuestion = () => {
    if(isGameOver()){
        addScoreToStorage();
        return window.location.assign('/HTML/end.html');
    }

    displayProgressText();
    displayProgressBar();

    let currentQuestion = questions[index];

    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion["choice" + number]
    });
}

checkAnswer = () => {
    choices.forEach(choice => {
        choice.addEventListener("click", e => {
            let currentQuestion = questions[index];
            let userChoice = e.target;
            let userAnswer = userChoice.dataset['number'];
            let classToApply = userAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if(classToApply === 'correct'){
                incrementScore();
            }

            userChoice.parentElement.classList.add(classToApply);
            index++;

            setTimeout(() => {
                userChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });    
    })
}

incrementScore = () => {
    score += SCORE_POINTS;
    scoreElement.innerText = score;
}


startGame();