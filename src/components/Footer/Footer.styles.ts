import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 19.5rem;
    /* background-color: ${props => props.theme.colors.primary500}; */
    background: ${props => props.theme.colors.gradient50};
    border-top: ${props => props.theme.sizes.s1} solid ${props => props.theme.colors.primary300};


    .brand {
        max-width: ${props => props.theme.sizes.s144};
    }

    .container:last-child {
        border-top: ${props => props.theme.sizes.s1} solid ${props => props.theme.colors.primary300};
    }
`;
