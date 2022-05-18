
export default class ClientPage {

  createBtn = () => cy.get('[data-qa="create-client-button"]').should('contain', 'Create Client')
  headerCreateNewClient = () => cy.get('[data-qa="page-title"]').should('contain', 'Create New Client')
  additionalPhoneNumber = () => cy.get('[type="button"]').should('contain', '+ Add Phone Number');
  saveBtn = () => cy.get('[type="submit"]').contains('Save')
  headerClients = () => cy.get('[data-qa="page-title"]')
  linkClient = () => cy.get('[href="/client"]');
  cancelBtn = () => cy.get('[type="button"]').contains('Cancel')


  //PLACEHOLDER
  firstNamePlaceholder = () => cy.get('[id="firstName"]');
  lastNamePlaceholder = () => cy.get('#lastName');
  companyPlaceholder = () => cy.get('[id="company"]');
  emailPlaceholder = () => cy.get('#email');
  phoneNumberPlaceholder = () => cy.get('[id="phone"]')
  addressLine1Placeholder = () => cy.get('#addressLine1');
  cityPlaceholder = () => cy.get('#city');
  statePlaceholder = () => cy.get('[id="StateClick"]');
  stateDropdown = () => cy.get('[role="listbox"]')
  zipCodePlaceholder = () => cy.get('#zipCode');


  placeholderAreCorrect() {
    const key = ["First Name", "Last Name", "Company Name", "Phone", "Ext", "E-mail",
      "Address", "Unit", "City", "State", "Zip"]
    cy.get('.MuiBox-root.css-0')
      .find('.MuiOutlinedInput-root')
      .each((el, i) => {
        cy.wrap(el).then(value => {
          const itemText = value.text().trim()
          expect(itemText).contains(key[i])

        })
      })
    this.additionalPhoneNumber().should('be.visible');
    this.cancelBtn().click()
  }

}
