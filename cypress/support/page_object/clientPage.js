
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
  phoneCodePlaceholder = () => cy.get('[aria-label="Select country"]');
  createNewClientText = () => cy.get('.ant-drawer-title');
  clientDetails = () => cy.contains('Client Details');
  serviceAddress = () => cy.contains('Address');
  codeDropdown = () => cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9');
  header = () => cy.get('[data-qa="page-title"]').contains('Clients');


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

  phoneCodesAreCorrect() {
    this.phoneCodePlaceholder().click({ force: true });
    const codes = ['Afghanistan', 'Albania', 'Andorra', 'Anguilla', 'Antigua and Barbuda',
      'Argentina', 'Armenia', 'Aruba', 'Austria', 'Azerbaijan', 'Bahamas', 'Bangladesh',
      'Barbados', 'Belarus', 'Belgium', 'Belize', 'Bermuda', 'Bhutan', 'Bolivia',
      'Bosnia and Herzegovina', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Cambodia', 'Canada',
      'Caribbean Netherlands', 'Cayman Islands', 'Chile', 'China', 'Colombia', 'Costa Rica',
      'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Dominica',
      'Dominican Republic', 'Ecuador', 'El Salvador', 'Estonia', 'Falkland Islands',
      'Faroe Islands', 'Finland', 'France', 'French Guiana', 'Georgia', 'Germany',
      'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guatemala',
      'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India',
      'Indonesia', 'Ireland', 'Italy', 'Jamaica', 'Japan', 'Kazakhstan', 'Kosovo',
      'Kyrgyzstan', 'Russia', 'Saint Barthélemy', 'Saint Kitts and Nevis', 'Saint Lucia',
      'Taiwan', 'Tajikistan', 'Thailand', 'Trinidad and Tobago',
      'Turkey', 'Turkmenistan', 'Timor-Leste', 'Turks and Caicos Islands', 'Tuvalu',
      'U.S. Virgin Islands', 'Ukraine', 'United Kingdom',
      'United States', 'Uruguay', 'Uzbekistan',
      'Vatican City', 'Venezuela','Vietnam'];
    for (let i = 0; i < codes.length; i++){
      this.codeDropdown()
    }
  }

  clientCreated(firstName, lastName, address, phoneNumber, email, company){
    cy.get('tbody tr').contains('tr', firstName).then( tableRow => {
      cy.wrap(tableRow).find('td').eq(1).should('contain', `${firstName} ${lastName}`)
      cy.wrap(tableRow).find('td').eq(2).should('contain', `${address}`)
      cy.wrap(tableRow).find('td').eq(3).should('contain', `${phoneNumber}`)
      cy.wrap(tableRow).find('td').eq(4).should('contain', `${email}`)
      cy.wrap(tableRow).find('td').eq(5).should('contain', `${company}`)
    })
    this.header().should('be.visible');
  }

}
