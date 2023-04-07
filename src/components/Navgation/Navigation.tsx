import { ReactSVG } from "react-svg";

import brandNav from '../../assets/svgs/brand-nav.svg';
import brandTrivento from '../../assets/svgs/brand-trivento.svg';

import { NavigationWrapper } from "./Navigation.styles";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <NavigationWrapper>
            <div className="container flex flex--between">
                <Link to="/">
                    <ReactSVG
                        className="brand"
                        src={brandNav}
                        role="img"
                        title="Trivento"
                        aria-label="Logo marca da do sistema NAV da empresa Trivento, composto por uma lampada amarela e o texto NAV - nosso ambiente virtual"
                    />
                </Link>

                <ReactSVG
                    className="brand"
                    src={brandTrivento}
                    role="img"
                    title="Trivento"
                    aria-label="Logo marca da empresa Trivento educação - Logo composta por text na cor branca e três triangulos brancos sobrepostos"
                />
            </div>
        </NavigationWrapper>
    );
}
