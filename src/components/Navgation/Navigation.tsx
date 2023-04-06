import { ReactSVG } from "react-svg";

import brandNav from '../../assets/svgs/brand-nav.svg';

import { NavigationWrapper } from "./Navigation.styles";

export const Navigation = () => {
    return (
        <NavigationWrapper>
            <div className="container flex">
                <ReactSVG
                    className="brand"
                    src={brandNav}
                    role="img"
                    title="Trivento"
                    aria-label="Logo marca da empresa Trivento educação - Logo composta por text na cor branca e três triangulos brancos sobrepostos"
                />
            </div>
        </NavigationWrapper>
    );
}
