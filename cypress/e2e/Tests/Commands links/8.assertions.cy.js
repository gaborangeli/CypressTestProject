describe("Testing Assertions and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'should'", () => {
    cy.homeList().contains("should").click({ force: true });
    cy.url().should("include", "/commands/assertions");
  });

  it("Clicks on 'and'", () => {
    cy.homeList().contains("and").click();
    cy.url().should("include", "/commands/assertions");
  });

  it("Clicks on 'expect'", () => {
    cy.homeList().contains("expect").click();
    cy.url().should("include", "/commands/assertions");
  });

  it("Clicks on 'assert'", () => {
    cy.homeList().contains("assert").click();
    cy.url().should("include", "/commands/assertions");
  });
});


