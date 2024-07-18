interface FormFieldRadioItemProps {
    value: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (event: any) => void
    isActive: number
}

export function FormFieldRadioItem({
    value,
    onClick,
    isActive,
}: FormFieldRadioItemProps) {
    return (
        <button
            className={`size-14 m-[2px] border border-zinc-700 rounded-md flex items-center justify-center hover:cursor-pointer hover:bg-zinc-500 hover:shadow-lg hover:font-bold note-item ${Number(isActive) === Number(value) ? 'bg-green-300' : 'bg-zinc-800'}`}
            data-value={value}
            onClick={onClick}
            type="button"
        >
            <span className="text-white"> {value} </span>
        </button>
    )
}
