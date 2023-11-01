import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import {api} from "./api/api";
import {setupStore} from "./api/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore({});

root.render(
  <React.StrictMode>
      <ApiProvider api={api}>
          <Provider store={store}>
              <App/>
          </Provider>
      </ApiProvider>
  </React.StrictMode>
);