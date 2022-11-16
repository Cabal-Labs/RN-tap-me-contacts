/// <reference types="react" />
interface SaveContact {
    address: string;
    isOpen: boolean;
    setIsOpen: Function;
    name?: string;
}
export default function SaveContact({ address, isOpen, setIsOpen, name, }: SaveContact): JSX.Element;
export {};
