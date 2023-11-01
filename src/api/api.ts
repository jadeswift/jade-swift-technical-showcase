import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Album} from "../models/album";
import {Photo} from "../models/photo";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        albumData: build.query<Album[], void>({
            query: () => "albums",
            transformResponse: (response: object[]) => {
                return response.map((item: object) => item as Album)
            }
        }),
        albumTitle: build.query<string, string | undefined>({
            query: (albumId) => `albums/${albumId}`,
            transformResponse: (response: object) => {
                const album = response as Album;
                return album.title;
            }
        }),
        photoData: build.query<Photo[], string | undefined>({
            query: (albumId) => `photos?albumId=${albumId}`,
            transformResponse: (response: object[]) => {
                return response.map((item: object) => item as Photo)
            }
        }),
    })
})

export const {useAlbumDataQuery, useAlbumTitleQuery, usePhotoDataQuery} = api;