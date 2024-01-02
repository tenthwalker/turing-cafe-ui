//page load
describe('calls the API', () => {
  it('shows the reservation cards from the fetch', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: 'apiResponse1',
    }).as('apiRequest1');
    cy.visit('/');
    cy.wait('@apiRequest1');
    cy.get('.card').should('contain', 'Christie');
    cy.get('.card').should('contain', 'Eric');
  })
})

// describe(() => {
//   it(() => {

//   })
// })

//submission form

describe(() => {
  it(() => {

  })
})

// describe(() => {
//   it(() => {

//   })
// })