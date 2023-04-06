import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}
