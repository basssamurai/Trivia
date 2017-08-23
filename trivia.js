var statements = [
  {statementOne: 'The Beatles song Ticket To Ride is about prostitution'
  answerOne: true }
  {statementTwo: 'The Dark Side of the Moon album by Pink Floyd is about their first lead singer Syd Barret'
  answerOne: true}
  {statementThree:'Bono the lead singer of "U2" is of British origin'
  answerThree: false}
  {statementFour: 'Marilyn Manson starred as Paul Pfeiffer on hit TV show The Wonder Years'
  answerFour: false}
  {statementFive: 'Robert Schumann would often plunge his hands into the entrails of a slaughtered animal to heal his ailments'
  answerFive: true}
  {statementSix: 'Leo Fender who developed the first solid body electric guitar and electric bass guitar was also an accomplished musician'
  answerSix: false}
  {statementSeven: 'For every 1000 dollars in music sold, the average musician makes 200 dollars'
  answerSeven: false}
  {statementEight: 'Sex, eating, and music all release dopamine, the pleasure chemical in the brain'
  answerEight: true}
  {statementNine: 'In 1981 Queen and David Bowie recorded Under Pressure during a 24 hour wine and cocaine marathon'
  answerNine: true}
  {statementTen: 'Keith Richards of the Rolling Stones had a full blood transfusion in 1973 in a Swiss clinic to remove all the toxins from his system'
  answerTen: false}





var trueButton = $('#true')
var falseButton = $('#false')




function checkStatementOne(buttonClick) {

  }

function buttonClick() {
  trueButton.on('click', checkStatement)
  falseButton.on('click', checkStatement)
}
