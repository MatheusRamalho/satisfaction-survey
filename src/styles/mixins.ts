import { css } from "styled-components";
import { ReactNode } from "react";

export type TypefaceProps = {
    size: string;
    device: string;
}

export type ResponsiveProps = {
    device: string;
    children?: ReactNode;
}

export const handleTypefaceTitle = ({ size, device = 'desktop' }: TypefaceProps) => css`
    // H1...
    ${ (size == 'h1' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.s64};
            line-height: 100%;
        `
        : (size == 'h1' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.s36};
            line-height: 120%;
        `
    }

    // H2...
    ${ (size == 'h2' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.s52};
            line-height: 110%;
        `
        : (size == 'h2' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.s36};
            line-height: 120%;
        `
    }

    // H3...
    ${ (size == 'h3' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.s36};
            line-height: 120%;
        `
        : (size == 'h3' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.s24};
            line-height: 120%;
        `
    }

    // H4...
    ${ (size == 'h4' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.s24};
            line-height: 130%;
        `
        : (size == 'h4' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.s18};
            line-height: 130%;
        `
    }

    // H5...
    ${ (size == 'h5' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.s18};
            line-height: 140%;
        `
        : (size == 'h5' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.s16};
            line-height: 150%;
        `
    }
`;

export const handleTypefaceText = ({ size = 'text-2', device = 'desktop' }: TypefaceProps) => css`
    // Text-1...
    ${ (size == 'text-1' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.s24};
            line-height: 130%;
        `
        : (size == 'text-1' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.s18};
            line-height: 130%;
        `
    }

    // Text-2...
    ${ (size == 'text-2' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.s16};
            line-height: 140%;
        `
        : (size == 'text-2' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.s14};
            line-height: 150%;
        `
    }

    // Text-3...
    ${ (size == 'text-3' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.s14};
            line-height: 150%;
        `
        : (size == 'text-3' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.s14};
            line-height: 150%;
        `
    }
`;
