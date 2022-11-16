import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../styles/TMProvider";

interface Button {
	children: string;
	onPress: Function;
	iconLeft?: JSX.Element;
	iconRight?: JSX.Element;
	variant?: string;
}
export default function Button({
	children,
	onPress,
	iconLeft,
	iconRight,
	variant,
}: Button) {
	const { Colors } = useTheme();
	return (
		<TouchableOpacity
			onPress={() => onPress}
			style={{ ...styles.button, backgroundColor: Colors.primary }}>
			{iconLeft ? <>{iconLeft}</> : null}
			<Text style={{ color: Colors.text }}>{children}</Text>
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
	},
});
