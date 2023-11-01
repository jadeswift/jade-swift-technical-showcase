import {useParams} from "react-router-dom";
import {useAlbumTitleQuery, usePhotoDataQuery} from "../../api/api";
import {Photo} from "../../models/photo";
import {ColumnFlexBox} from "../common/components/ColumnFlexBox";
import React, {FC} from "react";
import {Photos} from "./Photos";

export const PhotosWrapper: FC = () => {
    const {id} = useParams<{ id: string }>();
    const {data, isLoading, isError} = usePhotoDataQuery(id);
    const {data: title} = useAlbumTitleQuery(id);

    return (
        <ColumnFlexBox>
            <Photos photos={data as Photo[]} title={title ?? ""} isError={isError} isLoading={isLoading}/>
        </ColumnFlexBox>
    );
};
