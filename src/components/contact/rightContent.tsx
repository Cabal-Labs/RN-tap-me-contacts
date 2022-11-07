import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface RightContent {
	type?: string;
	buttonText?: string;
	onButtonPress?: Function;
}

export default function RightContent({
	type,
	buttonText,
	onButtonPress,
}: RightContent): JSX.Element {
	if (type === "button") {
		return (
			<TouchableOpacity onPress={() => onButtonPress} style={styles.container}>
				<Text>{buttonText}</Text>
			</TouchableOpacity>
		);
	} else {
		return <></>;
	}
}
const styles = StyleSheet.create({
	container: {
		margin: 5,
		flex: 0,
	},
});
