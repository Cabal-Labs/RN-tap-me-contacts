import React from "react";
import { Text, Modal, StyleSheet, View } from "react-native";
import Button from "../core/button";
export default function ContactModal({ address, isOpen, setIsOpen, name, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { visible: isOpen, style: styles.modal, transparent: true },
            React.createElement(View, { style: styles.modalContainer },
                React.createElement(View, { style: styles.img }),
                React.createElement(Text, null, address),
                React.createElement(Button, { onPress: () => {
                        setIsOpen(!isOpen);
                    } }, "Close")))));
}
const styles = StyleSheet.create({
    modal: {
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        paddingVertical: 100,
        paddingHorizontal: 40,
    },
    modalContainer: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingVertical: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 75,
        backgroundColor: "lightblue",
    },
});
//# sourceMappingURL=contactModal.js.map