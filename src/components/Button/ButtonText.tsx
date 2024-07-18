interface ButtonTextProps {
    name: string
}

export function ButtonText({ name }: ButtonTextProps) {
    return (
        <span className="text-base font-medium text-zinc-100 uppercase no-underline">
            {name}
        </span>
    )
}
