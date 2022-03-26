describe("Forms test", () => {
    it("can get to the form", () => {
        cy.visit("/universities");
        cy.get("form");
    });

    it("can fill the form", () => {
        cy.get('input[name="country"]').type("Qatar").should("have.value", "Qatar");
      });
  });