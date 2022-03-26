describe("Forms test", () => {
    it('cy.request() - make an XHR request', () => {
        cy.visit('/universities-of-the-world');
        cy.get('.table').find('tr').should('have.length', 9783)
    cy.contains('United States');
    cy.contains('lpu.in');
    cy.contains(' Moscow State University of Commerce');
    cy.contains(' kanagawa-u.ac.jp');
       })

       it('cy.request() - ', () => {
        cy.visit('/universities');
        cy.get("input[name='country']").type('qatar');
        cy.get("button").click()
    cy.contains('qatar');
       

  });

});
  