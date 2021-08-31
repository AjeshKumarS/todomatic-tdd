import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('<FilterButton />', () => {
    let form, addTask;

    describe('clicking the send button', () => {

        beforeEach(async () => {
            addTask = jest.fn().mockName('addTask');
            ({ form } = render(<Form addTask={addTask} />));

        });

        it('Click filter button', () => {
            userEvent.type(document.querySelector("input#new-todo-input"), "New Task");
            document.querySelector("button#submit-button").click();
            expect(addTask).toHaveBeenCalledWith("New Task");
        });
    });
});