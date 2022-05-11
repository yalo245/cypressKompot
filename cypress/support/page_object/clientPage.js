
export default class ClientPage {
  createBtn = () => cy.get('[data-qa="create-client-button"]').should('contain', 'Create Client')
  headerCreateNewClient = () => cy.get('[data-qa="page-title"]').should('contain', 'Create New Client')
}