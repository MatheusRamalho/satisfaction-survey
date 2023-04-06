import { FormFieldTextareaWrapper } from "./Textarea.styles";
import { FormFieldTextareaProps } from "./Textarea.types";

export const FormFieldTextarea= ({ isRequired = false, ...props }: FormFieldTextareaProps) => {
    return (
        <FormFieldTextareaWrapper
            {...props}
            required={isRequired ? true : false}
        />
    );
}
