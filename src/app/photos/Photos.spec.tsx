import {Photo} from "../../models/photo";
import {renderWithNavigation} from "../../testing/render-with-navigation";
import {screen} from "@testing-library/react";
import {Photos} from "./Photos";
import React from "react";
import {ModelFactory} from "../../testing/model-factory";

describe('photos page tests', () => {
    test('when is error is true then shows error', () => {
        setupTest({isError: true});

        expect(screen.getByText('Something Went Wrong :(')).toBeInTheDocument();
    });
    test('when rendered then photos are displayed', () => {
        const photos = ModelFactory.createMany(ModelFactory.createPhoto, 5);
        setupTest({photos: photos});

        expect(screen.getAllByLabelText('photo')).toHaveLength(5);
    });
});

const setupTest = ({
                       photos = [] as Photo[],
                       title = '',
                       isLoading = false,
                       isError = false,
                   }) =>
    renderWithNavigation(
        <Photos
            photos={photos}
            title={title}
            isLoading={isLoading}
            isError={isError}
        />
    );
