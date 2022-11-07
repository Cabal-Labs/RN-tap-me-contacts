import React from "react";
interface TMProvider {
    theme: object;
    children: JSX.Element;
}
export default function TMProvider({ theme, children }: TMProvider): JSX.Element;
export declare const isDark: () => boolean;
export declare const TMContext: React.Context<{
    Colors: {
        bg: string;
    };
}>;
export declare const useTheme: () => {
    Colors: {
        bg: string;
    };
};
export {};
