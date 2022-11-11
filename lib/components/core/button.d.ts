/// <reference types="react" />
interface Button {
    children: string;
    onPress: Function;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    variant?: "contained" | "outlined" | "ghost";
}
export default function Button({ children, onPress, iconLeft, iconRight, variant, }: Button): JSX.Element;
export {};
