import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    Alert,
} from 'react-native';
import { createStackNavigator } from "react-navigation";
import { COLOR } from "react-native-material-ui";
import { AppStyle } from "./data/Style";
import CONSTANT from "./data/Constant";

import SplashView from "./Splash";
import DashboardView from "./Dashboard";
import InstructionView from "./screen/Instruction";
import ReadingView from "./screen/Reading";
import MessengerView from "./screen/Messenger";

const StackMain = createStackNavigator({
    SplashView: {
        screen: SplashView,
        navigationOptions: {
            gesturesEnabled: false,
            headerStyle: { display: "none" }
        }
    },
    DashboardView: {
        screen: DashboardView,
        navigationOptions: {
            gesturesEnabled: false,
            headerStyle: { display: "none" }
        }
    },
    InstructionView: {
        screen: InstructionView,
        navigationOptions: {
            gesturesEnabled: false,
            headerStyle: { display: "none" }
        }
    },
    ReadingView: {
        screen: ReadingView,
        navigationOptions: {
            gesturesEnabled: false,
            headerStyle: { display: "none" }
        }
    },
    MessengerView: {
        screen: MessengerView,
        navigationOptions: {
            gesturesEnabled: false,
            headerStyle: { display: "none" }
        }
    },
});

export default class MainView extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <StackMain
                onNavigationStateChange={(prevState, newState, action) => {
                    var current = newState.routes[newState.index];
                    while (current.routes) {
                        current = current.routes[current.index];
                    }
                    CONSTANT.CURSTATE = current.routeName;
                }}
            />
        );
    }
}
