interface FormFieldRadioItemProps {
    value: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (event: any) => void
}

export function FormFieldRadioItem({
    value,
    onClick,
}: FormFieldRadioItemProps) {
    return (
        <div
            className="size-14 m-[2px] bg-gray-800 border border-gray-600 rounded-md flex items-center justify-center hover:cursor-pointer hover:bg-green-500 hover:shadow-lg hover:font-bold note-item"
            data-value={value}
            onClick={onClick}
        >
            <span className="text-white"> {value} </span>
        </div>
    )
}
