import React, { useContext, createContext, useEffect } from "react";
import { useColorScheme } from "react-native";
const ColorsDark = {
	bg: "#000",
	text: "#fff",
};
const ColorsLight = {
	bg: "#fff",
	text: "#000",
};
interface TMProvider {
	theme: object;
	children: JSX.Element;
}
export const TMContext = createContext({
	Colors: ColorsDark,
});
export default function TMProvider({ theme, children }: TMProvider) {
	const colorScheme = useColorScheme();
	const defaultTheme = {
		Colors: colorScheme === "dark" ? ColorsDark : ColorsLight,
	};
	return (
		<TMContext.Provider value={defaultTheme}>{children}</TMContext.Provider>
	);
}

export const isDark = () => {
	const colorScheme = useColorScheme();
	return colorScheme === "dark";
};

export const useTheme = () => useContext(TMContext);
