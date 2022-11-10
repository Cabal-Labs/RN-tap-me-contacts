/// <reference types="react" />
import { Action } from "../../types";
interface RightContent {
    actionStyle?: string;
    actions?: Array<Action>;
}
export default function RightContent({ actionStyle, actions, }: RightContent): JSX.Element;
export {};
