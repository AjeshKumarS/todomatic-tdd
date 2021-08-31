import React from 'react';
import { render } from '@testing-library/react';
import FilterButton from './FilterButton';

describe('<FilterButton />', () => {
    let filterButton, setFilter;

    beforeEach(async () => {
        setFilter = jest.fn().mockName('setFilter');
        ({ filterButton } = render(<FilterButton name="All" setFilter={setFilter} isPressed={true} />));

    });

    it('Click filter button', () => {
        document.querySelector("button").click();
        expect(setFilter).toHaveBeenCalledWith("All");
    });
});