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
    if (isLoading || !albums) {
        return (
            <Loading>Loading Albums...</Loading>
        );
    }

    if (isError) {
        return (
            <ColumnFlexBox justifyContent={'start'}>
                <Typography variant={'h4'}>Something Went Wrong :(</Typography>
            </ColumnFlexBox>
        )
    }

    if (albums?.length == 0) {
        return (
            <ColumnFlexBox justifyContent={'start'}>
                <Typography variant={'h4'}>No albums match your search</Typography>
            </ColumnFlexBox>
        )
    }

    return (
        <Box className="displayGrid">
            {albums.map((album) => (
                <Link to={`${album.id}/photos`} key={album.id} aria-label={'album'} className="gridItem">
                    <AlbumItem album={album}/>
                </Link>
            ))}
        </Box>
    );
};
