import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../styles/TMProvider";
export default function Button({ children, onPress, iconLeft, iconRight, variant, }) {
    const { Colors } = useTheme();
    return (React.createElement(TouchableOpacity, { onPress: () => onPress, style: { ...styles.button, backgroundColor: Colors.primary } },
        iconLeft ? React.createElement(React.Fragment, null, iconLeft) : null,
        React.createElement(Text, { style: { color: Colors.text } }, variant),
        React.createElement(Text, { style: { color: Colors.text } }, children),
        iconRight ? React.createElement(React.Fragment, null, iconRight) : null));
}
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 2.5,
        marginVertical: 2.5,
        borderRadius: 2.5,
    },
});
//# sourceMappingURL=button.js.map