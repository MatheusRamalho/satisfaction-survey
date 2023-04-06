import { HeaderRootWrapper } from "./Root.styles";
import { HeaderRootProps } from "./Root.types";

export const HeaderRoot = ({ children }: HeaderRootProps) => {
    return (
        <HeaderRootWrapper>
            {children}
        </HeaderRootWrapper>
    );
}
