import { createGlobalStyle } from "styled-components";
import { handleTypefaceText, handleTypefaceTitle } from "./mixins";

export default createGlobalStyle`
    /* --------------------------------------------------------------------------
    | CSS RESET...
    |-------------------------------------------------------------------------- */
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* --------------------------------------------------------------------------
    | PAGE...
    |-------------------------------------------------------------------------- */
    html {
        scroll-behavior: smooth;
    }

    &::-webkit-scrollbar {
        width: ${props => props.theme.sizes.s12};
        padding-right: ${props => props.theme.sizes.s4};
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: ${props => props.theme.sizes.s2};
        background-color: ${props => props.theme.colors.primary300};
    }

    body {
        scroll-behavior: smooth;

        width: 100%;
        height: auto;
        background-color: ${props => props.theme.colors.primary500};
        background: ${props => props.theme.colors.gradient50};

        font-family: ${props => props.theme.font.family};
        font-weight: 400;
        color: ${props => props.theme.colors.white100};
    }

    /* --------------------------------------------------------------------------
    | FILES...
    |-------------------------------------------------------------------------- */
    img, svg {
        display: block;
        width: 100%;
    }

    /* --------------------------------------------------------------------------
    | FORMS...
    |-------------------------------------------------------------------------- */
    form {
        width: 100%;
        padding: ${props => props.theme.sizes.s16};

        @media(max-width: ${props => props.theme.device.containerSm}) {
            padding: 0;
        }
    }

    fieldset {
        border: none;
        padding: ${props => props.theme.sizes.s16};

        @media(max-width: ${props => props.theme.device.containerSm}) {
            padding: 0;
        }
    }

    /* --------------------------------------------------------------------------
    | TYPOGRAPHYS...
    |-------------------------------------------------------------------------- */
    h1, h2, h3, h4, h5, h6,
    p, span, small, address {
        overflow-wrap: break-word; // Para que o texto quebre...
        hyphens: auto; // Adiciona hífen...
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.white50};
    }

    h2 {
        ${handleTypefaceTitle({ size: 'h2', device: 'desktop' })};

        @media screen and (max-width: ${props => props.theme.device.containerMd}) {
            ${handleTypefaceTitle({ size: 'h2', device: 'mobile' })};
        }
    }

    h3 {
        ${handleTypefaceTitle({ size: 'h3', device: 'desktop' })};

        @media screen and (max-width: ${props => props.theme.device.containerMd}) {
            ${handleTypefaceTitle({ size: 'h3', device: 'mobile' })};
        }
    }

    h5 {
        ${handleTypefaceTitle({ size: 'h5', device: 'desktop' })};

        @media screen and (max-width: ${props => props.theme.device.containerMd}) {
            ${handleTypefaceTitle({ size: 'h5', device: 'mobile' })};
        }
    }

    p {
        ${handleTypefaceText({ size: 'text-2', device: 'desktop' })};

        @media screen and (max-width: ${props => props.theme.device.containerMd}) {
            ${handleTypefaceText({ size: 'text-2', device: 'mobile' })};
        }
    }

    /* --------------------------------------------------------------------------
    | CONTAINERS...
    |-------------------------------------------------------------------------- */
    .container {
        max-width: ${props => props.theme.device.containerXl};
        overflow: hidden;
        margin: 0 auto;
        padding: ${props => props.theme.sizes.s48} ${props => props.theme.sizes.s24};

        &--small {
            max-width: ${props => props.theme.device.containerMd};
        }
    }

    /* --------------------------------------------------------------------------
    | FLEXBOX...
    |-------------------------------------------------------------------------- */
    .flex {
        display: flex;
        align-items: center;
        justify-content: normal;

        &--start {
            justify-content: flex-start;
        }

        &--center {
            justify-content: center;
        }

        &--end {
            justify-content: flex-end;
        }

        &--between {
            justify-content: space-between;
        }

        &--column {
            flex-direction: column;
        }

        &--row {
            flex-direction: row;
        }

        &--wrap {
            flex-wrap: wrap;
        }

        &--start-a {
            align-items: flex-start;
        }

        &--end-a {
            align-items: flex-end;
        }
    }
`;
