import React, { useContext, createContext } from "react";
import { useColorScheme } from "react-native";
const ColorsDark = {
    bg: "#000",
    fg: "#111",
    text: "#fff",
    primary: "#444",
    secondary: "#555",
};
const ColorsLight = {
    bg: "#eee",
    fg: "#ddd",
    text: "#fff",
    primary: "#222",
    secondary: "#333",
};
export default function TMProvider({ theme, children }) {
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
    return (React.createElement(TMContext.Provider, { value: defaultTheme }, children));
}
export const isDark = () => {
    const colorScheme = useColorScheme();
    return colorScheme === "dark";
};
export const TMContext = createContext({
    Colors: ColorsDark,
});
export const useTheme = () => useContext(TMContext);
//# sourceMappingURL=TMProvider.js.map