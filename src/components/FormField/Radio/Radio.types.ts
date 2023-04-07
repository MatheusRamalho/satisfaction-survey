import { ReactNode } from "react";

export type FormFieldRadioProps = {
    children: ReactNode;
}

export type FormFieldRadioItemProps = {
    value: number;
    onClick?: (event: any) => void;
}
