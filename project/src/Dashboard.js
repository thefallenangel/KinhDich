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
import GridView from "react-native-gridview";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ExToolbar from "./layout/Toolbar";
import { AppStyle, AppColor } from "./data/Style";
import CONSTANT from "./data/Constant";

const { width, height } = Dimensions.get("window");

export default class DashboardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Menu: [
                {
                    id: 1,
                    name: "Quẻ tiền khóa",
                    icon: "coin"
                },
                {
                    id: 2,
                    name: "Quẻ số",
                    icon: "numeric-8-box-outline"
                },
                {
                    id: 3,
                    name: "Hướng dẫn",
                    icon: "texture"
                },
                {
                    id: 4,
                    name: "Đọc thêm",
                    icon: "notebook"
                },
                {
                    id: 5,
                    name: "Chat demo",
                    icon: "wechat"
                },
            ],
        }
        this.onMenuPress = this.onMenuPress.bind(this);
        this.onInstructionPress = this.onInstructionPress.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        if (CONSTANT.CURSTATE == "DashboardView")
            BackHandler.exitApp();
    }

    onMenuPress(item) {
        switch (item.id) {
            case 3:
                CONSTANT.Navigate("InstructionView");
                break;
            case 4:
                CONSTANT.Navigate("ReadingView");
                break;
            case 5:
                CONSTANT.Navigate("MessengerView");
                break;
            default:
                break;
        }
    }

    onInstructionPress(item) {
        CONSTANT.Navigate("InstructionView", item);
    }

    render() {
        const itemW = parseInt(width / 120);
        const w = width / itemW;
        const h = w - 8;

        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#930000" translucent />
                <View style={[AppStyle.container]}>
                    <GridView
                        style={{ flex: 1, marginTop: 25 }}
                        data={this.state.Menu}
                        dataSource={null}
                        itemsPerRow={2}
                        renderItem={(item) => {
                            return (
                                <View style={{
                                    flex: 1,
                                    borderWidth: 1,
                                    borderColor: AppColor.accentColor,
                                    margin: 4,
                                    backgroundColor: "transparent",
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            marginTop: 5,
                                            marginRight: 5,
                                            alignItems: "flex-end",
                                            display: item.id < this.state.Menu.length - 2 ? "flex" : "none"
                                        }}
                                        onPress={() => {
                                            this.onInstructionPress(item);
                                        }}
                                    >
                                        <Icon name="information-outline" size={22} color={AppColor.accentColor} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        delayLongPress={0}
                                        onPress={() => {
                                            this.onMenuPress(item);
                                        }}
                                        style={{
                                            flex: 1,
                                            height: h,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            overflow: "hidden",
                                            flexDirection: "column"
                                        }}
                                    >
                                        <Icon name={item.icon} size={40} color={AppColor.primaryColor} />
                                        <Text style={[AppStyle.normalText, {
                                            fontSize: 16, textAlign: "center"
                                        }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                        key={(item, index) => index}
                    />
                </View>
            </View>
        );
    }
}
