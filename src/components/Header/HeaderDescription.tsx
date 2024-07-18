interface HeaderDescriptionProps {
    description: string
}

export function HeaderDescription({ description }: HeaderDescriptionProps) {
    return (
        <p className="mt-6 text-lg leading-[160%] text-zinc-500">
            {description}
        </p>
    )
}
