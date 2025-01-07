describe("Testing Waiting and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Waiting'", () => {
    cy.homeList().contains("Waiting").click({ force: true });
    cy.url().should("include", "https://example.cypress.io/commands/waiting");
  });

  it("Clicks on 'wait'", () => {
    cy.homeList().contains("wait").click({ force: true });
    cy.url().should("include", "https://example.cypress.io/commands/waiting");
  });
});