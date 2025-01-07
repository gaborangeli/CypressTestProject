describe("Testing Network Requests and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Cicks on 'Network Requests'", () => {
    cy.homeList().contains("Network Requests").click({ force: true });
    cy.url().should("include", "/commands/network-requests");
  });

  it("Cicks on 'server'", () => {
    cy.homeList().contains("server").click({ force: true });
    cy.url().should("include", "/commands/network-requests");
  });

  it("Cicks on 'request'", () => {
    cy.homeList().contains("request").click({ force: true });
    cy.url().should("include", "/commands/network-requests");
  });

  it("Cicks on 'route'", () => {
    cy.homeList().contains("route").click({ force: true });
    cy.url().should("include", "/commands/network-requests");
  });
});