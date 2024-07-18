'use client'

import { FormEvent, useState } from 'react'

import { Header } from '@/components/Header'
import { FormField } from '@/components/FormField'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'

import IconCheck from '@/assets/check.svg'

export default function Home() {
    const [note, setNote] = useState<number>(0)
    const [justification, setJustification] = useState('')
    const [showModal, setShowModal] = useState(false)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleNoteClick(event: any) {
        const noteClicked = event.currentTarget
        const dataValueNoteClicked = noteClicked.getAttribute('data-value')

        setNote(dataValueNoteClicked)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    function notesListAddOrRemoveClass(type: string) {
        const notes = document.querySelectorAll('.note-item')

        notes.forEach((element) => {
            type === 'add' && element.classList.add('!bg-green-300')
            type === 'remove' && element.classList.remove('!bg-green-300')
        })
    }

    function handleModalClose() {
        setShowModal(false)
        notesListAddOrRemoveClass('remove')
        setNote(0)
        setJustification('')
    }

    return (
        <>
            <section id="section-satisfaction-survey" className="py-20">
                <h6 hidden> satisfaction survey </h6>

                <div className="container mx-auto flex items-center justify-normal flex-col gap-10">
                    <Header.Root>
                        <Header.Title title="Pesquisa de satisfação" />
                        <Header.Description description="O melhor de cada pessoa acontece na hora que cada um se conhece de verdade. Não aguarde pela sorte: estude, estude-se." />
                    </Header.Root>

                    <form
                        id="form-satisfaction-survey"
                        className="w-full max-w-4xl p-1 sm:p-4"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                    >
                        <fieldset
                            form="form-satisfaction-survey"
                            className="border-none"
                        >
                            <legend hidden> Informações </legend>

                            <FormField.Root>
                                <FormField.Label>
                                    <strong className="text-white font-bold">
                                        1 -{' '}
                                    </strong>
                                    Como você avalia sua experiencia na Trivento
                                    <FormField.Mandatory />
                                </FormField.Label>

                                <FormField.Radio>
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={1}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={2}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={3}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={4}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={5}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={6}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={7}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={8}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={9}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                    <FormField.RadioItem
                                        isActive={note}
                                        value={10}
                                        onClick={(event) =>
                                            handleNoteClick(event)
                                        }
                                    />
                                </FormField.Radio>
                            </FormField.Root>

                            <FormField.Root>
                                <FormField.Label>
                                    <strong className="text-white font-bold">
                                        {' '}
                                        2 -{' '}
                                    </strong>{' '}
                                    Explique o motivo da sua resposta
                                    <FormField.Mandatory />
                                </FormField.Label>

                                <FormField.Textarea
                                    placeholder="Informe aqui sua justificativa"
                                    value={justification}
                                    onChange={(event) =>
                                        setJustification(event.target.value)
                                    }
                                />
                            </FormField.Root>
                        </fieldset>

                        <div className="flex items-center justify-center">
                            <Button.Root
                                type="submit"
                                disabled={note === 0 || !justification}
                            >
                                <Button.Text name="Finalizar" />
                                <Button.Icon icon={IconCheck} />
                            </Button.Root>
                        </div>
                    </form>
                </div>
            </section>

            <Modal
                isItToShowModal={showModal}
                onModalClose={handleModalClose}
                title="Pesquisa de satisfação"
                note={note}
            />
        </>
    )
}
