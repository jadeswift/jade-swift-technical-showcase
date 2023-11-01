import React from 'react';
import {Box, BoxProps} from '@mui/material';
import {FCWithChildren} from '../fc-with-children';

export type ColumnFlexBoxProps = Omit<BoxProps, 'display' | 'flexDirection'>;
export const ColumnFlexBox: FCWithChildren<ColumnFlexBoxProps> = ({
                                                                      flex = 1,
                                                                      ...props
                                                                  }) => {
    return (
        <Box display={'flex'} flex={flex} flexDirection={'column'} {...props} />
    );
};
