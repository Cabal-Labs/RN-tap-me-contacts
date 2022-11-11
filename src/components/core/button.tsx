import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Button {
	children: string;
	onPress: Function;
	iconLeft?: JSX.Element;
	iconRight?: JSX.Element;
	variant?: "contained" | "outlined" | "ghost";
}
export default function Button({
	children,
	onPress,
	iconLeft,
	iconRight,
	variant,
}: Button) {
	return (
		<TouchableOpacity onPress={() => onPress} style={styles.button}>
			{iconLeft ? <>{iconLeft}</> : null}
			<Text>{children}</Text>
			{iconRight ? <>{iconRight}</> : null}
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginHorizontal: 2.5,
		marginVertical: 2.5,
		borderRadius: 2.5,
		backgroundColor: "pink",
	},
});
