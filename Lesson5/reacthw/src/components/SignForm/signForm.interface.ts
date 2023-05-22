import { MouseEvent } from "react";
export interface ISignForm {
    signIn: boolean;
    handler: (e: MouseEvent) => void;
  }