import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../core/button";
export default function RightContent({ actionStyle, actions, }) {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    if (actionStyle === "drop-down") {
        return (React.createElement(View, null,
            React.createElement(TouchableOpacity, { onPress: () => {
                    setDropDownOpen(!dropDownOpen);
                } },
                React.createElement(Text, null, "DropDown")),
            dropDownOpen ? (React.createElement(View, { style: { ...styles.dropDownContainer } }, actions === null || actions === void 0 ? void 0 : actions.map((item) => {
                return (React.createElement(Button, { onPress: () => {
                        item.action;
                        setDropDownOpen(!dropDownOpen);
                    } }, item.text));
            }))) : null));
    }
    else if (actionStyle === "right") {
        return (React.createElement(View, { style: { ...styles.row } }, actions === null || actions === void 0 ? void 0 : actions.map((item) => {
            return (React.createElement(Button, { variant: item.variant, onPress: () => {
                    item.action;
                    setDropDownOpen(!dropDownOpen);
                } }, item.text));
        })));
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
    dropDownContainer: {
        position: "absolute",
        right: 0,
        bottom: 0,
        backgroundColor: "#eee",
        zIndex: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 200,
        transform: [{ translateY: 50 }],
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
//# sourceMappingURL=rightContent.js.map