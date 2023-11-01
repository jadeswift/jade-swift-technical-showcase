import React from 'react';
import {Typography} from '@mui/material';
import {ColumnFlexBox} from './ColumnFlexBox';
import {ReactComponent as LoadingGif} from '../../../assets/loading.svg';
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
            <LoadingGif style={{width: 120}}/>
            {children && (
                <Typography variant={'h3'} pt={1}>
                    {children}
                </Typography>
            )}
        </ColumnFlexBox>
    );
};
