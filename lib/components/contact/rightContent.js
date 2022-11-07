import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export default function RightContent({ type, buttonText, onButtonPress, }) {
    if (type === "button") {
        return (React.createElement(TouchableOpacity, { onPress: () => onButtonPress, style: styles.container },
            React.createElement(Text, null, buttonText)));
    }
    else {
        return React.createElement(React.Fragment, null);
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 5,
        flex: 0,
    },
});
//# sourceMappingURL=rightContent.js.map