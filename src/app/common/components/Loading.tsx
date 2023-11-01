import React from 'react';
import {Typography} from '@mui/material';
import {ColumnFlexBox} from './ColumnFlexBox';

const loading = require("../../../assets/loading.svg") as string;
import {FCWithChildren} from "../fc-with-children";

export const Loading: FCWithChildren = ({
                                            children
                                        }) => {
    return (
        <ColumnFlexBox
            justifyContent={'center'}
            alignItems={'center'}
            alignSelf={'center'}
            aria-label={'loading'}
        >
            <img src={loading} style={{width: 120}} alt="loading" aria-label={'loading-animation'}/>

            {children && (
                <Typography variant={'h3'} pt={1}>
                    {children}
                </Typography>
            )}
        </ColumnFlexBox>
    );
};
