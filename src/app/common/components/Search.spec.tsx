import {renderWithNavigation} from '../../../testing/render-with-navigation'
import {Search} from './Search';
import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FilterContext} from '../filter-context';

describe('search tests', () => {
    test('search controls value state', async () => {
        renderWithNavigation(<Search/>);

        const expectedText = 'Things';
        userEvent.type(getSearch(), expectedText);

        await waitFor(() => {
            expect(getSearchInput()).toHaveValue(expectedText);
        });
    });

    test('shows search icon adornment by default', () => {
        renderWithNavigation(<Search/>);

        expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
    });

    test('when search has value shows clear button adornment', async () => {
        renderWithNavigation(<Search/>);

        userEvent.type(getSearch(), 'things');

        await waitFor(() =>
            expect(screen.getByLabelText('clear search')).toBeInTheDocument()
        );
    });

    test('when search value is removed then returns to search icon adornment', async () => {
        renderWithNavigation(<Search/>);
        userEvent.type(getSearch(), 'things');

        userEvent.clear(getSearchInput());

        await waitFor(() =>
            expect(screen.getByTestId('SearchIcon')).toBeInTheDocument()
        );
    });

    test('clear button clears search value', async () => {
        renderWithNavigation(<Search/>);
        userEvent.type(getSearch(), 'things');

        userEvent.click(screen.getByLabelText('clear search'));

        await waitFor(() => expect(getSearchInput()).toHaveValue(''));
    });

    test('sets filter model on change', async () => {
        const filterModel = {search: 'abc'};
        const setFilterModel = jest.fn();

        renderWithNavigation(
            <FilterContext.Provider value={{filterModel, setFilterModel}}>
                <Search/>
            </FilterContext.Provider>
        );

        const expectedSearchText = 'ab';
        userEvent.type(getSearch(), expectedSearchText);

        expect(setFilterModel).toHaveBeenCalledTimes(expectedSearchText.length);
        expect(setFilterModel).toHaveBeenCalledWith({
            search: expectedSearchText,
        });
    });
});

const getSearch = () => screen.getByLabelText('search');

const getSearchInput = () => screen.getByRole('textbox');
