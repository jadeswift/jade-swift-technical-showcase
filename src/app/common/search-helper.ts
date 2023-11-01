import {Album} from "../../models/album";
import {FilterModel} from "./filter-context";

export function searchHelper(albums: Album[], filterModel: FilterModel): Album[] {
    const searchString = sanitizeSearchTerms(filterModel);
    const searchFields = ['id', 'title'];
    return search(albums, searchFields, searchString);
}

const sanitizeSearchTerms = (filterModel: FilterModel) =>
    sanitize(filterModel.search).split(' ');

const sanitize = (text: string) => text.toLowerCase().replace(/[^\w\s]/gi, '');

const search = (
    albums: Album[],
    searchFields: string[],
    searchTerms: string[]
) => {
    return albums?.filter((album: Album) => {
        const fieldValues = searchFields.map((fieldName) =>
            album[fieldName as keyof Album]
        );

        return searchTerms.every((searchTerm) =>
            fieldValues.some((albumValue) => albumValue.toString().includes(searchTerm))
        );
    });
};