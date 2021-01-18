var questionCounter = 0;
var score = 0;
var currentTime = 75;

var quizContentEl = document.querySelector("#quiz-content");
var questionContainer = quizContentEl.querySelector("#question-container");
var startBtn = document.querySelector("#start-btn");
var answersEl = document.querySelector(".answer-btn");
var checkerEl = document.querySelector(".checker");
var initalsEL = document.querySelector("#initials");

var questionsObj = [
    {
        question:  'How do you write "Hello World" in an alert box?',
        answersArr: [
            'alertBox("Hello World");',
            'msg("Hello World");',
            'alert("Hello World");',
            'msgBox("Hello World");',
        ],
        correctAnswer: 'alert("Hello World");'

    },
    {
        question:  'How would you round 5.65 to the nearest Interger?',
        answersArr: [
            'Math.closestInter(5.65)',
            'round.Math(5.65)',
            'Math.round(5.65)',
            '.round(5.65)',
        ],
        correctAnswer: 'Math.round(5.65)',

    },
    {
        question:  'Which of the following type of variable is visible everywhere in your JavaScript code?',
        answersArr: [
            "local variable",
            "global variable",
            "None of the above.",
            "Both of the above.",
        ],
        correctAnswer: 'global variable'

    },
    {
        question:  'Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?',
        answersArr: [
            "pop()",
            "pull()",
            "join()",
            "push()",
        ],
        correctAnswer: 'push()'

    },
    {
        question:  'Which is not a javascrip data type',
        answersArr: [
            "Number",
            "String",
            "word",
            "Object",
        ],
        correctAnswer: 'word'

    },
    
]

function quizStart() {
    var introEl = document.querySelector("#intro");
    introEl.setAttribute("class", "hide");
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
    getQuestion();
}

function getQuestion() {

    //create container for current question & answers in the DOM
    var createQuestion = document.createElement("li");
    createQuestion.className ="question-item";

    //create the Question
    var question = document.createElement("h1");
    question.className = "question-value";
    question.innerHTML = questionsObj[questionCounter].question; 
    

    // create answer container
    var answerContainer = document.createElement("div");
    answerContainer.className = "answers-container";
    

    for( j = 0; j < questionsObj[questionCounter].answersArr.length; j++) {

        var answer = document.createElement("button");
        answer.className = "btn answer-btn";
        var answerValue = questionsObj[questionCounter].answersArr[j];
        answer.setAttribute("value",answerValue);
        answer.innerHTML = answerValue;

        answerContainer.appendChild(answer);

    
      answer.onclick = answerCheck;

        
        
    } // End for loop
    

    questionContainer.appendChild(createQuestion);
    createQuestion.appendChild(question);
    createQuestion.appendChild(answerContainer);
}

function answerCheck() {
    console.log('checking answers');

    var userAnswer = event.target.textContent;
    var correctAnswer = questionsObj[questionCounter].correctAnswer;
        console.log("this is user anwer " + userAnswer);
        console.log("this is the correct answer " + correctAnswer)

        if(userAnswer === correctAnswer) {
            document.querySelector('.checker').innerHTML = "<h2>Correct!</h2>";
            score++;
            
        }
        else {
            document.querySelector('.checker').innerHTML = "<h2>Wrong!</h2>";
            currentTime = currentTime - 5;
        }


    // next question
    document.querySelector(".question-item").remove();
    questionCounter++;

    // check if we've run out of questions
    if (questionCounter === questionsObj.length) {
    // show end screen
    var endScreenEl = document.querySelector("#finished");
    endScreenEl.removeAttribute("class");
  
    // show final score
    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = score;
  
    // hide questions section
    
    } else {
    getQuestion();
    }
}

function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value();
  
    // make sure value wasn't empty
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      // format new score object for current user
      var newScore = {
        score: time,
        initials: initials
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = "highscores.html";
    }
  }
  



startBtn.onclick = quizStart;