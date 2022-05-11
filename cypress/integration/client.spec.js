import {navigateTo, NavigationPage} from "../support/page_object/navigationPage";
import ClientPage from "../support/page_object/clientPage";

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

    it('Client create', () => {
      clientPage.createBtn().click()
      clientPage.headerCreateNewClient()
    })
  })
})