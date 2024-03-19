import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IFieldProps {
    placeholder: string;
    error?: FieldError;
    // icon?: ComponentType
}

type TypeInputProps = InputHTMLAttributes<HTMLTextAreaElement> & IFieldProps;

export interface IField extends TypeInputProps {}
