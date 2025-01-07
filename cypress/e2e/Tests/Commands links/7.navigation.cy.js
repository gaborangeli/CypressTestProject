describe("Testing Navigation and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Navigation'", () => {
    cy.homeList().contains("Navigation").click({ force: true });
    cy.url().should("include", "/commands/navigation");
  });

  it("Clicks on 'go'", () => {
    cy.homeList().contains("go").click();
    cy.url().should("include", "/commands/navigation");
  });

  it("Clicks on 'reload'", () => {
    cy.homeList().contains("reload").click();
    cy.url().should("include", "/commands/navigation");
  });

  it("Clicks on 'visit'", () => {
    cy.homeList().contains("visit").click();
    cy.url().should("include", "/commands/navigation");
  });
});
