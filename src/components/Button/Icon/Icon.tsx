import { ReactSVG } from "react-svg";

import arrowIcon from '../../../assets/svgs/icon-twitter.svg';

import { ButtonIconWrapper } from "./Icon.styles";
import { ButtonIconProps } from "./Icon.types";

export const ButtonIcon = ({ icon = arrowIcon, iconDescription }: ButtonIconProps) => {
    return (
        <ButtonIconWrapper className="button-icon">
            <ReactSVG
                src={icon}
                role="img"
                aria-label={iconDescription}
            />
        </ButtonIconWrapper>
    );
}
