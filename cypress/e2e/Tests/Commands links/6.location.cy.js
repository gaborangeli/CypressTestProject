describe("Testing Location and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Location'", () => {
    cy.homeList().contains("Location").click({ force: true })
    cy.url().should("include", "/commands/location")
  });

  it("Clicks on 'hash'", () => {
    cy.homeList().contains("hash").click()
    cy.url().should("include", "/commands/location");
  });

  it("Clicks on 'location'", () => {
    cy.homeList().contains("location").click();
    cy.url().should("include", "/commands/location");
  });

});