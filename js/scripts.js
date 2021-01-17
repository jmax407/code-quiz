var questionCounter = 0;
var questionContainer = document.querySelector(".question-container");
var main = document.querySelector("main");
var score = 0;
var currentTime = 75;


var questionsObj = [
    {
        question:  "this is question 1",
        answersArr: ["a","b","c","d"],
        correctAnswer: "b"

    },
    {
        question:  "this is question 2",
        answersArr: ["a","b","c","d"],
        correctAnswer: "b"

    },
]

 var answerBtnHandler = function(event) {
     var targetEl = event.target;
    console.log(answerBtnHandler);
 }
  

var startQuizHandler = function() {
    event.preventDefault();
    document.querySelector(".intro").remove();
    var createQuiz = function() {

        document.querySelector("#timer").innerHTML = "Time: " + currentTime;
        var timeLeft = setInterval(function() {
                currentTime--;
                document.querySelector("#timer").innerHTML = "Time: " + currentTime;
                if(currentTime <= 0) {
                    clearInterval(timeLeft);
                }
        } ,1000);
        
        
        while( questionCounter < questionsObj.length) {
    
            // for each question object in array create a question item
            var createQuestion = document.createElement("li");
            createQuestion.className ="question-item";
            createQuestion.setAttribute("question-id", questionCounter);
    
            //create Question
            var question = document.createElement("h1");
            question.className = "question-value";
            question.innerHTML = questionsObj[questionCounter].question; 
            createQuestion.appendChild(question);
            
            // create answer container
            var answerContainer = document.createElement("div");
            answerContainer.className = "answers";
            createQuestion.appendChild(answerContainer);
    
            // create a button for each answer
            for( j = 0; j < questionsObj[questionCounter].answersArr.length; j++) {
                var answer = document.createElement("button");
                answer.className = "btn";
                answer.innerHTML = questionsObj[questionCounter].answersArr[j];
                answerContainer.appendChild(answer);
       
            } // End for loop
            var correctAnswer = questionsObj[questionCounter].correctAnswer;
            console.log(correctAnswer[questionCounter]);
            var userAnswer = document.querySelector
            if(userAnswer === correctAnswer) {
                document.querySelector('.checker').innerHTML = "<h2>Correct!</h2>";
               score = score++;
            }
            else {
                document.querySelector('.checker').innerHTML = "<h2>Wrong!</h2>";
                currentTime = currentTime - 5;
           }
    
        
         
        questionContainer.appendChild(createQuestion);
        // document.querySelector('.answers').addEventListener("click", answerBtnHandler);
        questionCounter++;
        
        } // End for loop
        
    
    }
    createQuiz();
    
}




document.querySelector("#start-btn").addEventListener("click", startQuizHandler);