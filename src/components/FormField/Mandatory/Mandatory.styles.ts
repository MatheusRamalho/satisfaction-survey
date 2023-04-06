import styled from "styled-components";

export const FormFieldLabelMandatoryWrapper = styled.span`
    position: absolute;
    top: -2px;

    margin-left: ${props => props.theme.sizes.s8};
    font-size: ${props => props.theme.sizes.s32};
    color: red;
`;
