import React from "react";
import {FCWithChildren} from "../fc-with-children";
import {Box, createTheme, ThemeProvider} from '@mui/material';

export const Layout: FCWithChildren = ({children}) => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            {children}
        </ThemeProvider>
    );
}