import styled from "styled-components";

export const FormFieldInputWrapper = styled.input`
    width: 100%;
    height: ${props => props.theme.sizes.s64};
    padding: 0 ${props => props.theme.sizes.s16};
    border: ${props => props.theme.sizes.s1} solid ${props => props.theme.colors.white100};
    border-radius: ${props => props.theme.sizes.s8};
    background-color: transparent;
    color: ${props => props.theme.colors.white50};

    &:focus-visible {
        outline: none;
        border-color: ${props => props.theme.colors.primary100};
    }

    &::placeholder {
        font-size: 0.7rem;
        font-style: italic;
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.sizes.s1};
        color: ${props => props.theme.colors.white100};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${props => props.theme.colors.white100};
    }
`;
