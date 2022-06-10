export default class OrderPage {

  ordersAddIcon = () => cy.get('[id="orders"]').parent('div').find('[role="button"]');


  createOrderFromClient(firstName, lastName) {
    this.ordersAddIcon().click();
  }

  datePikerStartTime() {
    cy.get('[data-testid="CalendarIcon"]').first().click()
    cy.get('.PrivatePickersSlideTransition-root.css-dhopo2').find('button')
      .then(button => {
        cy.wrap(button)
        cy.get('[role="cell"]').contains('14').click()
      })
    cy.get('[qa_id="InputStartDate"]').should('have.value', '06/14/2022')
  }
}