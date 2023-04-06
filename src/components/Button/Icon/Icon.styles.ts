import styled from "styled-components";

export const ButtonIconWrapper = styled.span`
    width: ${props => props.theme.sizes.s32};
    height: ${props => props.theme.sizes.s32};
    border-radius: ${props => props.theme.sizes.s4};
    margin-left: ${props => props.theme.sizes.s16};
    background-color: ${props => props.theme.colors.primary200};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: ${props => props.theme.sizes.s18};
        height: ${props => props.theme.sizes.s18};

        path {
            stroke: ${props => props.theme.colors.white100};
        }
    }
`;
