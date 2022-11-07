import React from "react";
import { Image, StyleSheet, View } from "react-native";
export default function Picture({ picture, altPicture, _size }) {
    const pictureSize = {
        sm: 30,
        md: 50,
        lg: 70,
        xl: 100,
    };
    const size = _size;
    const containerStyle = {
        position: "relative",
        padding: 5,
    };
    const pictureStyle = {
        height: pictureSize[size],
        width: pictureSize[size],
        borderRadius: pictureSize[size] / 2,
    };
    const altPictureStyle = {
        height: pictureSize[size] / 2,
        width: pictureSize[size] / 2,
        borderRadius: pictureSize[size] / 4,
    };
    const imgStyle = {
        height: "100%",
        width: "100%",
    };
    return (React.createElement(View, null,
        React.createElement(Image, { source: { uri: picture }, style: pictureStyle }),
        React.createElement(View, { style: { ...styles.altPicture, ...altPictureStyle } },
            React.createElement(Image, { source: { uri: altPicture }, style: imgStyle }))));
}
const styles = StyleSheet.create({
    altPicture: {
        height: 50,
        width: 50,
        borderRadius: 25,
        position: "absolute",
        overflow: "hidden",
        bottom: 0,
        right: 0,
    },
});
//# sourceMappingURL=picture.js.map