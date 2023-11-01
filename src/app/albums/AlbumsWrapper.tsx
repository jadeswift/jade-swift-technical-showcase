import {useAlbumDataQuery} from "../../api/api";
import {ColumnFlexBox} from "../common/components/ColumnFlexBox";
import React, {FC} from "react";
import {Album} from "../../models/album";
import {Albums} from "./Albums";
import {Typography} from "@mui/material";

export const AlbumsWrapper: FC = () => {
    const {data, isLoading, isError} = useAlbumDataQuery();

    return (
        <ColumnFlexBox padding={10}>
            <Typography variant={'h1'}>Albums</Typography>
            <Albums albums={data as Album[]} isError={isError} isLoading={isLoading}/>
        </ColumnFlexBox>
    );
};
