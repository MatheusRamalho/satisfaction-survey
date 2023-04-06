import styled from "styled-components";

export const HeaderRootWrapper = styled.header`
    width: 100%;
    max-width: 750px;
    height: auto;
    margin-bottom: ${props => props.theme.sizes.s32};
    text-align: center;

    h2 {
        color: ${props => props.theme.colors.primary100};
    }

    p {
        margin-top: ${props => props.theme.sizes.s24};
        font-size: ${props => props.theme.sizes.s18};
        line-height: 180%;
    }
`;
