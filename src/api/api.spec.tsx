import {screen, waitFor, render} from "@testing-library/react";
import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {server} from "../__mocks__/api/server";
import {api} from "./api";
import React from "react";
import {AlbumsWrapper} from "../app/albums/AlbumsWrapper";
import {mockAlbums} from "../__mocks__/api/handler";

describe("api tests", () => {
    beforeAll(() => {
        server.listen();
    });

    afterEach(() => {
        server.resetHandlers();
    });

    afterAll(() => {
        server.close();
    });

    it("should display albums", async () => {
        await waitFor(() => {
            render(
                <ApiProvider api={api}>
                    <AlbumsWrapper/>
                </ApiProvider>
            );

            expect(screen.getAllByLabelText('album')).toHaveLength(5);
            expect(screen.getByText(mockAlbums[0].title)).toBeInTheDocument();
        });
    });
});