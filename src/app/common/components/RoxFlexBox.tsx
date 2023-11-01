import React from 'react';
import {Box, BoxProps} from '@mui/material';
import {FCWithChildren} from "../fc-with-children";

export type RowFlexBoxProps = Omit<BoxProps, 'display' | 'flexDirection'>;
export const RowFlexBox: FCWithChildren<RowFlexBoxProps> = ({
                                                                flex = 1,
                                                                ...props
                                                            }) => {
    return (
        <Box display={'flex'} flex={flex} flexDirection={'row'} {...props} />
    );
};
