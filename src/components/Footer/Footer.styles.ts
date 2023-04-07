import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    height: ${props => props.theme.sizes.s48};
    padding: ${props => props.theme.sizes.s24} ${props => props.theme.sizes.s48};

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-style: italic;
        font-size: ${props => props.theme.sizes.s12};
        color: ${props => props.theme.colors.gray50};
    }
`;
