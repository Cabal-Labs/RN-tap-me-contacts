/// <reference types="react" />
interface Contact {
    picture: string;
    altPicture?: string;
    name: string;
    metadata?: object;
    size?: string;
    rightContent?: string;
    buttonText?: string;
    onButtonPress?: Function;
}
export default function Contact({ picture, altPicture, name, metadata, size, rightContent, buttonText, onButtonPress, }: Contact): JSX.Element;
export {};
