import React from "react";
import {FCWithChildren} from "../common/fc-with-children";
import {ColumnFlexBox} from "../common/components/ColumnFlexBox";
import {Loading} from "../common/components/Loading";
import {AlbumItem} from "./AlbumItem";
import {Link} from "react-router-dom";
import {Album} from "../../models/album";
import {Box, Typography} from "@mui/material";

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
        <Box className="displayGrid" padding={4}>
            {albums.map((album) => (
                <Link to={`${album.id}/photos`} key={album.id} aria-label={'album'} className="gridItem">
                    <AlbumItem album={album}/>
                </Link>
            ))}
        </Box>
    );
};
