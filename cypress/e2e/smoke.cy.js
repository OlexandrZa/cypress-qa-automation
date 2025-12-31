describe("Smoke Test", () => {});
it("Home page opens", () => {
  cy.visit("https://example.cypress.io");
  cy.contains("cypress").should("be.visible");
  cy.contains("Kitchen Sink").should("be.visible");
});
