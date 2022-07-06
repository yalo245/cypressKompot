import {CalendarPage} from "./calendarPage";

export default class OrderPage {
  //AddressFields
  addressLine1 = () => cy.get('#addressLine1');
  addressLine2 = () => cy.get('#addressLine2');
  city = () => cy.get('#city');
  stateDropdown = () => cy.get('#StateClick');
  stateList = state => cy.get('[role="listbox"]').contains(state);
  zipCode = () => cy.get('#zipCode');
  additionalInfo = () => cy.get('#additionalInfo');
  saveButton = () => cy.contains('Save');
  createNewAddress = () => cy.get('[value="createNewAddress"]')

  ordersAddIcon = () => cy.get('[id="orders"]').parent('div').find('[role="button"]');


  createOrderFromClient(firstName, lastName) {
    this.ordersAddIcon().click();
  }

  submitForm() {
    this.saveButton().click();
    return this;
  }

  fillOutAddressFields(address) {
    this.addressLine1().clear().type(address.addressLine1);
    if (address.addressLine2) this.addressLine2().clear().type(address.addressLine2);
    this.city().clear().type(address.city);
    this.zipCode().clear().type(address.zipCode);
    this.selectState(address.state);
    this.additionalInfo().clear().type(address.additionalInfo);
  }

  selectState(state) {
    this.stateDropdown().click();
    this.stateList(state).click();
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

  timePikerStartTime() {
    cy.get('[data-testid="ClockIcon"]').first().click()
    cy.get('[role="listbox"]').contains('10').click({force:true})
    cy.get('[data-testid="ClockIcon"]').first().click()
      // .then(role => {
      //   cy.wrap(role)
        //cy.get('[role="option"]').contains('10').click({force:true})
    //   cy.get('[data-testid="ArrowRightIcon"]').click()
    // cy.get('[role="listbox"]').find('[role="option"]').contains('25').click({force:true})
      // .then(role => {
      //   cy.wrap(role)
      //   cy.get('[role="option"]').contains('25').click({force:true})

    //cy.get('[qa_id="InputStartDate"]').should('have.value', '06/14/2022')
  }

  radioButtonCheck() {
    cy.get('.ant-radio-group').find('[type="radio"]').then(radioButtons => {
      cy.wrap(radioButtons)
        .first()
        .check({force: true})
        .should('be.checked')

      cy.wrap(radioButtons)
        .eq(1)
        .check({force: true})

      cy.wrap(radioButtons)
        .first()
        .should('not.be.checked')

      cy.wrap(radioButtons)
        .eq(2)
        .should('not.be.checked')
    })
  }
}
