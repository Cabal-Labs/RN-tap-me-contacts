import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Picture from "./picture";
import RightContent from "./rightContent";

interface Contact {
	picture: string;
	altPicture?: string;
	name: string;
	metadata?: object;
	size?: string;
	rightContent?: string;
	buttonText?: string;
	onButtonPress?: Function;
}
export default function Contact({
	picture,
	altPicture,
	name,
	metadata,
	size = "md",
	rightContent,
	buttonText,
	onButtonPress,
}: Contact) {
	const rightContentProps = {
		type: rightContent,
		buttonText,
		onButtonPress,
	};
	return (
		<View style={styles.container}>
			<View style={styles.contactContainer}>
				<Picture {...{ picture, altPicture, _size: size }} />
				<Text style={styles.text}>{name}</Text>
			</View>
			<RightContent {...rightContentProps} />
		</View>
	);
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
