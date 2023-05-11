import { ChangeEvent } from "react";

export interface IInput{
type: string;
placeholder:string;
value:string;
handler:()=>void;
}