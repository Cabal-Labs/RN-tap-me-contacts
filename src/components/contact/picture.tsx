import React from "react";
import { Image, StyleSheet, View } from "react-native";
interface Picture {
	picture: string;
	altPicture?: string;
	_size?: string;
}
export default function Picture({ picture, altPicture, _size }: Picture) {
	const pictureSize: object = {
		sm: 30,
		md: 50,
		lg: 70,
		xl: 100,
	};
	type ObjectKey = keyof typeof pictureSize;
	const size = _size as ObjectKey;

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
	return (
		<View>
			<Image source={{ uri: picture }} style={pictureStyle} />
			<View style={{ ...styles.altPicture, ...altPictureStyle }}>
				<Image source={{ uri: altPicture }} style={imgStyle} />
			</View>
		</View>
	);
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
