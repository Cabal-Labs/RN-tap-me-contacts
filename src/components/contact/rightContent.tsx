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
									text={item.text}
									onPress={() => {
										item.action;
										setDropDownOpen(!dropDownOpen);
									}}
								/>
							);
						})}
					</View>
				) : null}
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
		transform: [{ translateY: 100 }],
	},
});
