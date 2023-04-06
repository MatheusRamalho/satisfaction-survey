import { FormFieldInputWrapper } from "./Input.styles";
import { FormFieldInputProps } from "./Input.types";

export const FormFieldInput = ({ isRequired = false, ...props }: FormFieldInputProps) => {
    return (
        <FormFieldInputWrapper
            {...props}
            required={isRequired ? true : false}
        />
    );
}
