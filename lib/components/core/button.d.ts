/// <reference types="react" />
interface Button {
    text: string;
    onPress: Function;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    variant?: "contained" | "outlined" | "ghost";
}
export default function Button({ text, onPress, iconLeft, iconRight, variant, }: Button): JSX.Element;
export {};
