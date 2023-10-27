import React from "react";
import {FCWithChildren} from "../fc-with-children";
import {Box} from '@mui/material';

export const Layout: FCWithChildren = ({children}) => {
    return (
        <Box
            width={'100%'}
            height={'100%'}
            sx={{overflowY: 'scroll'}}
        >
            {children}
        </Box>
    );
}