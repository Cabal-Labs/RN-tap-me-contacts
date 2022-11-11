import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../styles/TMProvider";
import ContactModal from "./contactModal";
import Picture from "./picture";
import RightContent from "./rightContent";
export default function Contact({ address, picture, altPicture, name, size = "md", actionStyle, actions, }) {
    const [isOpen, setIsOpen] = useState(false);
    const rightContentProps = {
        actionStyle,
        actions,
    };
    const modalProps = {
        address,
        isOpen,
        setIsOpen,
    };
    const { Colors } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(View, { style: { ...styles.container, backgroundColor: Colors.bg } },
            React.createElement(TouchableOpacity, { style: styles.contactContainer, onPress: () => setIsOpen(!isOpen) },
                React.createElement(Picture, { ...{ picture, altPicture, _size: size } }),
                React.createElement(Text, { style: { ...styles.text } }, name)),
            React.createElement(RightContent, { ...rightContentProps })),
        React.createElement(ContactModal, { ...modalProps })));
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