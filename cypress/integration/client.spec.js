import {navigateTo, NavigationPage} from "../support/page_object/navigationPage";
import ClientPage from "../support/page_object/clientPage";
import { client } from '../fixtures/example.json';

const clientPage = new ClientPage();

describe('CLIENT', () => {
  before('Login', ()=> {
    cy.login()
  });

  beforeEach(()=>{
    Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
  })
  describe('Client page', () => {
    it('Client page', () => {
      navigateTo.clientPageIsOpen()
    })

    it('Client create placeholder are correct ', () => {
      clientPage.createBtn().click()
      clientPage.headerCreateNewClient()
      clientPage.placeholderAreCorrect()


    })

    it('Codes list in dropdown menu are correct', () => {
      clientPage.createBtn().click();
      clientPage.phoneCodesAreCorrect();
      clientPage.codeDropdown().contains('United States').click();
      clientPage.cancelBtn().click();
    });

    it('Client create ', () => {
      cy.createClientAllData(client.firstName, client.lastName, client.phoneNumber, client.address, client.city, client.email, client.company, client.zip)
    });

    it('Client dashboard has correct data when client created', function () {
      cy.createClientAllData(client.firstName, client.lastName, client.phoneNumber, client.address, client.city, client.email, client.company, client.zip)
      clientPage.clientCreated(client.firstName, client.lastName, client.address, client.phoneNumber, client.email, client.company);
    });

    it('TC-Clients-053 User can see "Full Client form" when client created', function(){
      cy.createClientAllData(client.firstName, client.lastName, client.phoneNumber, client.address, client.city, client.email, client.company, client.zip)
      clientPage.clientFullForm(client.firstName, client.lastName);
      clientPage.linkClient().click();
    });

    it('TC-Clients-030 Elements exist on left side Related Lists, Full form',function () {
      cy.createClientAllData(client.firstName, client.lastName, client.phoneNumber, client.address, client.city, client.email, client.company, client.zip)
      clientPage.clientFullForm(client.firstName, client.lastName);
      //clientPage.clientLeftRelatedListPresent();
      clientPage.leftSideBar()
      clientPage.linkClient().click();

    });
  })
})