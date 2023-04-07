import { ReactSVG } from "react-svg";

import IconArrowRight from '../../../assets/svgs/icon-arrow-right.svg';

import { ButtonIconWrapper } from "./Icon.styles";
import { ButtonIconProps } from "./Icon.types";

export const ButtonIcon = ({ icon = IconArrowRight, iconDescription }: ButtonIconProps) => {
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
