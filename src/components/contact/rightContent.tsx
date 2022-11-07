import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface RightContent {
	type: string;
	buttonText?: string;
	onButtonPress?: Function;
}

export default function RightContent({
	type,
	buttonText,
	onButtonPress,
}: RightContent) {
	if (type === "button") {
		return (
			<TouchableOpacity onPress={() => onButtonPress}>
				<Text>{buttonText}</Text>
			</TouchableOpacity>
		);
	}
}
