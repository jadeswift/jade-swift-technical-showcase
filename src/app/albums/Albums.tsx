import React from "react";
import {FCWithChildren} from "../common/fc-with-children";
import {ColumnFlexBox} from "../common/components/ColumnFlexBox";
import {Loading} from "../common/components/Loading";
import {AlbumItem} from "./AlbumItem";
import {Link} from "react-router-dom";
import {Album} from "../../models/album";
import {Typography} from "@mui/material";

export type AlbumsProps = {
    albums: Album[],
    isError: boolean,
    isLoading: boolean
}

export const Albums: FCWithChildren<AlbumsProps> = ({
                                                        albums,
                                                        isError,
                                                        isLoading
                                                    }) => {
    if (isLoading) {
        return (
            <ColumnFlexBox>
                <Loading>Loading Albums...</Loading>
            </ColumnFlexBox>
        );
    }

    if (isError) {
        return (
            <Typography variant={'h1'}>Something Went Wrong :(</Typography>
        )
    }

    return (
        <>
            {albums.map((album) => (
                <Link to={`${album.id}/photos`} key={album.id} aria-label={'album'}>
                    <AlbumItem album={album}/>
                </Link>
            ))}
        </>
    );
};
