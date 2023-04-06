import { FormFieldLabelWrapper } from "./Label.styles";
import { FormFieldLabelProps } from "./Label.types";

export const FormFieldLabel = ({ children, ...props }: FormFieldLabelProps) => {
    return (
        <FormFieldLabelWrapper {...props}>
            {children}
        </FormFieldLabelWrapper>
    );
}
