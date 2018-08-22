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
import CallDetectorManager from "react-native-call-detection"
import { AudioRecorder, AudioUtils } from "react-native-audio-player-recorder";
import RNFetchBlob from "react-native-fetch-blob";
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
        //this.initRecordingSetting();
        this.startListenerTapped();
        CONSTANT.Navigate("DashboardView");
    }

    componentWillUnmount() {
        this.stopListenerTapped();
    }

    //Start call listener
    startListenerTapped() {
        this.callDetector = new CallDetectorManager((event) => {
            // For iOS event will be either "Connected", "Disconnected","Dialing" and "Incoming"
            // For Android event will be either "Offhook", "Disconnected", "Incoming" or "Missed"
            if (event === 'Disconnected') {
                // Do something call got disconnected
                console.log("Disconnected");
                this.stopRecording();
            }
            else if (event === 'Connected') {
                // Do something call got connected
                // This clause will only be executed for iOS
                console.log("Connected");
            }
            else if (event === 'Incoming') {
                // Do something call got incoming
                console.log("Incoming");
            }
            else if (event === 'Dialing') {
                // Do something call got dialing
                // This clause will only be executed for iOS
                console.log("Dialing");
            }
            else if (event === 'Offhook') {
                //Device call state: Off-hook. 
                // At least one call exists that is dialing, active, or on hold, and no calls are ringing or waiting.
                // This clause will only be executed for Android
                console.log("Offhook");
                this.startRecordingAudio();
            }
            else if (event === 'Missed') {
                // Do something call got missed
                // This clause will only be executed for Android
                console.log("Missed");
            }
        },
            false, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
            () => { }, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
            {
                title: 'Phone State Permission',
                message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
            } // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
        )
    }

    //Stop call listener
    stopListenerTapped() {
        this.callDetector && this.callDetector.dispose();
    }

    //Init recording setting
    initRecordingSetting() {
        console.log("Init recording setting");
        var filepath = RNFetchBlob.fs.dirs.DCIMDir + "/" + CONSTANT.randomID("aac");
        CONSTANT.RECORD_PATH = filepath;
        console.log(filepath);
        AudioRecorder.prepareRecordingAtPath(filepath, {});
    }

    //Start recording after call
    startRecordingAudio() {
        this.initRecordingSetting();
        console.log("Start recording");
        AudioRecorder.startRecording();
    }

    //Stop recording and save automatically
    stopRecording() {
        console.log("Stop recording");
        AudioRecorder.stopRecording();
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
