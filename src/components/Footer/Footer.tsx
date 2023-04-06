import { ReactSVG } from "react-svg";

import brandTrivento from '../../assets/svgs/brand-trivento.svg';
import brandNav from '../../assets/svgs/brand-nav.svg';

import { SocialMedia } from "../SocialMedia";
import { FooterWrapper } from "./Footer.styles";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <div className="container flex flex--start py py--5">
                <ReactSVG
                    className="brand"
                    src={brandNav}
                    role="img"
                    title="Trivento"
                    aria-label="Logo marca da empresa Trivento educação - Logo composta por text na cor branca e três triangulos brancos sobrepostos"
                />
            </div>

            <div className="container flex flex--between py py--5">
                <div className="flex flex--start">
                    <ReactSVG
                        className="brand"
                        src={brandTrivento}
                        role="img"
                        title="Trivento"
                        aria-label="Logo marca da empresa Trivento educação - Logo composta por text na cor branca e três triangulos brancos sobrepostos"
                    />

                    <p className="ml ml--2">
                        {currentYear} - Todos os direitos reservados.
                    </p>
                </div>

                <div className="flex flex--start">
                    <SocialMedia />
                </div>
            </div>
        </FooterWrapper>
    );
}
