export class Quiz{
    constructor(category,difficulty,amout){
       this.category = category;
       this.difficulty=difficulty;
       this.amout=amout;
       this.score=0;
    }

  async  getQuizQuestions(){
     let response = await fetch(`https://opentdb.com/api.php?amount=${this.amout}&category=${this.category}&difficulty=${this.difficulty}`);
     let data = await response.json();
     return data.results;
    }
}