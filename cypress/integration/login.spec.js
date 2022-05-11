import {navigateTo} from "../support/page_object/navigationPage";

describe('Login successful', () => {
  it('Login successful', () => {
      cy.login()
  })
})

beforeEach(()=>{
  Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
})

describe('Base page navbar links', () => {
  it('Base page navbar links', () => {
    navigateTo.clientPageIsOpen()
    navigateTo.orderPageIsOpen()
    navigateTo.estimatesPageIsOpen()
    navigateTo.invoicesPageIsOpen()
    navigateTo.paymentsPageIsOpen()
    navigateTo.schedulePageIsOpen()
    navigateTo.humburgerDropdown()
  })
})

describe('Logout successful', () => {
  it('Logout successful', () => {
    cy.logOut()
  })
})