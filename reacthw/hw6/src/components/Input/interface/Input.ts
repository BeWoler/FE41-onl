import { ChangeEvent } from "react";

export interface IInputProps {
   type: string;
   placeholder: string;
   value: string;
   handler: () => void
} 