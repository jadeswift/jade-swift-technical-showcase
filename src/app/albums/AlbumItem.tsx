import React, {FC} from "react";
import {Avatar, Box, Paper, Stack, styled, Typography} from "@mui/material";
import {Album} from "../../models/album";

export type AlbumItemProps = { album: Album };

export const AlbumItem: FC<AlbumItemProps> = ({
                                                  album
                                              }) => (
    <Box sx={{flexGrow: 1, overflow: 'hidden', px: 3}}>
        <Item
            sx={{
                my: 1,
                mx: 'auto',
                p: 2,
                backgroundColor: 'rgba(183,32,123,.9)'
            }}
        >
            <Stack spacing={2} direction="row" alignItems="center">
                <Stack>
                    <Avatar
                        aria-label={'album id'}
                        sx={{
                            backgroundColor: 'rgba(132,24,89,.9)',
                            color: 'white'
                        }}>
                        {album.id}
                    </Avatar>
                </Stack>
                <Stack sx={{minWidth: 0}}>
                    <Typography variant={'h5'} noWrap>{album.title}</Typography>
                </Stack>
            </Stack>
        </Item>
    </Box>
);

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 300,
    width: 300
}));