describe("Testing Querying and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
  });

  it("Clicks on 'Querying'", () => {
    cy.homeList().contains("Querying").click({ force: true });
    cy.url().should("include", "/commands/querying");
  });

  it("Clicks on 'get'", () => {
    cy.homeList().contains("get").click();
    cy.url().should("include", "/commands/querying");
  });

  it("Clicks on 'contains'", () => {
    cy.homeList().contains("contains").click();
    cy.url().should("include", "/commands/querying");
  });

  it("Clicks on 'within'", () => {
    cy.homeList().contains("within").click();
    cy.url().should("include", "/commands/querying");
  });

  it("Clicks on 'root'", () => {
    cy.homeList().contains("root").click();
    cy.url().should("include", "/commands/querying");
  });
});
