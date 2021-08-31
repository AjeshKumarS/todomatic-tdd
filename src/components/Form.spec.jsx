import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('<Form/>', () => {
    let form, addTask;

    beforeEach(async () => {
        addTask = jest.fn().mockName('addTask');
        ({ form } = render(<Form addTask={addTask} />));

    });

    it('Click Submit Form', () => {
        userEvent.type(document.querySelector("input#new-todo-input"), "New Task");
        document.querySelector("button#submit-button").click();
        expect(addTask).toHaveBeenCalledWith("New Task");
    });
});