describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.duckduckgo.com');
    
    cy.get('#searchbox_input').type("Automation Testing Guide{enter}");
    
    // cy.get('.searchbox_searchButton__LxebD').click();

    cy.get(':nth-child(1) > [data-testid="result"] > .ikg2IXiCD14iVX7AdZo1 > .LnpumSThxEWMIsDdAT17 > [data-testid="result-title-a"] > .EKtkFWMYpwzMKOYr0GYm').should("contain", "Automation")
  })
})