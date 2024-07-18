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
            className="w-full h-[10rem] resize-none p-4 border border-zinc-600 rounded-md bg-transparent text-zinc-50 focus-visible:outline-none focus-visible:border-green-500 placeholder:text-xs placeholder:italic placeholder:uppercase placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:bg-zinc-100"
            {...props}
            required={!!isRequired}
        />
    )
}
