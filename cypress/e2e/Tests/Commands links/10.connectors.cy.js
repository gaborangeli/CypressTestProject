describe("Testing Connectors and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Connectors'", () => {
    cy.homeList().contains("Connectors").click({ force: true });
    cy.url().should("include", "/commands/connectors");
  });

  it("Clicks on 'each'", () => {
    cy.homeList().contains("each").click();
    cy.url().should("include", "/commands/connectors");
  });

  it("Clicks on 'its'", () => {
    cy.homeList().contains("its").click();
    cy.url().should("include", "/commands/connectors");
  });

  it("Clicks on 'invoke'", () => {
    cy.homeList().contains("invoke").click();
    cy.url().should("include", "/commands/connectors");
  });

  it("Clicks on 'spread'", () => {
    cy.homeList().contains("spread").click();
    cy.url().should("include", "/commands/connectors");
  });

  it("Clicks on 'then'", () => {
    cy.homeList().contains("then").click();
    cy.url().should("include", "/commands/connectors");
  });
});