import React from 'react';
import {render, screen} from '@testing-library/react';
import {useAlbumDataQuery} from "../../api/api";
import {ModelFactory} from "../../testing/model-factory";
import {AlbumsWrapper} from "./AlbumsWrapper";

jest.mock('./useGetData');

describe('albums wrapper tests', () => {
    beforeEach(() => {
        useAlbumDataQuery.mockClear();
    });

    it('should render album data after API request', async () => {
        const albums = ModelFactory.createMany(ModelFactory.createAlbum, 5)
        useAlbumDataQuery.mockReturnValueOnce({
            data: albums,
            isLoading: false,
            isSuccess: true,
            isError: false,
            error: null,
        });

        render(<AlbumsWrapper/>);

        expect(screen.queryByText('Loading...')).toBeNull();
        expect(screen.getByText(albums[0].title)).toBeInTheDocument();
        expect(screen.getByText(albums[1].title)).toBeInTheDocument();
    });
});