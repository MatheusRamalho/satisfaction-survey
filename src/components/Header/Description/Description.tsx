import { HeaderDescriptionProps } from "./Description.types";

export const HeaderDescription = ({ description }: HeaderDescriptionProps) => {
    return (
        <p> {description} </p>
    );
}
