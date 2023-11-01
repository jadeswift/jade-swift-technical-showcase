import {renderWithNavigation} from "../../testing/render-with-navigation";
import {screen, waitFor} from "@testing-library/react";
import React from "react";
import {PhotoHeader} from "./PhotoHeader";
import userEvent from "@testing-library/user-event";

describe('photo header tests', () => {
    test('navigation button calls navigation funciton', async () => {
        const navigateBack = jest.fn();
        renderWithNavigation(<PhotoHeader
            clickHandler={navigateBack}
            title={'very creative photo title'}/>);
        userEvent.click(screen.getByRole('button'));

        await waitFor(() =>
            expect(navigateBack).toHaveBeenCalled()
        )
    });
})