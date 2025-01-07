describe("Testing Storage and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Storage'", () => {
    cy.homeList().contains("Storage").click({ forced: true });
    cy.url().should("include", "/commands/storage");
  });

  it("Clicks on 'clearLocalStorage'", () => {
    cy.homeList().contains("clearLocalStorage").click();
    cy.url().should("include", "/commands/storage");
  });

  it("Clicks on 'getAllLocalStorage'", () => {
    cy.homeList().contains("getAllLocalStorage").click();
    cy.url().should("include", "/commands/storage");
  });

  it("Clicks on 'clearAllLocalStorage'", () => {
    cy.homeList().contains("clearAllLocalStorage").click();
    cy.url().should("include", "/commands/storage");
  });

  it("Clicks on 'getAllSessionStorage'", () => {
    cy.homeList().contains("getAllSessionStorage").click();
    cy.url().should("include", "/commands/storage");
  });

  it("Clicks on 'clearAllSessionStorage'", () => {
    cy.homeList().contains("clearAllSessionStorage").click();
    cy.url().should("include", "/commands/storage");
  });
});
