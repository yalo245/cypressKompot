

export default class LoginPage {

  emailField = () => cy.get('[id="email"]');
  passwordField = () => cy.get('[id="password"]');
  submitBtn = () => cy.get('[type="submit"]').contains('Log in');
  headerBase = () => cy.get('.col-md-8');

  dropdownUserProfile = () => cy.get('.rounded-circle');
  logout = () => cy.get('[data-qa="logout"]');

  open(path) {
    cy.visit(path);
  }

  logIn() {
    this.emailField().type('test@gmail.com');
    this.passwordField().type('Qwerty12');
    this.submitBtn().click();
    this.headerBase().should('be.visible', 'Reports')
  };


  logOut() {
    this.dropdownUserProfile().click();
    this.logout().click();
  }
}

