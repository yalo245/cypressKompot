

export  class NavigationPage{

  clientPageIsOpen(){
    cy.get('[href="/client"]').click()
    cy.get('[data-qa="page-title"]').should('contain', 'Clients')
    cy.get('[data-qa="create-client-button"]').should('contain', 'Create Client')
  }

  orderPageIsOpen(){
    cy.contains('Orders').click({forse: true})
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

  schedulePageIsOpen(){
    cy.contains('Schedule').click()
    cy.get('.fs-5.fw-bolder.text-black').should('contain', 'Schedule')
  }

  humburgerDropdown(){
    cy.get('nav .ant-dropdown-link.pointer.item').click()
    const humburger = ['Workers', 'Addresses', 'Vendors', 'Products', 'Purchase Orders', 'Absences'];
    for (let i = 0; i < humburger.length; i++){
      cy.get('.ant-dropdown-menu-title-content').contains(humburger[i])
    }
  }
}

export const navigateTo = new NavigationPage()
