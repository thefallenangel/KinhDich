import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native';
import { AppStyle } from "./data/Style";
import CONSTANT from "./data/Constant";

const { width, height } = Dimensions.get("window");

export default class SplashView extends Component {
    constructor(props, context) {
        super(props, context);
        CONSTANT.NAVI = this.props.navigation;
        this.state = {

        }
    }

    componentDidMount() {
        CONSTANT.Navigate("DashboardView");
    }

    render() {
        return (
            <View style={[AppStyle.container, {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white"
            }]}>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={require("../imgs/logo.jpg")}
                />
            </View>
        );
    }
}
