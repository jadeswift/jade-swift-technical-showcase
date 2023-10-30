import React, {ReactElement} from 'react';
import {Route, Routes, Router} from 'react-router';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';

export type RenderWithNavigationOpts = {
    currentRoute?: string;
    routePath?: string;
};

export function renderWithNavigation(
    ui: ReactElement,
    opts: RenderWithNavigationOpts = {}
) {
    const initialEntries = [opts.currentRoute || '/'];
    const history = createMemoryHistory({initialEntries});
    jest.spyOn(history, 'push');
    const route = opts.routePath ? (
        <Route path={opts.routePath} element={ui}/>
    ) : (
        <Route index element={ui}/>
    );

    const result = render(
        <Router navigator={history} location={history.location}>
            <Routes>{route}</Routes>
        </Router>
    );

    return {
        ...result,
        history,
    };
}
