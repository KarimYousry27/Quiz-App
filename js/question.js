import { allQuestion } from "./index.js"
import {quiz}from "./index.js"
export class Question{
  constructor(index){
    console.log('from question',allQuestion)
 this.index = index 
 this.category = allQuestion[this.index].category
 this.QuestionLength = allQuestion.length
 this.question = allQuestion[this.index].question
 this.incorrect_answers = allQuestion[this.index].incorrect_answers
 this.answered = false
this.correct_answer =allQuestion[this.index].correct_answer
this.allChoices = [this.correct_answer,...this.incorrect_answers].sort()
console.log('index',this.index)
console.log('category',this.category)
console.log('correct answer',this.correct_answer)
console.log('incorrect answer',this.incorrect_answers)
console.log('allchoices',this.allChoices)

  }
  displayQuestion(){
    let cartoona = `
    <div
          class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
        >
          <div class="w-100 d-flex justify-content-between">
            <span class="btn btn-category">${this.category}</span>
            <span class="fs-6 btn btn-questions">${this.index+1} of ${this.QuestionLength}</span>
          </div>
          <h2 class="text-capitalize h4 text-center">${this.question}</h2>  
          <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
          ${this.allChoices.map((choice)=>
            `<li>${choice}</li>`
          ).join("")}
          </ul>
               
</div>
    `
    document.getElementById('question-container').innerHTML = cartoona
    let allAnswers = document.querySelectorAll('.choices li')
    console.log(allAnswers)
    allAnswers.forEach((answer)=>{
      answer.addEventListener('click',(e)=>{
        this.checkAnswer(e.target)
      })
    })
  }
  checkAnswer(userAnswer){
  if(this.answered==true){
    return;
  }
    console.log('user answer',userAnswer)
    if(userAnswer.innerHTML ==this.correct_answer){
     console.log('correct')
     userAnswer.classList.add('correct')
     quiz.score++
     console.log('score',quiz.score)
    }
    else{
      console.log('incorrect')
      userAnswer.classList.add('wrong')
    }
    this.index++
    this.answered =true
    setTimeout(()=>{
      this.nextQuestion()
    },1000)
    this.animateQuestion(userAnswer)
  }
  animateQuestion(element){
    console.log(element.closest('.question'))
    element.closest('.question').classList.remove('animate__bounceIn')
    element.closest('.question').classList.add('animate__backOutLeft')
  }
  nextQuestion(){
    if(this.index<allQuestion.length){
      let newQuestion = new Question(this.index)
      newQuestion.displayQuestion()
    }
    else{
      console.log('finish')
      document.getElementById('question-container').innerHTML =`
      <div id="tryAgainContainer" class="text-center text-white animate__animated animate__bounceIn">
        <h1>Your Score is <span>${quiz.score}</span></h1>
        <button class="btn btn-danger" id="tryAgainBtn">Try Again</button>
    </div>
     `
     let tryAgainBtn =document.getElementById('tryAgainBtn')
     tryAgainBtn.addEventListener('click',function(){
      window.location.reload()
     })
    }
  }
}

