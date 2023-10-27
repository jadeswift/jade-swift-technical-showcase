import React from 'react';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import {LandingPage} from "./LandingPage";

test('renders landing page animation', () => {
    render(<LandingPage/>);
    expect(screen.getByLabelText('landing-animation')).toBeInTheDocument();
});
