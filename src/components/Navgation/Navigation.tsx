import Link from 'next/link'
import Image from 'next/image'

import brand from '@/assets/brand.svg'

export function Navigation() {
    return (
        <nav className="z-10 fixed top-0 left-0 right-0 w-full h-[88px] border-b border-b-gray-700 bg-gray-900 backdrop-blur-md">
            <div className="container mx-auto h-full px-14 flex items-center justify-center">
                <Link href="/">
                    <Image
                        className="w-20"
                        src={brand}
                        role="img"
                        title="Trivento"
                        alt="Logo marca da do sistema NAV da empresa Trivento, composto por uma lampada amarela e o texto NAV - nosso ambiente virtual"
                    />
                </Link>
            </div>
        </nav>
    )
}
