import React, { useContext, createContext, useEffect } from "react";
import { useColorScheme } from "react-native";
const ColorsDark = {
	bg: "#000",
};
const ColorsLight = {
	bg: "#000",
};
interface TMProvider {
	theme: object;
	children: JSX.Element;
}

export default function TMProvider({ theme, children }: TMProvider) {
	type themeKey = keyof typeof theme;
	console.log(theme[ColorsDark as themeKey]);
	console.log(typeof theme);
	// const ColorsDark = theme[ColorsDark];
	// const ColorsLight = theme[ColorsLight];
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
export const TMContext = createContext({
	Colors: ColorsDark,
});
export const useTheme = () => useContext(TMContext);
