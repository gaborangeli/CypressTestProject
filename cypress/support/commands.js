Cypress.Commands.add("homeList", () => {
  return cy.get(".container .row .col-xs-12 .home-list");
});

/*
Example of an upcoming update regarding avoiding repeating "cy.url().should("include", "url");".

Cypress.Commands.add("checkCategoryUrl", (category) => {
  const categoryUrls = {
    Querying: "/commands/querying",
    Traversal: "/commands/traversal",
    Actions: "/commands/actions",
    Window: "/commands/window",
    Viewport: "/commands/viewport",
    Location: "/commands/location",
    Navigation: "/commands/navigation",
    Assertions: "/commands/assertions",
    Misc: "/commands/misc",
    Connectors: "/commands/connectors",
    Aliasing: "/commands/aliasing",
    Wait: "/commands/wait",
    "Network Requests": "/commands/network-requests",
    Files: "/commands/files",
    Storage: "/commands/storage",
    Cookies: "/commands/cookies",
    "Spies Stubs & Clocks": "/commands/spies-stubs-clocks",
  };

  const expectedUrl = categoryUrls[category];
  if (!expectedUrl) {
    throw new Error(`URL not found for category: ${category}`);
  }

  cy.url().should("include", expectedUrl);
});
*/