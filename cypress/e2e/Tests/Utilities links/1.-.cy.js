describe("Testing Utilities and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on '-' link under Utilities", () => {
    cy.get("#utilities") // Select the div with id="utilities"
      .parent() // Go to the parent of the div
      .find("a") // Find all anchor tags within the parent div
      .contains("-") // Find the link that contains "-"
      .click({ force: true }); // Click the link
    cy.url().should("include", "utilities"); // Assert the URL
  });
});
