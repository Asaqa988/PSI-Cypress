let c ; 

describe("login2", () => {
  it("tests login2", () => {
    cy.viewport(1262, 937);
    cy.visit("https://dev.psi-crm.com/account/login");
    cy.get("#identityRef").dblclick();
    cy.get("#identityRef").click();
    cy.get("#identityRef").type("asaqa");
    cy.get("#passwordRef").dblclick();
    cy.get("#passwordRef").type("123");
    cy.get("span.MuiButton-label").click();

    cy.get('.menu-wrapper > .animated-open-close > .open-button > .mdi').click()
    cy.get('div').contains("Sales").click()
    cy.wait(5000)
    cy.get('div.menu-item-wrapper').find("a").each(($el,index,list)=>{
      
      // console.log($el[0].attributes); // Prints the attributes of the element
 // Prints the value property of the element
      console.log($el[0].innerText+"@@@@@@@@@@@@@@@"+index+"@@@@@@@@@@@@@@@@@@@@22");
    })


  });
});
