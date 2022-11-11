/// <reference types="react" />
interface ContactModal {
    address: string;
    isOpen: boolean;
    setIsOpen: Function;
    name?: string;
}
export default function ContactModal({ address, isOpen, setIsOpen, name, }: ContactModal): JSX.Element;
export {};
