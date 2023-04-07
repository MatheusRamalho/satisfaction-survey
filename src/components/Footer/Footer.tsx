import { FooterWrapper } from "./Footer.styles";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <p> {currentYear} - Todos os direitos reservados. </p>
        </FooterWrapper>
    );
}
