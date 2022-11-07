/// <reference types="react" />
interface Picture {
    picture: string;
    altPicture?: string;
    _size?: string;
}
export default function Picture({ picture, altPicture, _size }: Picture): JSX.Element;
export {};
