describe("Testing Window and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
  });

  it("Clicks on 'Window", () => {
    cy.homeList().contains("Window").click({ force: true });
    cy.url().should("include", "/commands/window");
  });

  it("Clicks on 'window'", () => {
    cy.homeList().contains("window").click();
    cy.url().should("include", "/commands/window");
  });

  it("Clicks on 'document'", () => {
    cy.homeList().contains("a", "document").click({ force: true });
    cy.url().should("include", "/commands/window");
  });

  it("Clicks on 'title'", () => {
    cy.homeList().contains("title").click();
    cy.url().should("include", "/commands/window");
  });
});
