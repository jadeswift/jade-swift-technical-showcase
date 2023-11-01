// @ts-nocheck
import {configureStore} from "@reduxjs/toolkit";
import {api} from "./api";

export const setupStore = preloadedState => {
    return configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
        },
        preloadedState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                immutableCheck: false,
                serializableCheck: false,
            }).concat(api.middleware),
    })
}