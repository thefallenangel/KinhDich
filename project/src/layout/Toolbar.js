import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  Button,
  ListView,
  TouchableOpacity,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class ExToolbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.leftElement = this.props.leftElement;
    this.centerElement = this.props.centerElement;
    this.rightElement = this.props.rightElement;
    this.onLeftElementPress = this.props.onLeftElementPress;
    this.onRightElementPress = this.props.onRightElementPress;
    this.numberOfLines = this.props.numberOfLines;
    this.fontSize = this.props.fontSize;
    this.centerTitle = this.props.centerTitle;
    this.centerSubTitle = this.props.centerSubTitle;
    this.rightImage = this.props.rightImage;
    this.IconLeftSize = this.props.IconLeftSize ? this.props.IconLeftSize : 30;
    this.IconRightSize = this.props.IconRightSize ? this.props.IconRightSize : 30;

    this.state = {
      //centerTitle = this.props.centerTitle;
      //centerSubTitle = this.props.centerSubTitle;
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.leftElement && (
          <TouchableOpacity
            style={styles.leftElement}
            onPress={this.onLeftElementPress.bind(this)}
          >
            <Icon
              size={this.IconLeftSize}
              color="#fff"
              name={this.leftElement}
            />
          </TouchableOpacity>
        )}
        <View style={styles.centerElement}>
          <View
            style={{
              height: 50,
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Text
              numberOfLines={this.numberOfLines ? this.numberOfLines : 1}
              style={{
                // fontFamily: "UvfSlimTony",
                color: "white",
                fontSize: this.fontSize ? this.fontSize : 18,
                backgroundColor: "transparent",
                padding: 6,
                paddingBottom: this.centerSubTitle ? 20 : 6
              }}
            >
              {this.centerTitle}
            </Text>
          </View>
        </View>
        {this.rightElement && Array.isArray(this.rightElement) && this.rightElement.map(element => (
          <TouchableOpacity
            key={element}
            style={styles.rightElement}
            onPress={this.onRightElementPress.bind(this, element)}
          >
            <Icon size={this.IconRightSize} color="white" name={element} />
          </TouchableOpacity>
        ))}
        {this.rightElement && !Array.isArray(this.rightElement) && (
          <TouchableOpacity
            style={styles.rightElement}
            onPress={this.onRightElementPress.bind(this, this.rightElement)}
          >
            <Icon
              size={this.IconRightSize}
              color="white"
              name={this.rightElement}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cc0000",
    height: 73,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  leftElement: {
    width: 50,
    height: 50,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0
  },
  centerElement: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 0,
    flexDirection: "row"
  },
  rightElement: {
    width: 50,
    height: 50,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  }
});
