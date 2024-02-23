import { LabelHTMLAttributes, ReactNode } from 'react'

interface FormFieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children?: ReactNode
}

export function FormFieldLabel({ children, ...props }: FormFieldLabelProps) {
    return (
        <label
            className="relative block w-full mb-8 pb-6 text-base border-b border-b-gray-600 text-gray-300"
            {...props}
        >
            {children}
        </label>
    )
}
