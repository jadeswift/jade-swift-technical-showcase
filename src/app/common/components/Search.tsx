import React, {
    ChangeEvent,
    FC,
    useCallback, useContext,
    useMemo,
    useState,
} from 'react';
import {OutlinedInput, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {ClearButton} from './ClearButton';
import {FilterContext} from "../filter-context";

const SearchInput = styled(OutlinedInput)({
    width: 250,
    height: 35,
    paddingLeft: 4,
    borderRadius: 18,
    fontSize: 18,

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
});

export const Search: FC = () => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const {filterModel, setFilterModel} = useContext(FilterContext);

    const focusedStyles = useMemo(
        () => ({
            border: `2px solid rgba(183,32,123,.9)`,
        }),
        []
    );

    const inputColors = useMemo(
        () =>
            focused || value
                ? focusedStyles
                : {border: `2px solid rgba(183,32,123,.9)`},
        [focused, value, focusedStyles]
    );

    const handleChange = useCallback(
        (newValue: string) => {
            setValue(newValue);
            setFilterModel({search: newValue})
        },
        [setValue, filterModel, setFilterModel]
    );

    const endAdornment = useMemo(
        () =>
            value ? (
                <ClearButton onClick={() => handleChange('')}/>
            ) : (
                <SearchIcon sx={{fontSize: 20}}/>
            ),
        [handleChange, value]
    );

    return (
        <SearchInput
            aria-label='search'
            placeholder='Find album...'
            endAdornment={endAdornment}
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChange(event.target.value)
            }
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            sx={[inputColors]}
        />
    );
};