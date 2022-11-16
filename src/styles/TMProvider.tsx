import React, { useContext, createContext, useEffect } from "react";
import { useColorScheme } from "react-native";
type themeObj = {
	[key: string]: any;
};
const ColorsDark: themeObj = {
	bg: "#000",
	fg: "#111",
	text: "#fff",
	primary: "#444",
	secondary: "#555",
};
const ColorsLight: themeObj = {
	bg: "#eee",
	fg: "#ddd",
	text: "#fff",
	primary: "#222",
	secondary: "#333",
};

interface TMProvider {
	theme: object;
	children: JSX.Element;
}

export default function TMProvider({ theme, children }: TMProvider) {
	Object.entries(theme).forEach(([mode, colors]) => {
		console.log({ mode });
		if (mode === "Dark") {
			console.log(mode);
			Object.entries(colors).forEach(([key, value]) => {
				ColorsDark[key] = value;
			});
		}
		if (mode === "Light") {
			console.log(mode);
			Object.entries(colors).forEach(([key, value]) => {
				ColorsLight[key] = value;
			});
		}
		console.log(ColorsDark);
		console.log(ColorsLight);
	});

	const colorScheme = useColorScheme();
	console.log(colorScheme);
	console.log("===============");

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
