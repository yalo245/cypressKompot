

export  class NavigationPage{

  clientPageIsOpen(){
    cy.get('[href="/client"]').click()
    cy.get('[data-qa="page-title"]').should('contain', 'Clients')
    cy.get('[data-qa="create-client-button"]').should('contain', 'Create Client')
  }

  orderPageIsOpen(){
    cy.contains('Orders').click()
    cy.get('[data-qa="page-title"]').should('contain', 'Orders')
    cy.get('[type="button"]').should('contain', 'Create Order')
  }

  estimatesPageIsOpen(){
    cy.contains('Estimates').click()
    cy.get('[data-qa="page-title"]').should('contain', 'Estimates')
    cy.get('[type="button"]').should('contain', 'New Estimate')
  }

  invoicesPageIsOpen(){
    cy.contains('Invoices').click()
    cy.get('[data-qa="page-title"]').should('contain', 'Invoices')
    cy.get('[type="button"]').should('contain', 'Create Invoice')
  }

  paymentsPageIsOpen(){
    cy.contains('Payments').click()
    cy.get('[data-qa="page-title"]').should('contain', 'Payments')
    cy.get('[type="button"]').should('contain', 'Create Payment')
  }
}

export const navigateTo = new NavigationPage()
