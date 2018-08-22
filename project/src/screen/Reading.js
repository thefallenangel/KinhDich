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
    Linking,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AudioPlayer } from "react-native-audio-player-recorder";
import ExToolbar from "../layout/Toolbar";
import { AppStyle, AppColor } from "../data/Style";
import CONSTANT from "../data/Constant";


const { width, height } = Dimensions.get("window");

export default class ReadingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Number: "0936276883",
            IsPlaying: false,
        }
    }

    componentDidMount() {
        AudioPlayer.setFinishedSubscription();
        AudioPlayer.onFinished = this.onFinished;
    }

    //Link to call view
    linkToCall() {
        //Set flag that record this call
        CONSTANT.IS_RECORD = true;
        Linking.openURL("tel:" + this.state.Number);
    }

    //Play recorded file
    playRecordedFile() {
        if (CONSTANT.RECORD_PATH != "") {
            this.setState({
                IsPlaying: true
            }, () => {
                console.log("PATH: " + CONSTANT.RECORD_PATH)
                AudioPlayer.play(CONSTANT.RECORD_PATH, {
                    output: "Phone Speaker"
                });
            })
        }
    }

    onFinished = (data) => {
        this.setState({
            IsPlaying: false
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#930000" translucent />
                <ExToolbar
                    ref="toolbar"
                    leftElement="arrow-left"
                    onLeftElementPress={() => { CONSTANT.NaviBack("ReadingView"); }}
                    centerTitle="Đọc thêm"
                    numberOfLines={2}
                    centerSubTitle={null}
                />
                <View style={[AppStyle.container]}>
                    <View style={[AppStyle.verticalWrapper]}>
                        <TouchableOpacity
                            style={[AppStyle.normalButton]}
                            onPress={() => {
                                this.linkToCall();
                            }}
                        >
                            <Text style={[AppStyle.normalText]}>
                                Start calling
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[AppStyle.verticalWrapper]}>
                        <TouchableOpacity
                            style={[AppStyle.normalButton, {
                                backgroundColor: this.state.IsPlaying ? "#80ff80" : "#ff8080"
                            }]}
                            onPress={() => {
                                this.playRecordedFile();
                            }}
                        >
                            <Text style={[AppStyle.normalText]}>
                                Listen latest record
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
