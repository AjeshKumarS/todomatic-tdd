describe('Filter tasks', () => {
  it('Filter Active tasks', () => {
    cy.visit('http://localhost:3000');

    cy.get('[type="button"]').contains("Active")
      .click();

    cy.get('[id="todo-list"]')
      .contains('Sleep');

    cy.get('[id="todo-list"]')
      .contains('Repeat');

    cy.get('[id="todo-list"]')
      .contains('Eat').should("not.exist");
  });

  it('Filter Completed tasks', () => {
    cy.visit('http://localhost:3000');

    cy.get('[type="button"]').contains("Completed")
      .click();

    cy.get('[id="todo-list"]')
      .contains('Sleep').should("not.exist");

    cy.get('[id="todo-list"]')
      .contains('Repeat').should("not.exist");

    cy.get('[id="todo-list"]')
      .contains('Eat');
  });

  it('Filter All tasks', () => {
    cy.visit('http://localhost:3000');

    cy.get('[type="button"]').contains("Completed")
      .click();

    cy.get('[type="button"]').contains("Active")
      .click();

    cy.get('[type="button"]').contains("All")
      .click();

    cy.get('[id="todo-list"]')
      .contains('Sleep');

    cy.get('[id="todo-list"]')
      .contains('Repeat');

    cy.get('[id="todo-list"]')
      .contains('Eat');
  });
});