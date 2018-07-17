import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window");

export const AppColor = {
    primaryColor: "#cc0000",
    accentColor: "#ff6666",
}

export const AppStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    normalText: {
        fontSize: 14,
        color: "#330000"
    }
});