function selectDay(day) {
  let date = new Date()
  date.setDate(date.getDate() + day)
  let futureDay = date.getDate()
  let futureDayTwoDig = date.toLocaleDateString(`default`, {day:`2-digit`})
  let futureMonth = date.toLocaleString('default', {month: 'long'})
  let monthNum = date.toLocaleDateString(`en`, {month:`2-digit`})
  let dateAssert = monthNum+'/' +futureDayTwoDig +'/'+ date.getFullYear()

  cy.get('div[class="PrivatePickersFadeTransitionGroup-root css-1bx5ylf"]>div').first()
    .invoke('text').then(dateAttribute => {
    if (!dateAttribute.includes(futureMonth)) {
      cy.get('[data-testid="ArrowRightIcon"]').click({force:true})
      selectDay(day)
    } else {
      cy.get('.MuiPickersDay-root').contains(futureDay).click({force:true})
    }
  })
  return dateAssert
}

export class CalendarPage{

  selectStartDayFromToday(startDay){
    cy.get('[data-testid="CalendarIcon"]').first().click()
      let dateAssert = selectDay(startDay)
      cy.get('[qa_id="InputStartDate"]').should('have.value', dateAssert)
  }

  selectEndDayFromToday(endDay){
      cy.get('[data-testid="CalendarIcon"]').last().click()
      let dateAssertEnd = selectDay(endDay)
      cy.get('[qa_id="InputEndDate"]').should('have.value', dateAssertEnd)
  }
}

export const calendarPage = new CalendarPage()