import { FormFieldRootWrapper } from "./Root.styles";
import { FormFieldRootProps } from "./Root.types";

export const FormFieldRoot = ({ children }: FormFieldRootProps) => {
    return (
        <FormFieldRootWrapper>
            {children}
        </FormFieldRootWrapper>
    );
}
