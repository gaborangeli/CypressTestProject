const traversalCategories = [
  "children",
  "closest",
  "eq",
  "filter",
  "find",
  "first",
  "last",
  "next",
  "nextAll",
  "nextUntil",
  "not",
  "parent",
  "parents",
  "parentsUntil",
  "prev",
  "prevAll",
  "prevUntil",
  "siblings",
];

describe("Testing Traversal and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
  });

  // eslint-disable-next-line mocha/no-setup-in-describe
  traversalCategories.forEach((category) => {
    it(`Clicks on '${category}'`, () => {
      cy.homeList().contains("a", category).should("be.visible").click();

      cy.url().should("include", `/commands/traversal`);

      cy.visit("https://example.cypress.io");
    });
  });
});
