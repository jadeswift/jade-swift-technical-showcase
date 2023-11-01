import {useAlbumDataQuery} from "../../api/api";
import {ColumnFlexBox} from "../common/components/ColumnFlexBox";
import React, {FC} from "react";
import {Album} from "../../models/album";
import {Albums} from "./Albums";

export const AlbumsWrapper: FC = () => {
    const {data, isLoading, isError} = useAlbumDataQuery();

    return (
        <ColumnFlexBox>
            <Albums albums={data as Album[]} isError={isError} isLoading={isLoading}/>
        </ColumnFlexBox>
    );
};
