import { ButtonTextWrapper } from "./Text.styles";
import { ButtonTextProps } from "./Text.types";

export const ButtonText = ({ name }: ButtonTextProps) => {
    return (
        <ButtonTextWrapper>
            {name}
        </ButtonTextWrapper>
    );
}
