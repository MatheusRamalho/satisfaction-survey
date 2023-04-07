import styled from "styled-components";

export const HeaderTitleWrapper = styled.header`
    h2 {
        color: ${props => props.theme.colors.primary100};
    }

    hr {
        width: ${props => props.theme.sizes.s48};
        height: ${props => props.theme.sizes.s4};
        background: ${props => props.theme.colors.secondary50};
        border: none;
        border-radius: ${props => props.theme.sizes.s1};
        margin: ${props => props.theme.sizes.s16} auto;
    }
`;
