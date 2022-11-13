describe("The logout button logs the user out when clicked.", () => {
  it("Can log out with logout button.", () => {
    cy.visit("http://127.0.0.1:8485");
    cy.wait(1000);
    cy.get("#registerForm button ").contains("Login").click({ force: true });

    cy.get("#loginEmail").invoke("val", "testfroy123@noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").invoke("val", "123456789");
    cy.wait(1000);
    cy.get(".modal-footer button").contains("Login").click({ force: true });

    cy.get(".text-end button").contains("Logout").click({ force: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
