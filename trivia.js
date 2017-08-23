var statements = [
  {statement: 'The Beatles song Ticket To Ride is about prostitution',
  answer: true },
  {statement: 'The Dark Side of the Moon album by Pink Floyd is about their first lead singer Syd Barret',
  answer: true },
  {statement:'Bono the lead singer of "U2" is of British origin',
  answer: false },
  {statement: 'Marilyn Manson starred as Paul Pfeiffer on hit TV show The Wonder Years',
  answer: false },
  {statement: 'Robert Schumann would often plunge his hands into the entrails of a slaughtered animal to heal his ailments',
  answer: true },
  {statement: 'Leo Fender who developed the first solid body electric guitar and electric bass guitar was also an accomplished musician',
  answer: false },
  {statement: 'For every 1000 dollars in music sold, the average musician makes 200 dollars',
  answer: false },
  {statement: 'Sex, eating, and music all release dopamine, the pleasure chemical in the brain',
  answer: true },
  {statement: 'In 1981 Queen and David Bowie recorded Under Pressure during a 24 hour wine and cocaine marathon',
  answer: true },
  {statement: 'Keith Richards of the Rolling Stones had a full blood transfusion in 1973 in a Swiss clinic to remove all the toxins from his system',
  answer: false }
]

  var trueButton = $('#true')
  var falseButton = $('#false')
  var questions = 0

  trueButton.on('click', checkTrueStatement)
  falseButton.on('click', checkFalseStatement)

if(questions === 0) {
  for(i = 0; i < statements.length; i++) {
  $('.statement').html(statements[0].statement)
  }
}
/*if(answers === 0) {
  for(i = 0; i <statements.length; i++) {
  }
}*/

function checkTrueStatement() {
  console.log(trueButton.text())
  console.log(statements[questions].answer)
  var buttonText = (trueButton.text() === "True")

  if(buttonText === statements[questions].answer) {
    alert('Correct!')
//    $('.statement').html(statements[answers].statement)
  } else {
    alert('Incorrect!')
//    $('.statement').html(statements[answers].statement)
  }
  //return answers++
  questions++
  $('.statement').html(statements[questions].statement)
}

function checkFalseStatement() {
  var buttonText = (trueButton.text() === "False")

  if(buttonText === statements[questions].answer) {
    alert('Correct!')
//    $('.statement').html(statements[answers].statement)
  } else {
    alert('Incorrect!')
//    $('.statement').html(statements[answers].statement)
  }
//  return answers++
questions++
$('.statement').html(statements[questions].statement)
}
