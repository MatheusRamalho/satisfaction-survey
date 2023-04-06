import { TextareaHTMLAttributes } from "react";

export interface FormFieldTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    isRequired?: boolean;
}
