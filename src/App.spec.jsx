import React from 'react';
import { getByText, render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    let app;
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

    beforeEach(async () => {
        ({app} = render(<App initialTasks={DATA} />))
    });

    it('Click filter button', () => {
        let todoList = document.querySelector('#todo-list');
        expect(todoList).toHaveTextContent("Eat");
        expect(todoList).toHaveTextContent("Sleep");
        expect(todoList).toHaveTextContent("Repeat");
    });
});