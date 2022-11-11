import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Action } from "../types";
import { ContactCard } from "./contact";

interface ContactList {
	walletAddress: string;
	actionStyle?: string;
	actions?: Array<Action>;
}

export default function ContactList({
	walletAddress,
	actionStyle,
	actions,
}: ContactList) {
	const actionProps = {
		actionStyle,
		actions,
	};
	//hooks to get users contacts using tap-me-tools
	const [address, setAddress] = useState("0x");
	useEffect(() => {
		console.log(walletAddress);
		setAddress(address + walletAddress);
	}, []);

	const users = [
		{
			picture: `https://xsgames.co/randomusers/avatar.php?g=${
				Math.random() < 0.5 ? "male" : "female"
			}`,
			altPicture: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			name: "Jordan A",
			address: "123456789",
			// size: 'lg',
		},
		{
			picture: `https://xsgames.co/randomusers/avatar.php?g=${
				Math.random() < 0.5 ? "male" : "female"
			}`,
			altPicture: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			name: "Jordan A",
			address: "123456789",
		},
		{
			picture: `https://xsgames.co/randomusers/avatar.php?g=${
				Math.random() < 0.5 ? "male" : "female"
			}`,
			altPicture: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			name: "Jordan A",
			address: "123456789",
			// size: 'sm',
		},
	];
	return (
		<>
			<Text>{address}</Text>
			{users.map((item) => {
				return <ContactCard {...item} {...actionProps} />;
			})}
		</>
	);
}
