interface ButtonTextProps {
    name: string
}

export function ButtonText({ name }: ButtonTextProps) {
    return (
        <span className="text-base font-medium text-gray-100 uppercase no-underline">
            {name}
        </span>
    )
}
