import styled from "styled-components";

export const ButtonTextWrapper = styled.span`
    font-size: ${props => props.theme.sizes.s12};
    font-weight: 500;
    color: ${props => props.theme.colors.white100};
    text-transform: uppercase;
    text-decoration: none;
`;
