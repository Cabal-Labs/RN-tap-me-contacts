import React from "react";
import { Text, TouchableOpacity } from "react-native";
export default function Button({ text, onPress, iconLeft, iconRight, variant, }) {
    return (React.createElement(TouchableOpacity, { onPress: () => onPress },
        iconLeft ? React.createElement(React.Fragment, null, iconLeft) : null,
        React.createElement(Text, null, text),
        iconRight ? React.createElement(React.Fragment, null, iconRight) : null));
}
//# sourceMappingURL=button.js.map