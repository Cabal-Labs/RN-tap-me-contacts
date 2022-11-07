import React, { useContext, createContext } from "react";
import { useColorScheme } from "react-native";
const ColorsDark = {
    bg: "#000",
    text: "#fff",
};
const ColorsLight = {
    bg: "#fff",
    text: "#000",
};
export const TMContext = createContext({
    Colors: ColorsDark,
});
export default function TMProvider({ theme, children }) {
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
export const useTheme = () => useContext(TMContext);
//# sourceMappingURL=TMProvider.js.map