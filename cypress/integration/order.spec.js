import ClientPage from "../support/page_object/clientPage";
import {client} from "../fixtures/example.json";
import OrderPage from "../support/page_object/orderPage";
import {calendarPage} from "../support/page_object/calendarPage";

const clientPage = new ClientPage();
const orderPage = new OrderPage()

describe('ORDER', () => {
  before('login', () => {
    cy.login()
  });

  beforeEach(()=>{
    Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
  });

  describe('Order create from full form card', () => {
    it('Datepiker', () => {
      clientPage.linkClient().click();
      clientPage.clientFullForm(client.firstName, client.lastName);
      orderPage.createOrderFromClient(client.firstName, client.lastName)
      calendarPage.selectStartDayFromToday(3)
      calendarPage.selectEndDayFromToday(9)
      //orderPage.timePikerStartTime()
    })
  })
})
