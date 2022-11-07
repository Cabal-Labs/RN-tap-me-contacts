import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "../../styles/TMProvider";
import Picture from "./picture";
import RightContent from "./rightContent";
export default function Contact({ picture, altPicture, name, metadata, size = "md", rightContent, buttonText, onButtonPress, }) {
    const rightContentProps = {
        type: rightContent,
        buttonText,
        onButtonPress,
    };
    const { Colors } = useTheme();
    return (React.createElement(View, { style: { ...styles.container, backgroundColor: Colors.bg } },
        React.createElement(View, { style: styles.contactContainer },
            React.createElement(Picture, { ...{ picture, altPicture, _size: size } }),
            React.createElement(Text, { style: styles.text }, name)),
        React.createElement(RightContent, { ...rightContentProps })));
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 5,
        padding: 5,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: "#333",
    },
    contactContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
    },
    text: {
        marginLeft: 10,
    },
});
//# sourceMappingURL=contactCard.js.map