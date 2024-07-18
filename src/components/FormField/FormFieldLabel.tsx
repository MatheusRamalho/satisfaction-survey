import { LabelHTMLAttributes, ReactNode } from 'react'

interface FormFieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children?: ReactNode
}

export function FormFieldLabel({ children, ...props }: FormFieldLabelProps) {
    return (
        <label
            className="relative block w-full mb-4 pb-6 text-base text-zinc-300"
            {...props}
        >
            {children}
        </label>
    )
}
