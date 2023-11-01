import React, {FC} from "react";
import {Box, IconButton, ImageListItemBar, Popover, Typography} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import {Photo} from "../../models/photo";

export type PhotoDetailProps = {
    photo: Photo;
}
export const PhotoDetail: FC<PhotoDetailProps> = ({photo}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'photo-detail-popover' : undefined;

    return (
        <>
            <ImageListItemBar
                title={photo.title}
                actionIcon={
                    <IconButton
                        sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                        aria-label={`info about ${photo.title}`}
                        onClick={handleClick}
                    >

                        <ZoomInIcon/>
                    </IconButton>
                }
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{top: 50, left: 50}}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                aria-label={`popover for ${photo.title}`}
            >
                <Box sx={{backgroundColor: 'rgba(0,0,0,.4)', color: 'white'}}>
                    <Typography p={3} align={'center'}>{photo.title}</Typography>
                    <img aria-label={'photo in popover'} src={photo.url} alt={photo.title}/>
                </Box>
            </Popover>
        </>
    )
}