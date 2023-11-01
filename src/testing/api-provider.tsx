import React, {ReactElement} from 'react';
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import {api} from "../api/api";

export function apiProvider(props: { children: ReactElement }) {
    return (
        <ApiProvider api={api}>{props.children}</ApiProvider>
    );

}
