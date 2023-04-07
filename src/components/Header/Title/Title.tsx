import { HeaderTitleWrapper } from "./Title.styles";
import { HeaderTitleProps } from "./Title.types";

export const HeaderTitle = ({ title }: HeaderTitleProps) => {
    return (
        <HeaderTitleWrapper>
            <h3> {title} </h3>
            <hr />
        </HeaderTitleWrapper>
    );
}
