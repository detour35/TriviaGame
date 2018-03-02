$('#start').on('click', function () {
  // $('#start').remove();
  // $('#subwrapper').remove();
  game.start();
  //  Append a radio button to the name of every question and a value that is equal to the answer
  // to store the value inside of the button 
  for (var i = 0; i < questions.length; i++) {
    $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
    for (var j = 0; j < questions[i].answers.length; j++) {
      $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
    }
  }
})

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
    question: 'Who was America First MMA Fighter?',
    answers: ['Robert Taft', 'Ben Franklin', 'Theodore Roosevolt', 'Abraham Lincoln'],
    correct: 2
  }
];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 10,
  countdown: function () {
    game.counter--;
    $('#counter').html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  start: function () {
    timer = setInterval(game.countdown, 1000);
    //  add "time remaining to the game"
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter"> 10</span> Seconds</h2>');


    //  Append a radio button to the name of every question and a value that is equal to the answer
    // to store the value inside of the button 
    for (var i = 0; i < questions.length; i++) {
      $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
      }
    }
  },
  done: function () {
    // looking for any input type that has the name of _ and is currently a checked box
    $.each($('input[name="question-0]":checked'), function () {
      if ($(this).val() == questions[0].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    })
    $.each($('input[name="question-1]":checked'), function () {
      if ($(this).val() == questions[1].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    })
    $.each($('input[name="question-2]":checked'), function () {
      if ($(this).val() == questions[2].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    })
    $.each($('input[name="question-3]":checked'), function () {
      if ($(this).val() == questions[3].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    })
    $.each($('input[name="question-4]":checked'), function () {
      if ($(this).val() == questions[4].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    })
    $.each($('input[name="question-5]":checked'), function () {
      if ($(this).val() == questions[5].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    })
    $.each($('input[name="question-6]":checked'), function () {
      if ($(this).val() == questions[6].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    })
    $.each($('input[name="question-7]":checked'), function () {
      if ($(this).val() == questions[7].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    })
    $.each($('input[name="question-8]":checked'), function () {
      if ($(this).val() == questions[8].correct) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },

  result: function () {
    clearInterval(timer);
    $('#subwrapper').remove();

    $('#subwrapper').html("<h2>All done!</h2>");
    $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
    $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
  }
}






















// var Counter = 0;

// // METHOD 1
// //   answers to first question

// function displayQuestion() {

//   var questionObject = questions[Counter];

//   $("#question").append(questionObject.question);

//   for (var i = 0; i < questionObject.answers.length; i++) {

//     var answerBut = $("<button>");
//     answerBut.attr("class", "answer");
//     answerBut.attr("data-input", questionObject.answers[i]);
//     var newButton = answerBut.html(questionObject.answers[i]);

//     if (questionObject.correct == i) {
//       answerBut.attr("data-correct", true);
//       Counter++

//     }
//     else {
//       answerBut.attr("data-correct", false);
//       Counter--
//     }

//     $(".answers").append(answerBut);

//   }





//   $("button.answer").on("click", function () {




//     //check if they are correct here by getting the data-correct attribute out of 'this'
//     var correct = $(this).attr("data-correct");
//     console.log("I've been clicked");
//     displayQuestion();
//     // if user guess equals data
//   })
// }
// displayQuestion();




// // METHOD 2

// /*
// var answerDivs = $('.answer');

// for (var i = 0; i < answerDivs.length; i++) {
//   $(answerDivs[i]).html(question1.answers[i])
// }
// */
