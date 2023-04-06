import { ButtonRootWrapper } from "./Root.styles";
import { ButtonRootProps } from "./Root.types";

export const ButtonRoot = ({ children, ...props }: ButtonRootProps) => {
    return (
        <ButtonRootWrapper
            {...props}
        >
            {children}
        </ButtonRootWrapper>
    );
}
