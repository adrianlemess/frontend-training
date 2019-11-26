
describe('Firestarter', () => {

  it('has a heading', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Welcome to angular-services!');
    // or...
    cy.get('h1').should('contain', 'Welcome to angular-services!');

  });

});
