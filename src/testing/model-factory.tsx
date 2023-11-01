import {faker} from '@faker-js/faker';
import {Album} from "../models/album";
import {Photo} from "../models/photo";

function createAlbum(
    model: Partial<Album> = {}
): Album {
    return {
        id: faker.number.int(),
        title: faker.word.words(5),
        userId: faker.number.int(),
        ...model,
    };
}

function createPhoto(
    model: Partial<Photo> = {}
): Photo {
    return {
        albumId: faker.number.int(),
        id: faker.number.int(),
        thumbnailUrl: faker.image.url(),
        title: faker.word.words(5),
        url: faker.image.url(),
        ...model
    };
}

function createMany<T>(factory: () => T, count: number): Array<T> {
    const items: Array<T> = [];
    for (let i = 0; i < count; i++) {
        items.push(factory());
    }
    return items;
}

export const ModelFactory = {
    createAlbum,
    createPhoto,
    createMany
};