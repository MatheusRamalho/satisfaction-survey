import styled from "styled-components";

export const FormFieldTextareaWrapper = styled.textarea`
    width: 100%;
    height: 10rem;
    resize: none;
    padding: ${props => props.theme.sizes.s16};
    border: ${props => props.theme.sizes.s1} solid ${props => props.theme.colors.primary300};
    border-radius: ${props => props.theme.sizes.s6};
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
        color: ${props => props.theme.colors.gray50};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${props => props.theme.colors.white100};
    }
`;
