/// <reference types="react" />
interface Contact {
    picture: string;
    altPicture?: string;
    name: string;
    metadata?: object;
    size?: string;
}
export default function Contact({ picture, altPicture, name, metadata, size, }: Contact): JSX.Element;
export {};
