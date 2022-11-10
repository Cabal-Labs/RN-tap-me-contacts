import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "../../styles/TMProvider";
import { Action } from "../../types";
import Picture from "./picture";
import RightContent from "./rightContent";

interface Contact {
	picture: string;
	altPicture?: string;
	name: string;
	size?: string;
	actionStyle?: string;
	actions?: Array<Action>;
}
export default function Contact({
	picture,
	altPicture,
	name,
	size = "md",
	actionStyle,
	actions,
}: Contact): JSX.Element {
	const rightContentProps = {
		actionStyle,
		actions,
	};
	const { Colors } = useTheme();
	return (
		<View style={{ ...styles.container, backgroundColor: Colors.bg }}>
			<View style={styles.contactContainer}>
				<Picture {...{ picture, altPicture, _size: size }} />
				<Text style={{ ...styles.text }}>{name}</Text>
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
