import LoginPage from './page_object/loginPage';


const loginPage = new LoginPage();


Cypress.Commands.add('login', () => {
  loginPage.open('user/login')
  loginPage.logIn()

});



