import {navigateTo} from "../support/page_object/navigationPage";

describe('Login successful', () => {
  it('Login successful', () => {
      cy.login()
  })
})

describe('Base page navbar links', () => {
  it('Base page navbar links', () => {
    navigateTo.clientPageIsOpen()
    navigateTo.orderPageIsOpen()
    navigateTo.estimatesPageIsOpen()
    cy.wait(500)
    navigateTo.invoicesPageIsOpen()
    navigateTo.paymentsPageIsOpen()



  })
})