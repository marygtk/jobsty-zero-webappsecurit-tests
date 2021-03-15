describe("test suite for the contact form inputs validation", () => {

  beforeEach(() => {
    cy.fixture("automationpractice.json").as("testValues");
    cy.viewport(1200, 540);
    cy.visit("http://automationpractice.com/");
  });

  it("Validate the submition of the form without any data", () => {
    cy.get("@testValues").then((testValues) => {
        cy.get(testValues.automationPractice.contactForm.contactFormId).click();
        cy.get(testValues.automationPractice.contactForm.submitButtonId).click();
        cy.get(testValues.automationPractice.contactForm.alertTextId).should(
            "have.text",
            "The message cannot be blank."
        );
        cy.screenshot();
    });
  });

  it("Validate the error message when submiting the form by filling the subject heading only", () => {
    cy.get("@testValues").then((testValues) => {
      cy.get(testValues.automationPractice.contactForm.contactFormId).click();
      cy.get(testValues.automationPractice.contactForm.contactDropDownId).select("Webmaster");
      cy.get(testValues.automationPractice.contactForm.submitButtonId).click();
      cy.get(testValues.automationPractice.contactForm.alertTextId).should(
        "have.text",
        "Invalid email address."
      );
      cy.screenshot();
    });
  });

  it("Validate the error message when submiting the form by filling the subject heading and an invalid email address", () => {
    cy.get("@testValues").then((testValues) => {
      cy.get(testValues.automationPractice.contactForm.contactFormId).click();
      cy.get(testValues.automationPractice.contactForm.contactDropDownId).select("Webmaster");
      cy.get(testValues.automationPractice.contactForm.emailId).type("ijfojf");
      cy.get(testValues.automationPractice.contactForm.submitButtonId).click();
      cy.get(testValues.automationPractice.contactForm.alertTextId).should(
        "have.text",
        "Invalid email address."
      );
      cy.screenshot();
    });
  });

  it("Validate the error message when submiting the form by filling the subject heading and the email address", () => {
    cy.get("@testValues").then((testValues) => {
      cy.get(testValues.automationPractice.contactForm.contactFormId).click();
      cy.get(testValues.automationPractice.contactForm.contactDropDownId).select("Webmaster");
      cy.get(testValues.automationPractice.contactForm.emailId).type("ijfojf@kd.com");
      cy.get(testValues.automationPractice.contactForm.submitButtonId).click();
      cy.get(testValues.automationPractice.contactForm.alertTextId).should(
        "have.text",
        "The message cannot be blank."
      );
      cy.screenshot();
    });
  });

  it("Validate the error message when submiting the form by filling the subject heading, email address, and order number fields", () => {
    cy.get("@testValues").then((testValues) => {
      cy.get(testValues.automationPractice.contactForm.contactFormId).click();
      cy.get(testValues.automationPractice.contactForm.contactDropDownId).select("Webmaster");
      cy.get(testValues.automationPractice.contactForm.emailId).type("ijfojf@kd.com");
      cy.get(testValues.automationPractice.contactForm.orderDropDownId).type("CSJWNKLSM - 03/14/2021");
      cy.get(testValues.automationPractice.contactForm.submitButtonId).click();
      cy.get(testValues.automationPractice.contactForm.alertTextId).should(
        "have.text",
        "The message cannot be blank."
      );
      cy.screenshot();
    });
  });

  it("Validate the message when submiting the form by filling only the subject heading, email address, order number, message fields ", () => {
    cy.get("@testValues").then((testValues) => {
      cy.get(testValues.automationPractice.contactForm.contactFormId).click();
      cy.get(testValues.automationPractice.contactForm.contactDropDownId).select("Webmaster");
      cy.get(testValues.automationPractice.contactForm.emailId).type("ijfojf@kd.com");
      cy.get(testValues.automationPractice.contactForm.orderDropDownId).type("CSJWNKLSM - 03/14/2021");
      cy.get(testValues.automationPractice.contactForm.messageBoxId).type("jfejfojwf");
      cy.get(testValues.automationPractice.contactForm.submitButtonId).click();
      cy.get(testValues.automationPractice.contactForm.messageSentFormId).should(
        "have.text",
        "Your message has been successfully sent to our team."
      );
            cy.screenshot();
    });
  });

  it("Validate the error message when submiting the form by filling the subject heading, email address, order number, message and upload a .jpg file", () => {
    const image = "iluminame.jpg";
    cy.get("@testValues").then((testValues) => {
      cy.get(testValues.automationPractice.contactForm.contactFormId).click();
      cy.get(testValues.automationPractice.contactForm.contactDropDownId).select("Webmaster");
      cy.get(testValues.automationPractice.contactForm.emailId).type("ijfojf@kd.com");
      cy.get(testValues.automationPractice.contactForm.orderDropDownId).type("CSJWNKLSM - 03/14/2021");
      cy.get(testValues.automationPractice.contactForm.messageBoxId).type("jfejfojwf");
      cy.get(testValues.automationPractice.contactForm.fileUploadId).attachFile(image);
      cy.get(testValues.automationPractice.contactForm.submitButtonId).click();
      cy.get(testValues.automationPractice.contactForm.messageSentFormId).should(
        "have.text",
        "Your message has been successfully sent to our team."
      );
      cy.screenshot();
    });
  });
});
