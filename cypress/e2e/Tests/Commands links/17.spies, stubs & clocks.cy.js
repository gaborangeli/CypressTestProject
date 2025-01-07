describe("Testing Spies, Stubs & Clocks and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Spies, Stubs & Clocks'", () => {
    cy.homeList().contains("Spies, Stubs & Clocks").click({ forced: true });
    cy.url().should("include", "/commands/spies-stubs-clocks");
  });

  it("Clicks on 'spy'", () => {
    cy.homeList().contains("spy").click();
    cy.url().should("include", "/commands/spies-stubs-clocks");
  });

  it("Clicks on 'stub'", () => {
    cy.homeList().contains("stub").click();
    cy.url().should("include", "/commands/spies-stubs-clocks");
  });

  it("Clicks on 'clock'", () => {
    cy.homeList().contains("clock").click();
    cy.url().should("include", "/commands/spies-stubs-clocks");
  });

  it("Clicks on 'tick'", () => {
    cy.homeList().contains("tick").click();
    cy.url().should("include", "/commands/spies-stubs-clocks");
  });
});
