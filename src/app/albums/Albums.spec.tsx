import {screen} from "@testing-library/react";
import {ModelFactory} from "../../testing/model-factory";
import {renderWithNavigation} from "../../testing/render-with-navigation";
import React from "react";
import {Albums} from "./Albums";
import {Album} from "../../models/album";

describe('albums page tests', () => {
    test('when is error is true then shows error', () => {
        setupTest({isError: true});

        expect(screen.getByText('Something Went Wrong :(')).toBeInTheDocument();
    });
    test('when rendered then albums are displayed', () => {
        const albums = ModelFactory.createMany(ModelFactory.createAlbum, 3);
        setupTest({albums})

        expect(screen.getAllByLabelText('album')).toHaveLength(3);
    });
});

const setupTest = ({
                       albums = [] as Album[],
                       isLoading = false,
                       isError = false,
                   }) =>
    renderWithNavigation(
        <Albums
            albums={albums}
            isLoading={isLoading}
            isError={isError}
        />
    );
