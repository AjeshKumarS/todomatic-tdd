import React from 'react';
import { render } from '@testing-library/react';
import FilterButton from './FilterButton';
import userEvent from '@testing-library/user-event';

describe('<FilterButton />', () => {
    let filterButton, setFilter;

    beforeEach(async () => {
        setFilter = jest.fn().mockName('setFilter');
        ({ filterButton } = render(<FilterButton name="All" setFilter={setFilter} isPressed={true} />));

    });

    it('Click filter button', () => {
        userEvent.click(document.querySelector("button"));
        expect(setFilter).toHaveBeenCalledWith("All");
    });
});