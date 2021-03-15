/// <reference types="cypress" />


describe('Test Suite for Zero Bank', () => {

  beforeEach(() => {
    cy.fixture('zerobank.json').as('testValues')
    cy.visit('http://zero.webappsecurity.com');
  })

  it('Verify the layout of the website using mobile viewport samsung galaxy note 3', () => {
    cy.get('@testValues').then((testValues) => {
      //verify the navigation bar using galaxy note 3 viewport 
      cy.get(testValues.navbar).should('be.visible');
      cy.viewport(360, 640);
      cy.screenshot();
    })
  });

  it('Verify the layout of the website using mobile viewport samsung galaxy s9', () => {
      cy.get('@testValues').then((testValues) => {
      //verify the navigation bar using galaxy s9 viewport 
      cy.get(testValues.navbar).should('be.visible');
      cy.viewport(360, 740);
      cy.screenshot();
    });
  });

  it('Verify the layout of the website using mobile viewport for iPhone 6/7/8', () => {
    cy.get('@testValues').then((testValues) => {
    //verify the navigation bar using iPhone 6/7/8 viewport 
    cy.get(testValues.navbar).should('be.visible');
    cy.viewport(375, 667);
    cy.screenshot();
    });
  });

  it('Verify the layout of the website using mobile viewport for iPad', () => {
    cy.get('@testValues').then((testValues) => {
    //verify the navigation bar using iPad viewport 
    cy.get(testValues.navbar).should('be.visible');
    cy.viewport(768, 1024);
    cy.screenshot();
    });
  });


  it('Verify that the main navigation is displayed on the home page of the site.', () => {
    cy.get('@testValues').then((testValues) => {
    //verify navigation bar on home page
    cy.get(testValues.navbar).should('be.visible');
    cy.screenshot();
    });
  });

  it('Verify the navigation bar on the online banking page', () => {
    cy.get('@testValues').then((testValues) => {
    //verify navigation bar on online banking page
    cy.get(testValues.onlinebankingid).click();
    cy.get(testValues.navbar).should('be.visible');
    cy.screenshot();
    });
  });

  it('Verify the navigation bar on the feedback form page', () => {
    cy.get('@testValues').then((testValues) => {
    //verify navigation bar on the feedback form page
    cy.get(testValues.feedbackid).click();
    cy.get(testValues.navbar).should('be.visible');
    cy.screenshot();
    });
  });

  it('Verify navigation bar on the singin page', () => {
    cy.get('@testValues').then((testValues) => {
    //verify navigation bar on the singing page
    cy.get(testValues.signinbuttonid).click();
    cy.get(testValues.navbar).should('be.visible');
    cy.screenshot();
    });
  });

  it('Verify URL path on online banking page', () => {
    cy.get('@testValues').then((testValues) => {
    //verify that the url pathname on the online banking page changes when accesing to it.
    cy.get(testValues.onlinebankingid).click();
    cy.location('pathname').should('include', 'online-banking');
    cy.screenshot();
    });
  });

  it('Verify URL path on feedback page', () => {
    cy.get('@testValues').then((testValues) => {
    //verify that the url pathname on the feedback page changes when accesing to it.
    cy.get(testValues.feedbackid).click();
    cy.location('pathname').should('include', 'feedback');
    cy.screenshot();
    });
  });

  it('Verify URL path on singin page', () => {
    cy.get('@testValues').then((testValues) => {
    //verify that the url pathname on the sing in page changes when accesing to it.
    cy.get(testValues.signinbuttonid).click();
    cy.location('pathname').should('include', 'singin');
    cy.screenshot();
    });
  });
    

  it('Validate that the feedback form has not been sent when the required fields are empty', () => {
    //verify that the url pathname on the feedback page changes when sending the form without data.
    cy.get('@testValues').then((testValues) => {
      cy.get(testValues.feedbackid).click();
      cy.location('pathname').should('include', 'feedback');
      cy.get(testValues.sendformfeedback).click();
      cy.location('pathname').should('include', 'feedback');
      cy.screenshot();
    });
  });

  it('Validate that the feedback form has not been sent when only the username field is filled', () => {
    //verify that a validation is performed and that the form has not been sent when only adding data to the username field
    cy.get('@testValues').then((testValues) => {
      cy.get(testValues.feedbackid).click();
      cy.location('pathname').should('include', 'feedback');
      cy.get(testValues.formnameid).type(4);
      cy.get(testValues.sendformfeedback).click();
      cy.location('pathname').should('include', 'feedback');
      cy.screenshot();
    });
  });

  it('Validate that the feedback form has not been sent when only the username and the email fields are filled', () => {
    cy.get('@testValues').then((testValues) => {
      //verify that a validation is performed and that the form has not been sent when only adding data to the username and email field 
      cy.get(testValues.feedbackid).click();
      cy.location('pathname').should('include', 'feedback');
      cy.get(testValues.formnameid).type(4);
      cy.get(testValues.formemailid).type(4);
      cy.get(testValues.sendformfeedback).click();
      cy.location('pathname').should('include', 'feedback');
      cy.screenshot();
    });
  });

  it('Validate that the feedback form has not been sent when only the username, email, and subject fields are filled', () => {
      //verify that a validation is performed and that the form has not been sent when only adding data to the username and email field 
    cy.get('@testValues').then((testValues) => {
      cy.get(testValues.feedbackid).click();
      cy.location('pathname').should('include', 'feedback');
      cy.get(testValues.formnameid).type(4);
      cy.get(testValues.formemailid).type(4);
      cy.get(testValues.formsubjectid).type(4);
      cy.get(testValues.sendformfeedback).click();
      cy.location('pathname').should('include', 'feedback');
      cy.screenshot();
    });
  });

  it('Validate that the feedback form was sent when all the fields are filled', () => {
    //verify the message when the form is sent 
    cy.get(testValues.formemailid).click();
    cy.location('pathname').should('include', 'feedback');
    cy.get(testValues.formnameid).type(4);
    cy.get(estValues.formemailid).type(4);
    cy.get(testValues.formsubjectid).type(4);
    cy.get(testValues.formcommentid).type(4);
    cy.get(testValues.sendformfeedback).click();
    cy.location('pathname').should('include', 'sendFeedback');
    cy.log('The form has been sent without having validated the email of the user!');
    cy.screenshot();
  });
  
});
