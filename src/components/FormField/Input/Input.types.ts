import { InputHTMLAttributes } from "react";

export interface FormFieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isRequired?: boolean;
}
