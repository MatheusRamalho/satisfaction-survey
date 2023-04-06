import { FormEvent, useState } from "react";

import { Header } from "../components/Header"
import { FormField } from "../components/FormField"
import { Button } from "../components/Button"

import IconButton from '../assets/svgs/icon-twitter.svg';
import { Modal } from "../components/Modal/Modal";

export const Home = () => {
    const [justification, setJustification] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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

                <div className="container container--large container--small flex flex--column">
                    <Header.Root>
                        <Header.Title title="Pesquisa de satisfação" />
                        <Header.Description description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique aliquam magnam incidunt possimus illum nostrum vero, ut aliquid laboriosam quia maiores quibusdam!0" />
                    </Header.Root>

                    <form
                        id="form-satisfaction-survey"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <fieldset form="form-satisfaction-survey">
                            <legend> Informações </legend>

                            <FormField.Root>
                                <FormField.Label>
                                    Como você avalia sua experiencia na Trivento
                                    <FormField.Mandatory />
                                </FormField.Label>

                                <FormField.Radio />
                            </FormField.Root>

                            <FormField.Root>
                                <FormField.Label>
                                    Explique o motivo da sua resposta
                                    <FormField.Mandatory />
                                </FormField.Label>

                                <FormField.Textarea
                                    placeholder="Informe aqui sua justificativa"
                                    value={justification}
                                    onChange={event => setJustification(event.target.value)}
                                />
                            </FormField.Root>
                        </fieldset>

                        <div className="">
                            <Button.Root type="submit" disabled={disabled}>
                                <Button.Text name="Finalizar" />
                                <Button.Icon icon={IconButton} />
                            </Button.Root>
                        </div>
                    </form>
                </div>
            </section>

            <Modal
                isItToShowModal={showModal}
                onModalClose={handleModalClose}
                title=""
                description=""
            >
            </Modal>
        </>
    )
}
