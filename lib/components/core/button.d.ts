/// <reference types="react" />
interface Button {
    children: string;
    onPress: Function;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    variant?: string;
}
export default function Button({ children, onPress, iconLeft, iconRight, variant, }: Button): JSX.Element;
export {};
