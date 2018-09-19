import React, { Component } from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    BackHandler,
    TouchableOpacity,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ExToolbar from "../layout/Toolbar";
import { AppStyle, AppColor } from "../data/Style";
import CONSTANT from "../data/Constant";


const { width, height } = Dimensions.get("window");

export default class MessengerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let titleName = this.state.TransferItem != undefined ?
            this.state.TransferItem.name.toLowerCase() : "";
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#930000" translucent />
                <ExToolbar
                    ref="toolbar"
                    leftElement="arrow-left"
                    onLeftElementPress={() => { CONSTANT.NaviBack("MessengerView"); }}
                    centerTitle="Chat demo"
                    numberOfLines={2}
                    centerSubTitle={null}
                />
                <View style={[AppStyle.container]}>

                </View>
            </View>
        );
    }
}
