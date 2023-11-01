// @ts-ignore
import {rest} from 'msw'
import {ModelFactory} from "../../testing/model-factory";

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/albums', (req, res, ctx) => {
        const albums = ModelFactory.createMany(ModelFactory.createAlbum, 10);
        return res(ctx.status(200), ctx.json(albums), ctx.delay(30))
    }
]