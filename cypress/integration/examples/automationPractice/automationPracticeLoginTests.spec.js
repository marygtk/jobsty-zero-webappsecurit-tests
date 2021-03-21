/// <reference types="cypress" />


describe('Test Suite for login', () => {

    beforeEach(() => {
        cy.fixture('automationpractice.json').as("testValues")
        cy.visit('http://automationpractice.com');
        cy.viewport(1200, 540);
      })

    it('Login on Automation Practice', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {login,url} = testValues.automationPractice;
            cy.visit(url)
            cy.login(login);
        });
    });

});