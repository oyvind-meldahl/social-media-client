describe("The create item form validates user inputs correctly based on API restrictions.", () => {
  it("Can create a post", () => {
    cy.visit("http://127.0.0.1:8485");
    cy.wait(1000);
    cy.get("#registerForm button ").contains("Login").click({ force: true });
    cy.get("#loginEmail").invoke("val", "testfroy123@noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").invoke("val", "123456789");
    cy.wait(1000);
    cy.get(".modal-footer button").contains("Login").click({ force: true });
    cy.wait(1000);
    cy.visit("http://127.0.0.1:8485/?view=post");
    cy.wait(1000);
    cy.get("#postForm");
    cy.get("input[id='postTitle']").invoke("val", "Post number 1");
    cy.get("input[name='tags']").invoke("val", "Post tag 1");
    cy.get("textarea[name=body]").invoke("val", "Post Number 1");
    cy.get("button[data-action='submit']")
      .contains("Publish")
      .click({ force: true });
    cy.wait(3000);
    cy.url().should("include", "view=post&postId=");
    cy.get('button[data-action="delete"]:visible').click({ force: true });
    cy.wait(500);
  });

  it("Does not submit a form without a title", () => {
    cy.visit("http://127.0.0.1:8485");
    cy.wait(1000);
    cy.get(".btn-close:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.get("input[name='email']")
      .should("be.visible")
      .invoke("val", "testfroy123@noroff.no");
    cy.get("input[name='password']")
      .should("be.visible")
      .invoke("val", "123456789");
    cy.get(".modal-footer button")
      .contains("Login")
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
    cy.visit("http://127.0.0.1:8485/?view=post");
    cy.wait(1000);
    cy.get("#postForm");

    cy.get("textarea[name='body']").invoke("val", "Body content");
    cy.get("button[data-action='submit']")
      .contains("Publish")
      .click({ force: true });
    cy.wait(100);
    cy.url().should("not.include", "view=post&postId=");
  });
});
