describe("One Test", () => {
  it("Visit site", () => {
    cy.visit("/");
    cy.contains("Driving superior performance").should("be.visible");
  });
});
