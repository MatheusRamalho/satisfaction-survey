import { ReactNode } from 'react'

interface HeaderRootProps {
    children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
    return (
        <header className="w-full max-w-3xl h-auto mb-4 px-4 text-center">
            {children}
        </header>
    )
}
