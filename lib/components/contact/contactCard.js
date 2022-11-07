import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Picture from "./picture";
export default function Contact({ picture, altPicture, name, metadata, size = "md", }) {
    return (React.createElement(View, { style: styles.container },
        React.createElement(View, { style: styles.contactContainer },
            React.createElement(Picture, { ...{ picture, altPicture, _size: size } }),
            React.createElement(Text, { style: styles.text }, name))));
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: 5,
    },
    contactContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text: {
        marginLeft: 10,
    },
});
//# sourceMappingURL=contactCard.js.map