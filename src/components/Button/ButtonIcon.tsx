import Image from 'next/image'

interface ButtonIconProps {
    icon: string
    iconDescription: string
}

export function ButtonIcon({ icon, iconDescription }: ButtonIconProps) {
    return (
        <span className="size-6 rounded bg-green-500 flex items-center justify-center shadow">
            <Image
                className="size-5 text-gray-100"
                src={icon}
                role="img"
                alt={iconDescription || ''}
            />
        </span>
    )
}
