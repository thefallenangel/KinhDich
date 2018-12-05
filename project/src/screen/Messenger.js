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
import { Client4 } from "mattermost-redux/client";
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

    componentDidMount() {
        this.initMessengerFeature();
    }

    //Init mattermost redux
    initMessengerFeature() {
        Client4.setUrl("https://chat.247post.vn");
        Client4.login("the.fallen.angel.9x@gmail.com", "Huynh01696762809")
            .then(() => {
                Client4.getMe()
                    .then((data) => {
                        console.log("Me: ", data);
                        this.getEverything();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //Get everything
    getEverything() {
        //Get user by email
        Client4.getUserByEmail("the.fallen.angel.9x@gmail.com").then((data) => {
            console.log("User by email:", data);
        })
        //Get list team
        Client4.getTeams().then((data) => {
            console.log("Teams list:", data);
        })
        //Get team by name
        Client4.getTeamByName("cnn").then((data) => {
            console.log("Team by name:", data);
        })
        //Get channel by team id
        Client4.getChannels("on7rec1a77ncxm4o5xpohmhr4h").then((data) => {
            console.log("Channels by team: ", data);
        })
        //Post a message
        Client4.createPost({
            channel_id: "pyxp6ryhejyabdtaag5scp4wbr",
            message: "Angel say hi"
        }).then((data) => {
            console.log("Send post: ", data);
        })

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
