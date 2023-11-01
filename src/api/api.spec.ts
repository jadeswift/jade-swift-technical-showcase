import {useAlbumDataQuery} from "./api";
import {renderHook, waitFor} from "@testing-library/react";
import {apiProvider} from "../testing/api-provider";
import {ModelFactory} from "../testing/model-factory";
import {server} from "../__mocks__/api/server";
// @ts-ignore
import {rest} from "msw";
import {renderWithProviders} from "../testing/render-with-providers";

describe('api tests', () => {
    const apiData = [
        {name: "Mark Zuckerberg", age: "34"},
        {name: "Elon Musk", age: "44"}
    ]

    test("table should render after fetching from API depending on request Query parameters", async () => {
        // custom msw server
        server.use(
            rest.get(`*`, (req: { url: { searchParams: { getAll: (arg0: string) => any; }; }; }, res: (arg0: any) => any, ctx: { json: (arg0: { name: string; age: string; }[]) => any; }) => {
                    const arg = req.url.searchParams.getAll("page");
                    console.log(arg)
                    return res(ctx.json(apiData))
                }
            )
        );

        const table = document.createElement('table')
        const {container} = renderWithProviders(<AlbumsWrapper / >);

        const allRows = await screen.findAllByRole("row")

        await waitFor(() => {
            expect(container).toBeInTheDocument();
        })

        await waitFor(() => {
            expect(allRows.length).toBe(10);
        })
    })
});

