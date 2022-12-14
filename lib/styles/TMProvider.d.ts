import React from "react";
declare type themeObj = {
    [key: string]: any;
};
interface TMProvider {
    theme: object;
    children: JSX.Element;
}
export default function TMProvider({ theme, children }: TMProvider): JSX.Element;
export declare const isDark: () => boolean;
export declare const TMContext: React.Context<{
    Colors: themeObj;
}>;
export declare const useTheme: () => {
    Colors: themeObj;
};
export {};
