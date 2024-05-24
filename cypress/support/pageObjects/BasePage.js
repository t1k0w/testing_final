class BasePage {
  navigate(path) {
    cy.visit(path);
  }
}

export default BasePage;