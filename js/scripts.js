var startBtn = document.querySelector(".start-btn");

var questionsArray = [
    {
        question1Obj:  "this is question 1",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",

    },

    {
        question1Obj:  "this is question 2",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",

    },
    
    {
        question1Obj:  "this is question 3",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",

    },
    
    {
        question1Obj:  "this is question 4",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",

    }
]
var answersArray = [
    {}
]
var beginQuiz = function() {
    console.log('lets begin');
}

startBtn.addEventListener("click", beginQuiz);

