import '@testing-library/jest-dom';
import {server} from './__mocks__/api/server'
import {api} from './api/api'
import {setupStore} from './api/store'

const store = setupStore({});

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
    store.dispatch(api.util.resetApiState());
});

afterAll(() => server.close());
