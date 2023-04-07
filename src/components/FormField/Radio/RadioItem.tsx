import { FormFieldRadioItemWrapper } from "./Radio.styles";
import { FormFieldRadioItemProps } from "./Radio.types";

export const FormFieldRadioItem = ({ value, onClick }: FormFieldRadioItemProps) => {
    

    return (
        <FormFieldRadioItemWrapper
            role="radio"
            data-value={value}
            onClick={onClick}
        >
            <span> {value} </span>
        </FormFieldRadioItemWrapper>
    );
}
