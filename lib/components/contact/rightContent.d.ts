/// <reference types="react" />
interface RightContent {
    type?: string;
    buttonText?: string;
    onButtonPress?: Function;
}
export default function RightContent({ type, buttonText, onButtonPress, }: RightContent): JSX.Element;
export {};
