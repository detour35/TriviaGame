

var questions = [
  {
    question: 'What material is the UFC Belt made of?',
    answers: ['Silver', 'Bronze', 'Platinum', 'Gold'],
    correct: 0
  },
  {
    question: 'What is Tito Ortiz real name?',
    answers: ['Jacob', 'Andrew', 'Jose', 'Nick'],
    correct: 0
  },
  {
    question: 'How many years of experience fighting does Dana White have?',
    answers: ['1', '0', '4', '5'],
    correct: 1
  },
  {
    question: 'What other show does Mike Goldberg commentate for?',
    answers: ['Red Bull Air Race Championship', 'Monster Trucks', 'Ultimate Fighter', 'Battlebots'],
    correct: 0
  },
  {
    question: 'Who was the first black belt under the Gracie family?',
    answers: ['George St. Pierre', 'Tj Dillashaw', 'Nick Diaz', 'Matt Serra'],
    correct: 3
  },
  {
    question: 'What does Bruce Buffer have a black belt in?',
    answers: ['Judo', 'Tang Soo Do', 'JKD', 'TKD'],
    correct: 1
  },
  {
    question: 'Who has the most KO wins in MMA History?',
    answers: ['Connor McGregor', 'Nate Diaz', 'Travis Fulton', 'Daniel Cormier'],
    correct: 2
  },
  {
    question: 'Who has the second most submission wins in UFC History?',
    answers: ['Robbie Lawler', 'Urijah Faber', 'Jeremy Horn', 'Forrest Griffin'],
    correct: 2
  },
  {
    question: 'Who won the first 155lb UFC belt?',
    answers: ['Mike Tyson', 'Anderson SIlva', 'Floyd Mayweather', 'BJ Penn'],
    correct: 3
  },
  {
    question: 'Who was America First MMA Fighter?,
    answers: ['Robert Taft', 'Ben Franklin', 'Theodore Roosevolt', 'Abraham Lincoln'],
    correct: 2
  }
]

var Counter = 0;
  
  // METHOD 1
//   answers to first question

function displayQuestion() {

  var questionObject = questions[Counter];

  $("#question").append(questionObject.question);

  for(var i = 0; i<questionObject.answers.length; i++ ) {

    var answerBut = $("<button>");
    answerBut.attr("class","answer");
    answerBut.attr("data-input", questionObject.answers[i]);

    if(questionObject.correct == i){
      answerBut.attr("data-correct", true);
      Counter++

    }
    else {
      answerBut.attr("data-correct", false);
      Counter--
    }

    $(".answers").append(answerBut);

  }

}

displayQuestion();

$(document).on("click", ".answer", function () {
  
  //check if they are correct here by getting the data-correct attribute out of 'this'
  var correct = $(this).attr("data-correct");
  // if user guess equals data

})




  
// METHOD 2

/*
var answerDivs = $('.answer');

for (var i = 0; i < answerDivs.length; i++) {
  $(answerDivs[i]).html(question1.answers[i])
}
*/
