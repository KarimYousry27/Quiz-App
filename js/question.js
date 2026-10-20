import { allQuestion } from "./index.js";
import { quiz } from "./index.js";

export class Question{
   constructor(index){
    this.index = index;
    
    this.category= allQuestion[this.index].category;
    this.questionLength = allQuestion.length;
    this.question = allQuestion[this.index].question;
    this.incorect_answers = allQuestion[this.index].incorrect_answers;
    this.correct_answer = allQuestion[this.index].correct_answer;
    this.allChoices = [this.correct_answer,...this.incorect_answers].sort();
    this.answered = false;

    console.log('index',this.index)
    console.log('category',this.category)
    console.log('questionLength',this.questionLength)
    console.log('question',this.question);
    console.log('incorect answer',this.incorect_answers)
    console.log('correct',this.correct_answer)
    console.log('allchoices',this.allChoices)

   }
   displayQuestion(){
    document.getElementById('question-container').innerHTML =`
    <div
          class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
        >
          <div class="w-100 d-flex justify-content-between">
            <span class="btn btn-category">${this.category}</span>
            <span class="fs-6 btn btn-questions">${this.index + 1} of ${this.questionLength}</span>
          </div>
          <h2 class="text-capitalize h4 text-center">${this.question}</h2>  
          <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
          ${this.allChoices.map((choice)=>{
           return  `<li>${choice}</li>`
          }).join("")}
          </ul>
               
</div>
    `
    let allAnswers = document.querySelectorAll('.choices li')
    // console.log(allAnswers)
    allAnswers.forEach((answer)=>{
        // console.log(answer)
        answer.addEventListener('click',(e)=>{
            console.log('answer clicked')
            // console.log(e.target)
            this.checkAnswer(e.target)
        })
    })
   }
   checkAnswer(userAnswer){
    if(this.answered == true){
        return;
    }
    console.log(userAnswer)
    if(userAnswer.innerHTML == this.correct_answer){
        console.log('correct answer');
    userAnswer.classList.add('correct');
    quiz.score++;
    console.log(quiz.score)
    }
    else{
        console.log('incorect answer')
        userAnswer.classList.add('wrong');
    }
    this.answered=true;
    this.index++;
    this.animateQuestion(userAnswer);
    setTimeout(()=>{
        this.nextQuestion();
    },1500)
   }
   animateQuestion(element){
    console.log(element.closest('.question'))
    element.closest('.question').classList.remove('animate__bounceIn');
    element.closest('.question').classList.add('animate__backOutLeft')
   }
   nextQuestion(){
    if(this.index<allQuestion.length){
    let newQuestion = new Question(this.index);
    newQuestion.displayQuestion()
    }
    else{
        document.getElementById('question-container').innerHTML = `
         <div id="tryAgainContainer" class="text-center text-white animate__animated animate__bounceIn">
        <h1>Your Score is <span>${quiz.score}</span></h1>
        <p id="showResult" class="fs-1"></p>
        <button class="btn btn-primary" id="reloadBtn">Back to Home</button>
    </div>
     
    `
    const showResult = document.getElementById('showResult')
    {quiz.score == allQuestion.length ? showResult.innerHTML = 'Congratulation 😇':showResult.innerHTML = 'try Again ❗'}
    const reloadBtn = document.getElementById('reloadBtn')
    reloadBtn.addEventListener('click',()=>{
        window.location.reload()
    })
    
    }

   }
}