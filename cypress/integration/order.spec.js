import ClientPage from "../support/page_object/clientPage";
import {client} from "../fixtures/example.json";
import OrderPage from "../support/page_object/orderPage";

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
      // orderPage.datePikerStartTime()

      function selectDay(day) {
        let date = new Date()
        date.setDate(date.getDate() + day)
        let futureDay = date.getDate()
        let futureDayTwoDig = date.toLocaleDateString(`default`, {day:`2-digit`})
        let futureMonth = date.toLocaleString('default', {month: 'long'})
        let monthNum = date.toLocaleDateString(`en`, {month:`2-digit`})
        let dateAssert = monthNum+'/' +futureDayTwoDig +'/'+ date.getFullYear()

        cy.get('div[class="PrivatePickersFadeTransitionGroup-root css-1bx5ylf"]>div').first()
          .invoke('text').then(dateAttribute => {
            if (!dateAttribute.includes(futureMonth)) {
              cy.get('[data-testid="ArrowRightIcon"]').click({force: true})
              selectDay(day)
            } else {
              cy.get('[role="cell"]').contains(futureDay).click({force: true})
            }
          })
        return dateAssert
      }

      cy.get('[data-testid="CalendarIcon"]').first().click({force: true})
        let dateAssert = selectDay(18)

        cy.get('[qa_id="InputStartDate"]').should('have.value', dateAssert)
    })
  })
})
