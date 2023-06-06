describe("login", () => {
  it("tests login", () => {
    cy.viewport(1262, 937);
    cy.visit("https://dev.psi-crm.com/home/lead-sales/lead-profile-edit?formType=2&id=1064148&leadClass=Buyer");
    cy.get("#identityRef").dblclick();
    cy.get("#identityRef").type("asaqa");
    cy.get("#passwordRef").dblclick();
    cy.get("#passwordRef").type("123");
    cy.get("button").click();
    cy.wait(4000);
  });


});
