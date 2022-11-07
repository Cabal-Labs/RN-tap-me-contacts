import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "../../styles/TMProvider";
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
}: Contact): JSX.Element {
	const rightContentProps = {
		type: rightContent,
		buttonText,
		onButtonPress,
	};
	const { Colors } = useTheme();
	return (
		<View style={{ ...styles.container, backgroundColor: Colors.bg }}>
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
