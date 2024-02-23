interface HeaderTitleProps {
    title: string
}

export function HeaderTitle({ title }: HeaderTitleProps) {
    return (
        <div className="">
            <h3 className="text-4xl sm:text-5xl font-bold text-white">
                {title}
            </h3>

            <hr className="w-12 h-1 bg-green-300 border-none rounded-[0/063rem] my-4 mx-auto" />
        </div>
    )
}
