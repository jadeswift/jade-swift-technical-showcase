import React, {FC} from "react";
import {Button, ButtonProps, ImageListItem, ListSubheader, styled, Typography} from "@mui/material";
import {RowFlexBox} from "../common/components/RoxFlexBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export type PhotoHeaderProps = {
    title: string;
    clickHandler: () => void;
}

export const PhotoHeader: FC<PhotoHeaderProps> = ({
                                                      title,
                                                      clickHandler
                                                  }) => {
    return (
        <ImageListItem key="Subheader" cols={5}>
            <ListSubheader component="div" sx={{backgroundColor: 'rgba(0,0,0,.4)', color: 'white'}}>
                <RowFlexBox padding={2} justifyContent={'flex-start'}>
                    <ColorButton onClick={clickHandler} variant="outlined" sx={{mr: 3}} name={'back button'}>
                        <ArrowBackIcon/>
                    </ColorButton>
                    <Typography variant={'h4'}>{title}</Typography>
                </RowFlexBox>
            </ListSubheader>
        </ImageListItem>
    )
}

const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: 'white',
    borderColor: 'white'
}));