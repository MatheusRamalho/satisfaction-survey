import { ReactNode } from 'react'

interface FormFieldRootProps {
    children: ReactNode
}

export function FormFieldRoot({ children }: FormFieldRootProps) {
    return (
        <div className="m-2 mb-8 py-8 px-6 rounded-xl bg-gray-800 border border-gray-700">
            {' '}
            {children}{' '}
        </div>
    )
}
