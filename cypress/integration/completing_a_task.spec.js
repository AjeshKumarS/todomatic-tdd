describe('Completing and reseting a task', () => {
  it('Complete a task', () => {
    cy.visit('http://localhost:3000');

     cy.contains('Sleep').click();

     cy.get('[type="button"]').contains("Completed").click();

     cy.get("#todo-list").contains('Sleep');
  });

  it('Reset a task', () => {
    cy.visit('http://localhost:3000');

     cy.contains('Eat').click();

     cy.get('[type="button"]').contains("Active").click();

     cy.get("#todo-list").contains('Sleep');
  })
});