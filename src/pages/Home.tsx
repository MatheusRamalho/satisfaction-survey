import { FormEvent, useState } from "react";

import { Header } from "../components/Header"
import { FormField } from "../components/FormField"
import { Button } from "../components/Button"
import { Modal } from "../components/Modal";

import IconCheck from '../assets/svgs/icon-check.svg';

export const Home = () => {
    const [justification, setJustification] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setShowModal(true);

        console.log({
            pesquisaDeSatisfação: {
                Nota: '',
                Justificativa: justification
            }
        });

        setJustification('');
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <section id="section-satisfaction-survey">
                <h6 hidden> satisfaction survey </h6>

                <div className="container container--small flex flex--column">
                    <Header.Root>
                        <Header.Title title="Pesquisa de satisfação" />
                        <Header.Description description="O melhor de cada pessoa acontece na hora que cada um se conhece de verdade. Não aguarde pela sorte: estude, estude-se." />
                    </Header.Root>

                    <form
                        id="form-satisfaction-survey"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <fieldset form="form-satisfaction-survey">
                            <legend hidden> Informações </legend>

                            <FormField.Root>
                                <FormField.Label>
                                    <strong> 1 - </strong> Como você avalia sua experiencia na Trivento
                                    <FormField.Mandatory />
                                </FormField.Label>

                                <FormField.Radio />
                            </FormField.Root>

                            <FormField.Root>
                                <FormField.Label>
                                    <strong> 2 - </strong> Explique o motivo da sua resposta
                                    <FormField.Mandatory />
                                </FormField.Label>

                                <FormField.Textarea
                                    placeholder="Informe aqui sua justificativa"
                                    value={justification}
                                    onChange={event => setJustification(event.target.value)}
                                />
                            </FormField.Root>
                        </fieldset>

                        <div className="flex flex--center">
                            <Button.Root type="submit" disabled={justification ? false : true}>
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
                note={4}
            />
        </>
    )
}
