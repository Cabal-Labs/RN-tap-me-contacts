import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Action } from "../../types";
import Button from "../core/button";

interface RightContent {
	actionStyle?: string;
	actions?: Array<Action>;
}

export default function RightContent({
	actionStyle,
	actions,
}: RightContent): JSX.Element {
	const [dropDownOpen, setDropDownOpen] = useState(false);
	if (actionStyle === "drop-down") {
		return (
			<View>
				<TouchableOpacity
					onPress={() => {
						setDropDownOpen(!dropDownOpen);
					}}>
					<Text>DropDown</Text>
				</TouchableOpacity>
				{dropDownOpen ? (
					<View style={{ ...styles.dropDownContainer }}>
						{actions?.map((item: Action) => {
							return (
								<Button
									onPress={() => {
										item.action;
										setDropDownOpen(!dropDownOpen);
									}}>
									{item.text}
								</Button>
							);
						})}
					</View>
				) : null}
			</View>
		);
	} else if (actionStyle === "right") {
		return (
			<View style={{ ...styles.row }}>
				{actions?.map((item: Action) => {
					return (
						<Button
							onPress={() => {
								item.action;
								setDropDownOpen(!dropDownOpen);
							}}>
							{item.text}
						</Button>
					);
				})}
			</View>
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
	dropDownContainer: {
		position: "absolute",
		right: 0,
		bottom: 0,
		backgroundColor: "#eee",
		zIndex: 100,
		paddingVertical: 5,
		paddingHorizontal: 10,
		width: 200,
		transform: [{ translateY: 50 }],
	},
	row: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});
