import { HeaderDescriptionWrapper } from "./Description.styles";
import { HeaderDescriptionProps } from "./Description.types";

export const HeaderDescription = ({ description }: HeaderDescriptionProps) => {
    return (
        <HeaderDescriptionWrapper>
            {description}
        </HeaderDescriptionWrapper>
    );
}
