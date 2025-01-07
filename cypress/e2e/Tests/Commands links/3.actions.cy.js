const actionCategories = [
  "type",
  "focus",
  "blur",
  "clear",
  "submit",
  "click",
  "dblclick",
  "rightclick",
  "check",
  "uncheck",
  "select",
  "scrollIntoView",
  "scrollTo",
  "trigger",
];

describe("Testing Actions and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
  });

  // eslint-disable-next-line mocha/no-setup-in-describe
  actionCategories.forEach((category) => {
    it(`Clicks on '${category}'`, () => {
      cy.homeList().contains("a", category).should("be.visible").click();
      cy.url().should("include", `/commands/actions`);
      cy.visit("https://example.cypress.io");
    });
  });
});
