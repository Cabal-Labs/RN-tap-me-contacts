/// <reference types="react" />
import { Action } from "../types";
interface ContactList {
    walletAddress: string;
    actionStyle?: string;
    actions?: Array<Action>;
}
export default function ContactList({ walletAddress, actionStyle, actions, }: ContactList): JSX.Element;
export {};
