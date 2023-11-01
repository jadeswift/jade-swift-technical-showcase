import {renderWithNavigation} from "../../testing/render-with-navigation";
import {screen, waitFor} from "@testing-library/react";
import React from "react";
import {PhotoDetail} from "./PhotoDetail";
import {ModelFactory} from "../../testing/model-factory";
import userEvent from '@testing-library/user-event';

describe('photo detail tests', () => {
    test('renders photo title', () => {
        const photo = ModelFactory.createPhoto({title: 'Such a good picture'});
        renderWithNavigation(<PhotoDetail photo={photo}/>);

        expect(screen.getByLabelText(`info about ${photo.title}`)).toBeInTheDocument();
    });

    test('popover opens when icon clicked', async () => {
        const photo = ModelFactory.createPhoto();
        renderWithNavigation(<PhotoDetail photo={photo}/>);

        const popoverButton = screen.getByLabelText(`info about ${photo.title}`);
        userEvent.click(popoverButton);

        await waitFor(() =>
            expect(screen.getByLabelText(`popover for ${photo.title}`)).toBeInTheDocument()
        )
    });

    test('popover closes when esc key clicked', async () => {
        const photo = ModelFactory.createPhoto();
        renderWithNavigation(<PhotoDetail photo={photo}/>);

        const popoverButton = screen.getByLabelText(`info about ${photo.title}`);
        userEvent.click(popoverButton);
        await waitFor(() =>
            expect(screen.getByLabelText('photo in popover')).toBeInTheDocument()
        )

        userEvent.keyboard('{esc}');

        await waitFor(() =>
            expect(screen.queryByLabelText('photo in popover')).not.toBeInTheDocument()
        )
    });
});
