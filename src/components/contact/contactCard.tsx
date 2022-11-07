import React from "react";
import { Text, View } from "react-native";
import Picture from "./picture";

interface Contact {
	picture: string;
	altPicture?: string;
	name: string;
	metadata?: object;
}
export default function Contact({
	picture,
	altPicture,
	name,
	metadata,
}: Contact) {
	return (
		<View>
			<Picture {...{ picture, altPicture }} />
			<Text>{name}</Text>
		</View>
	);
}
