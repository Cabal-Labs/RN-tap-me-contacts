import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export default function Button({ children, onPress, iconLeft, iconRight, variant, }) {
    return (React.createElement(TouchableOpacity, { onPress: () => onPress, style: styles.button },
        iconLeft ? React.createElement(React.Fragment, null, iconLeft) : null,
        React.createElement(Text, null, children),
        iconRight ? React.createElement(React.Fragment, null, iconRight) : null));
}
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 2.5,
        marginVertical: 2.5,
        borderRadius: 2.5,
        backgroundColor: "pink",
    },
});
//# sourceMappingURL=button.js.map