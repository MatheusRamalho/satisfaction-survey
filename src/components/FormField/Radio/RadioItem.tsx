import { FormFieldRadioItemWrapper } from "./Radio.styles";
import { FormFieldRadioItemProps } from "./Radio.types";

export const FormFieldRadioItem = ({ value }: FormFieldRadioItemProps) => {
    return (
        <FormFieldRadioItemWrapper
            role="radio"
            aria-checked="false"
            data-value-number="0"

            tabIndex={-1}
            data-qa="nps-opinion-scale-step"
            data-qa-filled="false"
            data-qa-index="0"
        >
            <span> {value} </span>
        </FormFieldRadioItemWrapper>
    );
}
