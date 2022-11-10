import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Button {
	text: string;
	onPress: Function;
	iconLeft?: JSX.Element;
	iconRight?: JSX.Element;
	variant?: "contained" | "outlined" | "ghost";
}
export default function Button({
	text,
	onPress,
	iconLeft,
	iconRight,
	variant,
}: Button) {
	return (
		<TouchableOpacity onPress={() => onPress}>
			{iconLeft ? <>{iconLeft}</> : null}
			<Text>{text}</Text>
			{iconRight ? <>{iconRight}</> : null}
		</TouchableOpacity>
	);
}
