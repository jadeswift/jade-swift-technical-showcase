import React, {FC} from "react";
import {Photo} from "../../models/photo";
import {useNavigate} from "react-router-dom";
import {
    ImageList,
    ImageListItem,
    Typography
} from "@mui/material";
import {PhotoDetail} from "./PhotoDetail";
import {PhotoHeader} from "./PhotoHeader";
import {Loading} from "../common/components/Loading";
import {ColumnFlexBox} from "../common/components/ColumnFlexBox";

export type PhotosProps = {
    photos: Photo[],
    title: string,
    isLoading: boolean,
    isError: boolean
}


export const Photos: FC<PhotosProps> = ({
                                            photos,
                                            title,
                                            isLoading,
                                            isError
                                        }) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(-1);
    }

    if (isLoading) {
        return (
            <ColumnFlexBox>
                <Loading>Loading Photos...</Loading>
            </ColumnFlexBox>
        );
    }

    if (isError) {
        return (
            <Typography variant={'h1'}>Something Went Wrong :(</Typography>
        )
    }

    return (
        <ImageList>
            <PhotoHeader title={title} clickHandler={clickHandler}/>
            {photos.map((photo) => (
                <ImageListItem key={photo.id} aria-label={'photo'}>
                    <img
                        srcSet={`${photo.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${photo.thumbnailUrl}?w=248&fit=crop&auto=format`}
                        alt={photo.title}
                        loading="lazy"
                    />
                    <PhotoDetail photo={photo}/>
                </ImageListItem>
            ))}
        </ImageList>
    );
};
