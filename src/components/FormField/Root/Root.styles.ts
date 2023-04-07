import styled from "styled-components";

export const FormFieldRootWrapper = styled.div`
    margin: ${props => props.theme.sizes.s8} ${props => props.theme.sizes.s8} ${props => props.theme.sizes.s32} ${props => props.theme.sizes.s8};
    padding: ${props => props.theme.sizes.s32} ${props => props.theme.sizes.s24};
    border-radius: ${props => props.theme.sizes.s12};
    background-color: ${props => props.theme.colors.primary400};
`;
