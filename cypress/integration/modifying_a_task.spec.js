describe('Modifying a task', () => {
    it('Editing Task Name', () => {
        cy.visit('http://localhost:3000');

        cy.contains("Eat")
            .parents('.stack-small')
            .contains('Edit')
            .click();

        cy.get('.stack-small')
            .within(() => {
                return cy.get('input[type="text"]').type(" More");
            });

        cy.get("#todo-list")
            .contains("Save")
            .click();

        cy.get(".todo-label").contains("Eat More");

    });

    it('Cancel Editing Task Name', () => {
        cy.visit('http://localhost:3000');

        cy.contains("Eat")
            .parents('.stack-small')
            .contains('Edit')
            .click();

        cy.get('.stack-small')
            .within(() => {
                return cy.get('input[type="text"]').type(" More");
            });

        cy.get("#todo-list")
            .contains("Cancel")
            .click();

        cy.get(".todo-label").contains("Eat More").should('not.exist');

    });

    it('Deleting Task', () => {
        cy.contains("Sleep")
            .parents('.stack-small')
            .contains('Delete')
            .click();

        cy.get('.todo-list').contains('Sleep').should('not.exist');
    })
});