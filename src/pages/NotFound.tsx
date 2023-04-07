import { Header } from "../components/Header";

export const NotFound = () => {
    return (
        <section id="section-not-found">
            <h6 hidden> not found </h6>

            <div className="container container--small flex flex--column">
                <Header.Root>
                    <Header.Title title="Página não encontrada" />
                    <Header.Description description="Desculpe! A página que acessou não existe, por favor volte para tela inicial e tente novamente." />
                </Header.Root>
            </div>
        </section>
    );
}
