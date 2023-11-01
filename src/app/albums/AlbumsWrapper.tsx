import {useAlbumDataQuery} from "../../api/api";
import React, {FC, useEffect, useState} from "react";
import {Album} from "../../models/album";
import {Albums} from "./Albums";
import {Typography} from "@mui/material";
import {Search} from "../common/components/Search";
import {defaultFilterModel, FilterContext, FilterModel} from "../common/filter-context";
import {searchHelper} from "../common/search-helper";
import {RowFlexBox} from "../common/components/RoxFlexBox";

export const AlbumsWrapper: FC = () => {
    const {data, isLoading, isError} = useAlbumDataQuery();
    const albums = data as Album[];
    const [filterModel, setFilterModel] = useState<FilterModel>(defaultFilterModel);
    const [filteredAlbums, setFilteredAlbums] = useState(albums);

    useEffect(() => {
        const filteredAlbums = searchHelper(albums, filterModel);
        setFilteredAlbums(filteredAlbums);
    }, [albums, filterModel]);

    return (
        <FilterContext.Provider value={{filterModel, setFilterModel}}>
            <RowFlexBox justifyContent={'space-between'} alignItems={'baseline'} px={5} py={3} minWidth={'1000px'}>
                <Typography variant={'h1'}>Albums</Typography>
                <Search/>
            </RowFlexBox>
            <Albums albums={filteredAlbums} isError={isError} isLoading={isLoading}/>
        </FilterContext.Provider>
    );
};
