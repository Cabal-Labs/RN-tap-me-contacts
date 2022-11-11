import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../styles/TMProvider";
import { Action } from "../../types";
import ContactModal from "./contactModal";
import Picture from "./picture";
import RightContent from "./rightContent";

interface Contact {
	address: string;
	picture: string;
	altPicture?: string;
	name: string;
	size?: string;
	actionStyle?: string;
	actions?: Array<Action>;
}
export default function Contact({
	address,
	picture,
	altPicture,
	name,
	size = "md",
	actionStyle,
	actions,
}: Contact): JSX.Element {
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
	return (
		<>
			<View style={{ ...styles.container, backgroundColor: Colors.bg }}>
				<TouchableOpacity
					style={styles.contactContainer}
					onPress={() => setIsOpen(!isOpen)}>
					<Picture {...{ picture, altPicture, _size: size }} />
					<Text style={{ ...styles.text }}>{name}</Text>
				</TouchableOpacity>
				<RightContent {...rightContentProps} />
			</View>
			<ContactModal {...modalProps} />
		</>
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
