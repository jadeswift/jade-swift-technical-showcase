import {createContext} from 'react';

export type FilterModel = {
    search: string;
};

export const defaultFilterModel = {
    search: '',
};

export type FilterContextProps = {
    filterModel: FilterModel;
    setFilterModel: (filterModel: FilterModel) => void;
};

export const FilterContext = createContext<FilterContextProps>({
    filterModel: defaultFilterModel,
    setFilterModel: (_filterModel) => null,
});
