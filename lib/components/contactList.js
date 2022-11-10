import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ContactCard } from "./contact";
export default function ContactList({ walletAddress, actionStyle, actions, }) {
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
            picture: `https://xsgames.co/randomusers/avatar.php?g=${Math.random() < 0.5 ? "male" : "female"}`,
            altPicture: "https://xsgames.co/randomusers/avatar.php?g=pixel",
            name: "Jordan A",
            // size: 'lg',
        },
        {
            picture: `https://xsgames.co/randomusers/avatar.php?g=${Math.random() < 0.5 ? "male" : "female"}`,
            altPicture: "https://xsgames.co/randomusers/avatar.php?g=pixel",
            name: "Jordan A",
        },
        {
            picture: `https://xsgames.co/randomusers/avatar.php?g=${Math.random() < 0.5 ? "male" : "female"}`,
            altPicture: "https://xsgames.co/randomusers/avatar.php?g=pixel",
            name: "Jordan A",
            // size: 'sm',
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, null, address),
        users.map((item) => {
            return React.createElement(ContactCard, { ...item, ...actionProps });
        })));
}
//# sourceMappingURL=contactList.js.map