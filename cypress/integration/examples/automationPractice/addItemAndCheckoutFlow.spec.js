describe("Validate the checkout flow when adding items to the cart and paying with checks and with bank account", () => {
  beforeEach(() => {
    cy.fixture("automationpractice.json").as("testValues");
    cy.visit("http://automationpractice.com/");
    cy.viewport(1200, 540);
  });

  it("Validate the checkout flow by adding an item to the cart and follow checkout flow, choosen payment method: checks", () => {
    //login
    cy.get("@testValues").then((testValues) => {
      const { login, url } = testValues.automationPractice;
      cy.visit(url);
      cy.login(login);

      //go to women section
      cy.get(testValues.automationPractice.checkoutFlowId.womenSectionId).click();
      if (cy.location("pathname").should("include", "/index.php")) {
        cy.log("The women url has change correctly!");
      }
      //click on the product
      cy.log("Click on the product");
      cy.get(testValues.automationPractice.checkoutFlowId.productId).click({ force: true });
      if (cy.location("pathname").should("include", "/index.php")) {
        cy.log("Inside the product page");
      }
      //click on add to cart
      cy.get(testValues.automationPractice.checkoutFlowId.addToCartId).click();
      cy.log("Add product to the cart");
      cy.log("Checkout Pop Up is displayed");
      //checkout confirming
      cy.get(testValues.automationPractice.checkoutFlowId.checkoutConfirmId).click();
      cy.get(testValues.automationPractice.checkoutFlowId.checkoutConfirm2Id).click();
      cy.log("first step of the check out");
      //cehckout confirming address
      cy.location("pathname").should("include", "/index.php");
      cy.get(testValues.automationPractice.checkoutFlowId.checkoutConfirm3Id).click();
      //checkout terms and conditions aceptance
      cy.log("accept the terms and conditions");
      cy.get(testValues.automationPractice.checkoutFlowId.acceptTandC).check();
      cy.get(testValues.automationPractice.checkoutFlowId.checkoutConfirm4Id).click();
      cy.log("Multi shipping checkout part");
      cy.location("pathname").should("include", "/index.php");
      //select check option
      cy.get(testValues.automationPractice.checkoutFlowId.checkPaymentMethod).click();
      cy.get(testValues.automationPractice.checkoutFlowId.lastcheckoutconfirmationId).click();
      //checkout accepted order
      cy.get(testValues.automationPractice.checkoutFlowId.checkMessageAlerId).should(
        "have.text",
        testValues.automationPractice.checkoutFlowId.checkMessageAssertion
      );
    });
  });

  it("Validate the checkout flow by adding an item to the cart and follow checkout flow, choosen payment method: bank wire account", () => {
    //login
    cy.get("@testValues").then((testValues) => {
      const { login, url } = testValues.automationPractice;
      cy.visit(url);
      cy.login(login);

      //go to women section
      cy.get(testValues.automationPractice.checkoutFlowId.womenSectionId).click();
      if (cy.location("pathname").should("include", "/index.php")) {
        cy.log("The women url has change correctly!");
      }
      //click on the product
      cy.log("Click on the product");
      cy.get(testValues.automationPractice.checkoutFlowId.productId).click({ force: true });
      if (cy.location("pathname").should("include", "/index.php")) {
        cy.log("Inside the product page");
      }
      //click on add to cart
      cy.get(testValues.automationPractice.checkoutFlowId.addToCartId).click();
      cy.log("Add product to the cart");
      cy.log("Checkout Pop Up is displayed");
      //checkout confirming
      cy.get(testValues.automationPractice.checkoutFlowId.checkoutConfirmId).click();
      cy.get(testValues.automationPractice.checkoutFlowId.checkoutConfirm2Id).click();
      cy.log("first step of the check out");
      //cehckout confirming address
      cy.location("pathname").should("include", "/index.php");
      cy.get(testValues.automationPractice.checkoutFlowId.checkoutConfirm3Id).click();
      //checkout terms and conditions aceptance
      cy.log("accept the terms and conditions");
      cy.get(testValues.automationPractice.checkoutFlowId.acceptTandC).check();
      cy.get(testValues.automationPractice.checkoutFlowId.checkoutConfirm4Id).click();
      cy.log("Multi shipping checkout part");
      cy.location("pathname").should("include", "/index.php");
      //select bank wire option
      cy.get(testValues.automationPractice.checkoutFlowId.bankwirePaymentMethodId).click();
      cy.get(testValues.automationPractice.checkoutFlowId.lastcheckoutconfirmationId).click();
      //checkout accepted order
      //Validate the order on the store
      cy.get(testValues.automationPractice.checkoutFlowId.bankwireMessageAlertId).should(
        "have.text",
        testValues.automationPractice.checkoutFlowId.bankwireMessageAssertion
      );
    });
  });
});
