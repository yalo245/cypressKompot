import LoginPage from './page_object/loginPage';
import {navigateTo} from "./page_object/navigationPage";
import ClientPage from "./page_object/clientPage";


const loginPage = new LoginPage();
const clientPage = new ClientPage();


Cypress.Commands.add('login', (email, password) => {
  loginPage.open('user/login')
  loginPage.logIn()

});

Cypress.Commands.add('logOut', (email, password) => {
  loginPage.dropdownUserProfile().click();
  loginPage.logout().click();

});

Cypress.Commands.add('createClientAllData', (firstNameNumbers, lastName, phoneNumber, address, city, email, company, zip) => {
  navigateTo.clientPageIsOpen()
  clientPage.createBtn().first().click();
  clientPage.firstNamePlaceholder().type(firstNameNumbers);
  clientPage.lastNamePlaceholder().type(lastName);
  clientPage.companyPlaceholder().type(company);
  clientPage.phoneNumberPlaceholder().type(phoneNumber);
  clientPage.addressLine1Placeholder().type(address);
  clientPage.emailPlaceholder().type(email);
  clientPage.statePlaceholder().click();
  clientPage.stateDropdown().contains('California').click();
  clientPage.cityPlaceholder().type(city);
  clientPage.zipCodePlaceholder().type(zip);
  clientPage.saveBtn().click();
  clientPage.linkClient().click()
  clientPage.headerClients().should('contain', 'Clients');
});



