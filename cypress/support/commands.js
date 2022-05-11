import LoginPage from './page_object/loginPage';


const loginPage = new LoginPage();


Cypress.Commands.add('login', (email, password) => {
  loginPage.open('user/login')
  loginPage.logIn()

});

Cypress.Commands.add('logOut', (email, password) => {
  loginPage.dropdownUserProfile().click();
  loginPage.logout().click();

});


