describe('Adding a task', () => {
  it('Add task to todo list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[id="new-todo-input"]')
      .type('New Task');

    cy.get('[id="submit-button"]')
      .click();

    cy.get('[id="todo-list"]')
      .contains('New Task');
  });
});