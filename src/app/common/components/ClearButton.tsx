import {Button, ButtonProps, styled} from '@mui/material';
import React, {FC} from 'react';

const LinkButton = styled(Button)({
    padding: 0,

    '&:hover, &:active': {
        color: 'rgba(183,32,123,.9)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
});

export const ClearButton: FC<ButtonProps> = ({...props}) => (
    <LinkButton
        aria-label='clear search'
        variant='text'
        disableRipple
        sx={{fontSize: 16, lineHeight: '19px', fontWeight: 400, color: 'white'}}
        {...props}
    >
        Clear
    </LinkButton>
);
