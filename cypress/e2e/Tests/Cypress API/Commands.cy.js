const apiCategories = [
  "Commands",
  "Server",
  "arch",
  "config",
  "dom",
  "env",
  "log",
  "platform",
  "version",
  "Cookies",
];

describe("Testing Cypress API categories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
  });

  // eslint-disable-next-line mocha/no-setup-in-describe
  apiCategories.forEach((category) => {
    it(`Clicks on '${category}'`, () => {
      cy.get(".home-list").contains("a", category).should("be.visible").then((link) => {
        const href = link.prop("href");
        cy.wrap(link).click();
        cy.url().should("eq", href);
        cy.visit("https://example.cypress.io");
      });
    });
  });
});
