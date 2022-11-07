import React, { useContext, createContext } from "react";
import { useColorScheme } from "react-native";
const ColorsDark = {
    bg: "#000",
};
const ColorsLight = {
    bg: "#000",
};
export default function TMProvider({ theme, children }) {
    console.log(theme[ColorsDark]);
    console.log(typeof theme);
    // const ColorsDark = theme[ColorsDark];
    // const ColorsLight = theme[ColorsLight];
    const colorScheme = useColorScheme();
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