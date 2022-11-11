import React, { useState } from "react";
import { Text, Modal, TouchableOpacity, StyleSheet, View } from "react-native";
import Button from "../core/button";

interface ContactModal {
	address: string;
	isOpen: boolean;
	setIsOpen: Function;
	name?: string;
}

export default function ContactModal({
	address,
	isOpen,
	setIsOpen,
	name,
}: ContactModal) {
	return (
		<>
			<Modal visible={isOpen} style={styles.modal} transparent>
				<View style={styles.modalContainer}>
					<View style={styles.img}></View>
					<Text>{address}</Text>
					<Button
						onPress={() => {
							setIsOpen(!isOpen);
						}}>
						Close
					</Button>
				</View>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	modal: {
		height: "100%",
		width: "100%",
		backgroundColor: "transparent",
		paddingVertical: 100,
		paddingHorizontal: 40,
	},
	modalContainer: {
		backgroundColor: "white",
		height: "100%",
		width: "100%",
		paddingVertical: 100,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	img: {
		height: 150,
		width: 150,
		borderRadius: 75,
		backgroundColor: "lightblue",
	},
});
