describe("The login form validates user inputs correctly based on API restrictions.", () => {
  it("Can log in with correct credentials", () => {
    cy.visit("http://127.0.0.1:8485");
    cy.wait(1000);
    cy.get("#registerForm button ").contains("Login").click({ force: true });

    cy.get("#loginEmail").invoke("val", "testfroy123@noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").type("123456789");
    cy.wait(1000);
    cy.get(".modal-footer button").contains("Login").click({ force: true });
    cy.url().should("include", "view=profile");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });

  it("Can not log in with incorrect email.", () => {
    cy.visit("http://127.0.0.1:8485");
    cy.wait(1000);
    cy.get("#registerForm button ").contains("Login").click({ force: true });

    cy.get("#loginEmail").invoke("val", "testfroy123@gmail.no");
    cy.wait(1000);
    cy.get("#loginPassword").invoke("val", "123456789");
    cy.wait(1000);
    cy.get(".modal-footer button").contains("Login").click({ force: true });
    cy.url().should("not.include", "view=profile");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("Can not log in with incorrect password.", () => {
    cy.visit("http://127.0.0.1:8485");
    cy.wait(1000);
    cy.get("#registerForm button ").contains("Login").click({ force: true });

    cy.get("#loginEmail").invoke("val", "testfroy123@noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").invoke("val", "123");
    cy.wait(1000);
    cy.get(".modal-footer button").contains("Login").click({ force: true });
    cy.url().should("not.include", "view=profile");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
