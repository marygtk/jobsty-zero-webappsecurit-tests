describe("Add items to the cart and validate in the cart that the quantity of items are the same and the delete all of then and validate the deletion", () => {
  beforeEach(() => {
    cy.fixture("automationpractice.json").as("testsValues");
    cy.viewport(1200, 540);
    cy.visit("http://automationpractice.com/");
  });

  it("Add items all the items of women section to the cart and then delete and validate them.", () => {
    cy.get("@testsValues").then((testsValues) => {
      //go to women section
      cy.get(testsValues.automationPractice.addItems.womenSectionId).click();
      if (cy.location("pathname").should("include", "/index.php")) {
        cy.log("The women url has change correctly!");
      }
      //create a loop that adds all the products contained on the women section
      cy.loopAddItems();
      cy.get(testsValues.automationPractice.addItems.cartNumberId).should(
        "have.text",
        "7"
      );
      cy.get(testsValues.automationPractice.addItems.cartSectionId).click();
      //delete all the selected items and validate that 
      cy.deleteItems();
      cy.get(testsValues.automationPractice.addItems.cartNumberId).should(
        "have.text",
        "0"
      );
    });
  });
});
