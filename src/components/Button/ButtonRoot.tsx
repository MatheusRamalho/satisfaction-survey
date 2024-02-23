import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

export function ButtonRoot({ children, ...props }: ButtonRootProps) {
    return (
        <button
            className="w-full m-2 p-4 border-none rounded-md bg-green-500 transition-all flex items-center justify-center gap-3 disabled:cursor-not-allowed disabled:opacity-50 hover:enabled:cursor-pointer hover:enabled:bg-green-700"
            {...props}
        >
            {children}
        </button>
    )
}
