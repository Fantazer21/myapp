import React from 'react';
import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './ui/App';
import {Provider} from "react-redux";
import {store} from "./bll/store";


ReactDOM.render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();



