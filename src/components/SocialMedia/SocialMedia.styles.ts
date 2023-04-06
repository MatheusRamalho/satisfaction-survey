import styled from "styled-components";

export const SocialMediaWrapper = styled.ul`
    width: fit-content;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const SocialMediaItemWrapper = styled.li`
    width: ${props => props.theme.sizes.s40};
    height: ${props => props.theme.sizes.s40};
    border-radius: ${props => props.theme.sizes.s6};

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: ${props => props.theme.sizes.s32};
        height: ${props => props.theme.sizes.s32};

        path {
            stroke: ${props => props.theme.colors.white100};
        }
    }

    &:hover {
        transition: .7s ease all;
        background-color: ${props => props.theme.colors.primary200};
    }
`;
