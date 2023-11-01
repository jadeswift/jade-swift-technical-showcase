// @ts-nocheck
import {rest} from "msw";
import {ModelFactory} from "../../testing/model-factory";
import {Album} from "../../models/album";

export const mockAlbums = ModelFactory.createMany(ModelFactory.createAlbum, 4)

export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/todos", (_, res, ctx) =>
        res(ctx.status(200), ctx.json<Album[]>(albums))
    ),
];