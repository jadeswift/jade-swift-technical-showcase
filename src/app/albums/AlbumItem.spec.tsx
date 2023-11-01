import {ModelFactory} from "../../testing/model-factory";
import {screen} from "@testing-library/react";
import {renderWithNavigation} from "../../testing/render-with-navigation";
import React from "react";
import {AlbumItem} from "./AlbumItem";

describe('album item tests', () => {
    test('album id is displayed', () => {
        const album = ModelFactory.createAlbum();
        renderWithNavigation(<AlbumItem album={album}/>);

        expect(screen.getByText(album.id)).toBeInTheDocument();
    });
    test('album title is displayed', () => {
        const album = ModelFactory.createAlbum();
        renderWithNavigation(<AlbumItem album={album}/>);

        expect(screen.getByText(album.title)).toBeInTheDocument();
    });
})