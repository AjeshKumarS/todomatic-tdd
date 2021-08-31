import React from 'react';
import { render } from '@testing-library/react';
import ToDo from './ToDo';
import userEvent from '@testing-library/user-event';

describe('<ToDo/>', () => {
    let id = "task-0", name = "Eat", completed = true, toggleTaskCompleted, deleteTask, editTask, toDo;

        beforeEach(async () => {
            toggleTaskCompleted = jest.fn().mockName('toggleTaskCompleted');
            deleteTask = jest.fn().mockName('deleteTask');
            editTask = jest.fn().mockName('editTask');
            ({ toDo } = render(
                <ToDo id={id}
                    name={name}
                    completed={completed}
                    key={id}
                    toggleTaskCompleted={toggleTaskCompleted}
                    deleteTask={deleteTask}
                    editTask={editTask} />
            ));

        });

        it('Toggle Completed', () => {
            userEvent.click(document.querySelector("input[type=checkbox]"));
            expect(toggleTaskCompleted).toHaveBeenCalledWith(id);
        });

        it('Edit Task', () => {
            userEvent.click(document.querySelector("button.edit-button"));
            userEvent.type(document.querySelector("input.todo-text"), " More");
            userEvent.click(document.querySelector("button.todo-edit"));
            expect(editTask).toHaveBeenCalledWith(id, name + " More");
        });

        it('Delete Task', () => {
            userEvent.click(document.querySelector("button.delete-button"));
            expect(deleteTask).toHaveBeenCalledWith(id);
        })
    });