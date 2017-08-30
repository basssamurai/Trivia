// Good use of object literals to encapsulate your program data
// One suggestion I'd make is to convert answer from a boolean to a string, like this:
// {
//   statement: 'The Beatles song Ticket To Ride is about prostitution',
//   answer: "true"
// }
// I suggest this because the way that you are checking answers can be simplified by this change,
// since you are using the button text to compare with the answer property of each of your objects
var statements = [
  {
    statement: 'The Beatles song Ticket To Ride is about prostitution',
    answer: true
  }, {
    statement: 'The Dark Side of the Moon album by Pink Floyd is about their first lead singer Syd Barret',
    answer: true
  }, {
    statement:'Bono the lead singer of "U2" is of British origin',
    answer: false
  }, {
    statement: 'Marilyn Manson starred as Paul Pfeiffer on hit TV show The Wonder Years',
    answer: false
  }, {
    statement: 'Robert Schumann would often plunge his hands into the entrails of a slaughtered animal to heal his ailments',
    answer: true
  }, {
    statement: 'Leo Fender who developed the first solid body electric guitar and electric bass guitar was also an accomplished musician',
    answer: false
  }, {
    statement: 'For every 1000 dollars in music sold, the average musician makes 200 dollars',
    answer: false
  }, {
    statement: 'Sex, eating, and music all release dopamine, the pleasure chemical in the brain',
    answer: true
  }, {
    statement: 'In 1981 Queen and David Bowie recorded Under Pressure during a 24 hour wine and cocaine marathon',
    answer: true
  }, {
    statement: 'Keith Richards of the Rolling Stones had a full blood transfusion in 1973 in a Swiss clinic to remove all the toxins from his system',
    answer: false
  }
]

  var trueButton = $('#true')
  var falseButton = $('#false')
  var questions = 0 // I would call this questionCounter

  // you should refactor to replace both the functions referenced below with a single answer-checking functions
  // you can attach click-listeners to all buttons with $('button').click(checkAnswer)
  // you don't yet have a checkAnswer method, but making the change suggested above
  // is one of the first steps in refactoring your answer-checking logic to use
  // just one method. in that one method, you can use $(this) to get the
  // identity of the button clicked on

  // see comments at checkTrueStatement for further guidance
  trueButton.on('click', checkTrueStatement)
  falseButton.on('click', checkFalseStatement)


  if(questions === 0) {
    // the code inside this loop isn't using i, and you therefore don't need the loop
    // this is simply writing the first question to the DOM statements.length number of times
    // you just need this to happen once

    // declare `i`` with let, so you're declaring global variables
    for(i = 0; i < statements.length; i++) {
      $('.statement').html(statements[0].statement)
    }
  }

  // you only need one answer-checking function, here is some advice for refactoring
  // echoing the comment at the beginning of the file, convert the value of your
  // answer properties from booleans to strings. this will help simplify the
  // checking logic. by converting your `.answer` values to strings, you will
  // have the convenience of comparing a string to a string, rather than a string
  // to a boolean. I realize you are using a slightly different method here,
  // but this change i'm suggesting will simplify your code logic.
  // See the comments below for more implementation guidance.

  function checkTrueStatement() {
    var buttonText = trueButton.text() === "True" //we can refactor this method
    // var userAnswer = $(this).text().toLowerCase()
    // 1. $(this) will refer to whatever button was clicked on
    // 2. toLowerCase() will take care of the mismatch in case, "true"/"True"
    if (buttonText /*change to userAnswer*/ === statements[questions].answer) {
      alert('Correct!')
    } else {
      alert('Incorrect!')
    }
    questions++
    $('.statement').html(statements[questions].statement)
  }

  function checkFalseStatement() {

    var buttonText = trueButton.text() === "False"
    if(buttonText === statements[questions].answer) {
      alert('Correct!')
    } else {
      alert('Incorrect!')
    }
    questions++
    $('.statement').html(statements[questions].statement)
  }
