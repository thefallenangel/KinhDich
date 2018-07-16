import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window");

export const AppStyle = StyleSheet.create({
    container: {
        //width: width,
        flex: 1
    }
});