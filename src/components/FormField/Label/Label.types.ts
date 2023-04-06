import { LabelHTMLAttributes, ReactNode } from "react";

export interface FormFieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children?: ReactNode;
}
