import React from "react";
import { Image, View } from "react-native";
interface Picture {
	picture: string;
	altPicture?: string;
}
export default function Picture({ picture, altPicture }: Picture) {
	const containerStyle = {
		position: "relative",
		padding: 5,
	};
	const pictureStyle = {
		height: 150,
		width: 150,
	};
	const altPictureStyle = {
		height: 50,
		width: 50,
		position: "absolute",
		top: 0,
		right: 0,
	};
	const imgStyle = {
		height: "100%",
		width: "100%",
	};
	return (
		<View>
			<Image source={{ uri: picture }} style={pictureStyle} />
			<View style={{ position: "absolute", height: 50, width: 50 }}>
				<Image source={{ uri: altPicture }} style={imgStyle} />
			</View>
		</View>
	);
}
