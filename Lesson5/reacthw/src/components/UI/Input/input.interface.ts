import { ChangeEvent } from "react";

export interface IInputProps {
    type: string;
    placeholder: string;
    value: string;
    handler: (e: ChangeEvent<HTMLInputElement>) => void;
    inputHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}