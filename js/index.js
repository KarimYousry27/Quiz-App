import { Quiz } from "./quiz.js";
import { Question } from "./question.js";

const categoryMenu = document.getElementById('categoryMenu');
const difficultyOptions = document.getElementById('difficultyOptions');
const questionsNumber = document.getElementById('questionsNumber')
const startQuiz = document.getElementById('startQuiz')
const quizOptions = document.getElementById('quizOptions')


export let allQuestion;
export let quiz;
startQuiz.addEventListener('click',async function(){
quizOptions.classList.replace('d-flex','d-none') 
quiz = new Quiz(categoryMenu.value ,difficultyOptions.value,questionsNumber.value);

allQuestion = await quiz.getQuizQuestions();

console.log(allQuestion)
let question = new Question(0);
question.displayQuestion();
})

