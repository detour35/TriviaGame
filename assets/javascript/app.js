

var questions = [
  {
    question: 'What middle school did I go to?',
    answers: ['Smithtown East', 'Nesconset', 'Northport', 'Huntington'],
    correct: 0
  },
  {
    question: 'What high school did I go to?',
    answers: ['Smithtown', 'St James', 'Nesconset', 'Patchogue'],
    correct: 0
  },
  {
    question: 'What college did I go to?',
    answers: ['SUNY Albany', 'SUNY New Paltz', 'SUNY Stony Brook', 'SUNY Plattsburgh'],
    correct: 1
  },
  {
    question: 'What city in France did I live in?',
    answers: ['Besancon', 'Paris', 'Lille', 'Nice'],
    correct: 0
  },
  {
    question: 'What city in Poland do I live in?',
    answers: ['Warsaw', 'Garwolin', 'Celestynow', 'Pilawa'],
    correct: 3
  },
  {
    question: 'What school in France did I attend?',
    answers: ['CLA', 'Universite de France Comte', 'Sorbonne', 'Universite de Lille'],
    correct: 1
  },
  {
    question: 'How long does it take to get from Besancon France to Paris?',
    answers: ['2 hours', '3 hours', '4 hours', '5 hours'],
    correct: 2
  },
  {
    question: 'How long does it take to get from Pilawa Poland to Warsaw?',
    answers: ['1 hours', '2 hours', '3 hours', '4 hours'],
    correct: 1
  },
  {
    question: 'What did I study in College?',
    answers: ['Economics', 'Physics', 'Math', 'Linguistics'],
    correct: 3
  },
  {
    question: 'How long did it take me to finish college?',
    answers: ['3 years', '4 years', '5 years', '6 years'],
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
