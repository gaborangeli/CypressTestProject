describe("Testing Misc and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Misc'", () => {
    cy.homeList().contains("Misc").click({ force: true });
    cy.url().should("include", "/commands/misc");
  });

  it("Clicks on 'exec'", () => {
    cy.homeList().contains("exec").click();
    cy.url().should("include", "/commands/misc");
  });

  it("Clicks on 'focused'", () => {
    cy.homeList().contains("focused").click();
    cy.url().should("include", "/commands/misc");
  });

  it("Clicks on 'screenshot'", () => {
    cy.homeList().contains("screenshot").click();
    cy.url().should("include", "/commands/misc");
  });

  it("Clicks on 'wrap'", () => {
    cy.homeList().contains("wrap").click();
    cy.url().should("include", "/commands/misc");
  });
});