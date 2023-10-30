import React from 'react';
import '@testing-library/jest-dom'
import {screen} from '@testing-library/react';
import {LandingPage} from "./LandingPage";
import {renderWithNavigation} from "../../testing/render-with-navigation";

describe('landing page tests', () => {
    test('renders landing page animation', () => {
        renderWithNavigation(<LandingPage/>);
        expect(screen.getByLabelText('landing-animation')).toBeInTheDocument();
    });

    test('navigation takes you to albums page', async () => {
        renderWithNavigation(<LandingPage/>);
        const link = screen.getByRole('link');

        expect(link).toHaveAttribute('href', '/albums');
    });
});
