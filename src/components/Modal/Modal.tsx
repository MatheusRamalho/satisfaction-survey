import Image from 'next/image'

import EmojiSad from '@/assets/emoji-sad.svg'
import EmojiHappy from '@/assets/emoji-happy.svg'
import EmojiLove from '@/assets/emoji-love.svg'

interface ModalProps {
    title: string
    note: number
    isItToShowModal?: boolean
    onModalClose?: () => void
}

export function Modal({
    title,
    note,
    isItToShowModal = false,
    onModalClose,
}: ModalProps) {
    return (
        <div
            className={`z-20 fixed inset-0 size-screen overflow-hidden items-center justify-center bg-gray-950/90 ${
                isItToShowModal ? 'flex' : 'hidden'
            }`}
        >
            <div className="h-auto w-11/12 md:w-3/4 lg:w-1/2 overflow-auto rounded-xl bg-gray-700 border border-gray-600">
                <div className="relative w-full h-20 bg-green-500 flex items-center justify-center border-b border-b-green-700">
                    <button
                        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer size-7 border-none rounded bg-green-300 hover:shadow-xl text-white text-xl hover:bg-green-700"
                        onClick={onModalClose}
                    >
                        x
                    </button>

                    <h5 className="text-white font-bold text-xl"> {title} </h5>
                </div>

                <div className="h-[calc(100%-56px)] p-8 flex flex-col items-center justify-center text-center">
                    {note <= 4 && (
                        <Image
                            className="size-16"
                            src={EmojiSad}
                            alt="Emoji amarelo triste, representando uma espressão facial de tristeza."
                        />
                    )}

                    {note > 4 && note <= 7 && (
                        <Image
                            className="size-16"
                            src={EmojiHappy}
                            alt="Emoji amarelo com um sorriso, representando uma espressão facial de felicidade."
                        />
                    )}

                    {note > 7 && note <= 10 && (
                        <Image
                            className="size-16"
                            src={EmojiLove}
                            alt="Emoji amarelo com corações vermelhos nos olhos, representando espressão de amor."
                        />
                    )}

                    <p className="text-lg text-gray-100 leading-10">
                        A nota que você atribuiu foi
                        <strong> {note}</strong>
                    </p>

                    {note <= 4 && (
                        <p className="text-base text-gray-400 leading-10">
                            Ficamos tristes em saber que você não está
                            satisfeito. Iremos melhorar.
                        </p>
                    )}

                    {note > 4 && note <= 7 && (
                        <p className="text-base text-gray-400 leading-10">
                            Ficamos satisfeitos em saber que está gostando.
                            Iremos melhorar ainda mais.
                        </p>
                    )}

                    {note > 7 && note <= 10 && (
                        <p className="text-base text-gray-400 leading-10">
                            Ficamos felizes em saber que está amando.
                        </p>
                    )}

                    <p className="text-base text-gray-400 leading-10">
                        Obrigado por responder
                    </p>
                </div>
            </div>
        </div>
    )
}
