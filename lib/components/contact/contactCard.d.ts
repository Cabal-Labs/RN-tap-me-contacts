/// <reference types="react" />
import { Action } from "../../types";
interface Contact {
    picture: string;
    altPicture?: string;
    name: string;
    size?: string;
    actionStyle?: string;
    actions?: Array<Action>;
}
export default function Contact({ picture, altPicture, name, size, actionStyle, actions, }: Contact): JSX.Element;
export {};
