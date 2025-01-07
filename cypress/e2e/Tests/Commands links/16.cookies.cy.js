describe("Testing Cookies and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Cookies'", () => {
    cy.homeList().contains("Cookies").click({ forced: true });
    cy.url().should("include", "/commands/cookies");
  });

  it("Clicks on 'clearCookies'", () => {
    cy.homeList().contains("clearCookies").click();
    cy.url().should("include", "/commands/cookies");
  });
});
