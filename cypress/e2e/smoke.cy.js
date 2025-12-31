describe("Smoke Test", () => {});
it("Home page opens", () => {
  cy.visit("https://example.cypress.io");
  cy.contains("cypress").should("be.visible");
});
