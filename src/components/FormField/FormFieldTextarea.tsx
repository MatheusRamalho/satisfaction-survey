import { TextareaHTMLAttributes } from 'react'

interface FormFieldTextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    isRequired?: boolean
}

export function FormFieldTextarea({
    isRequired = false,
    ...props
}: FormFieldTextareaProps) {
    return (
        <textarea
            className="w-full h-[10rem] resize-none p-4 border border-gray-600 rounded-md bg-transparent text-gray-50 focus-visible:outline-none focus-visible:border-green-500 placeholder:text-xs placeholder:italic placeholder:uppercase placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100"
            {...props}
            required={!!isRequired}
        />
    )
}
