describe("Testing Files and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'fixtures'", () => {
    cy.homeList().contains("fixtures").click({ forced: true });
    cy.url().should("include", "/commands/files");
  });

  it("Clicks on 'readFile'", () => {
    cy.homeList().contains("readFile").click({ forced: true });
    cy.url().should("include", "/commands/files");
  });

  it("Clicks on 'writeFile'", () => {
    cy.homeList().contains("writeFile").click({ forced: true });
    cy.url().should("include", "/commands/files");
  });
});