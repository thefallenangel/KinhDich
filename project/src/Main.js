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
import { COLOR } from "react-native-material-ui";


const { width, height } = Dimensions.get("window");

export default class MainView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[AppStyle.container, {
                    justifyContent: "center",
                    alignItems: "center",
                }]}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={require("../imgs/logo.jpg")}
                    />
                </View>
            </View>
        );
    }
}
