var questionCounter = 0;
var questionContainer = document.querySelector(".question-container");
var main = document.querySelector("main");
var score = 0;
var currentTime = 75;


var questionsObj = [
    {
        question:  '1',
        answersArr: [
            'alertBox("Hello World");',
            'alert("Hello World");',
            'alert(Hello World);',
            'alertmsg("Hello World");',
        ],
        correctAnswer: 'alert("Hello World");'

    },
    {
        question:  '2',
        answersArr: [
            'alertBox("Hello World");',
            'alert("Hello World");',
            'alert(Hello World);',
            'alertmsg("Hello World");',
        ],
        correctAnswer: 'alert("Hello World");'

    },
    {
        question:  '3',
        answersArr: [
            'alertBox("Hello World");',
            'alert("Hello World");',
            'alert(Hello World);',
            'alertmsg("Hello World");',
        ],
        correctAnswer: 'alert("Hello World");'

    },
    {
        question:  '4',
        answersArr: [
            'alertBox("Hello World");',
            'alert("Hello World");',
            'alert(Hello World);',
            'alertmsg("Hello World");',
        ],
        correctAnswer: 'alert("Hello World");'

    },
    {
        question:  '5',
        answersArr: [
            'alertBox("Hello World");',
            'alert("Hello World");',
            'alert(Hello World);',
            'alertmsg("Hello World");',
        ],
        correctAnswer: 'alert("Hello World");'

    },
    {
        question:  '6',
        answersArr: [
            'alertBox("Hello World");',
            'alert("Hello World");',
            'alert(Hello World);',
            'alertmsg("Hello World");',
        ],
        correctAnswer: 'alert("Hello World");'

    },
    {
        question:  '7',
        answersArr: [
            'alertBox("Hello World");',
            'alert("Hello World");',
            'alert(Hello World);',
            'alertmsg("Hello World");',
        ],
        correctAnswer: 'alert("Hello World");'

    },
]
/*
    {
        question:  "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
        answersArr: [
            "pop()",
            "push()",
            "join()",
            "map()"
        ],
        correctAnswer: "push()"

    },
    {
        question:  "How do you round the number 5.35 to the nearest integer?",
        answersArr: [
            "Math.round(5.35)",
            "round.Math(5.35)",
            "mathRound(5.35)",
            "Math.rnd(5.35)"
        ],
        correctAnswer: 'Math.round(5.35)'

    },
    {
        question: "This is question 4",
        answersArr: [
            "answer 1",
            "answer 2",
            "answer 3",
            "correct answer"

        ],
        correctAnswer: "correct answer"

    },

    

    {
        question:  "This is question 5",
        answersArr: [
            "correct answer",
            "answer 2",
            "answer 3",
            "answer 4"

        ],
        correctAnswer: "correct answer"

    }
    ]
*/
    


 var answerBtnHandler = function(event) {
     var targetEl = event.target;
    console.log(answerBtnHandler);
 }
  

var startQuizHandler = function() {
    event.preventDefault();
    document.querySelector(".intro").remove();

    document.querySelector("#timer").innerHTML = "Time: " + currentTime;
        var timeLeft = setInterval(function() {
                currentTime--;
                document.querySelector("#timer").innerHTML = "Time: " + currentTime;
                if(currentTime <= 0) {
                    clearInterval(timeLeft);

                    document.querySelector("#timer").innerHTML = "Time: 00";
                    gameOverFunc();
                    return

                }
        } ,1000);
    var createQuiz = function() {

            // for each question object in array create a question item
            var createQuestion = document.createElement("li");
            createQuestion.className ="question-item";
            createQuestion.setAttribute("question-id", questionCounter);
    
            //create Question
            var question = document.createElement("h1");
            question.className = "question-value";
            question.innerHTML = questionsObj[questionCounter].question; 
            createQuestion.appendChild(question);
            
            
            createAnswers();
    }
    var createAnswers = function() {

            // create answer container
            var answerContainer = document.createElement("div");
            answerContainer.className = "answers";
            createQuestion.appendChild(answerContainer);

            // create a button for each answer
            for( j = 0; j < questionsObj[questionCounter].answersArr.length; j++) {
                var answer = document.createElement("button");
                answer.className = "btn answer-btn";
                answer.innerHTML = questionsObj[questionCounter].answersArr[j];
                answerContainer.appendChild(answer);
       
            } // End for loop
            var correctAnswer = questionsObj[questionCounter].correctAnswer;
            //console.log(correctAnswer);
            
         
        questionContainer.appendChild(createQuestion);

        questionContainer.addEventListener("click", function() {
            var userAnswer = event.target.textContent;

            if(userAnswer === correctAnswer) {
                document.querySelector('.checker').innerHTML = "<h2>Correct!</h2>";
                score++;
               
            }
            else {
                document.querySelector('.checker').innerHTML = "<h2>Wrong!</h2>";
                currentTime = currentTime - 5;
           }
           console.log("score updatd: " + score + " / 5");
           console.log("this is question " + questionCounter);
           questionCounter++;
           console.log("this is question " + questionCounter);
           if(questionCounter >= questionsObj.length) {
               gameOverFunc();
           }
           document.querySelector(".question-item").remove();
           createQuiz();
        });   
    
    }
    createQuiz();
    
}

var gameOverFunc = function() {
    /*
    alert("the game is over");
    document.querySelector(".question-item").remove();
    var gameOver = document.createElement("div");
    gameOver.className = "gameover";

    var gameOverHeading = document.createElement("h1");
    gameOverHeading.textContent = "All done!";

    var finalScore = document.createElement("p");
    finalScore.textContent = "Your final score is " + score;

    // var initialsHolder = document.createElement
    */
}


document.querySelector("#start-btn").addEventListener("click", startQuizHandler);