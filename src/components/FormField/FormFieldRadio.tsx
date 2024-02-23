import { ReactNode } from 'react'

interface FormFieldRadioProps {
    children: ReactNode
}

export function FormFieldRadio({ children }: FormFieldRadioProps) {
    return (
        <div
            className="flex items-center justify-start flex-wrap gap-3"
            role="radiogroup"
        >
            {children}
        </div>
    )
}
