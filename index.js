import React, { Component } from "react";
import { AppRegistry } from 'react-native';

import { createStore } from "redux";
import { Provider } from "react-redux";

import AllReducer from "./project/src/reducer/AllReducer";
import MainContainer from "./project/src/container/MainContainer";

let store = createStore(AllReducer);
const App = () => {
    return (
        <Provider store={store}>
            <MainContainer />
        </Provider>
    );
}

AppRegistry.registerComponent('KinhDich', () => App);
