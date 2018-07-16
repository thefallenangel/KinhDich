import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    BackHandler,
} from 'react-native';
import { AppStyle } from "./data/Style";

const { width, height } = Dimensions.get("window");

export default class DashboardView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        BackHandler.exitApp();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[AppStyle.container, {
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "red"
                }]}>

                </View>
            </View>
        );
    }
}
