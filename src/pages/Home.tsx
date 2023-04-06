import { FormField } from "../components/FormField"
import { Header } from "../components/Header"

export const Home = () => {
    return (
        <section id="section-satisfaction-survey">
            <h6 hidden> satisfaction survey </h6>

            <div className="container container--large container--small flex flex--column">
                <Header.Root>
                    <Header.Title title="Pesquisa de satisfação" />
                    <Header.Description description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique aliquam magnam incidunt possimus illum nostrum vero, ut aliquid laboriosam quia maiores quibusdam!0" />
                </Header.Root>

                <form id="form-satisfaction-survey">
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

                            <FormField.Textarea placeholder="Informe aqui sua justificativa" />
                        </FormField.Root>
                    </fieldset>

                    <div className="">

                    </div>
                </form>
            </div>
        </section>
    )
}
