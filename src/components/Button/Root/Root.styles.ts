import styled from "styled-components";

export const ButtonRootWrapper = styled.button`
    width: fit-content;
    margin: ${props => props.theme.sizes.s8};
    padding: ${props => props.theme.sizes.s8} ${props => props.theme.sizes.s24};
    border: none;
    border-radius: ${props => props.theme.sizes.s6};
    background: ${props => props.theme.colors.primary50};
    transition: all 1s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:not(:disabled):hover {
        cursor: pointer;
        transform: scale(1.02);

        .button-icon {
            background-color: transparent;
        }
    }

    .button-icon {
        margin-left: ${props => props.theme.sizes.s16};
        background-color: ${props => props.theme.colors.primary200};
    }
`;
