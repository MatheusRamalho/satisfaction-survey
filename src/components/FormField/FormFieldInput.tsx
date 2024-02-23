import { InputHTMLAttributes } from 'react'

interface FormFieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isRequired?: boolean
}

export function FormFieldInput({
    isRequired = false,
    ...props
}: FormFieldInputProps) {
    return (
        <input
            className="w-full h-16 p-4 border border-gray-100 rounded-lg text-gray-50 focus-visible:outline-none focus-visible:border-green-500 placeholder:text-xs placeholder:italic placeholder:uppercase placeholder:text-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100"
            {...props}
            required={!!isRequired}
        />
    )
}
