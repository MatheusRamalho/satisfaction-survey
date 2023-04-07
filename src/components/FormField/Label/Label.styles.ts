import styled from "styled-components";

export const FormFieldLabelWrapper = styled.label`
    position: relative;

    display: block;

    width: 100%;
    margin-bottom: ${props => props.theme.sizes.s24};
    padding-bottom: ${props => props.theme.sizes.s24};
    font-size: ${props => props.theme.sizes.s16};

    border-bottom: ${props => props.theme.sizes.s1} solid ${props => props.theme.colors.primary300};
`;
