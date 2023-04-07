import { FormFieldRadioWrapper } from "./Radio.styles";
import { FormFieldRadioProps } from "./Radio.types";

export const FormFieldRadio = ({ children }: FormFieldRadioProps) => {
    return (
        <FormFieldRadioWrapper role="radiogroup">
            {children}
        </FormFieldRadioWrapper>
    );
}
