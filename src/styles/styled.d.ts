import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        font: {
            family: string,
        },

        colors: {
            primary50: string;
            primary100: string;
            primary200: string;
            primary300: string;
            primary400: string;
            primary500: string;

            secondary50: string;

            white50: string;
            white100: string;

            gradient50: string;
            gradient100: string;
        };

        sizes: {
            s1: string;
            s2: string;
            s3: string;
            s4: string;
            s6: string;
            s8: string;
            s12: string;
            s14: string;
            s16: string;
            s18: string;
            s24: string;
            s32: string;
            s36: string;
            s40: string;
            s48: string;
            s52: string;
            s56: string;
            s64: string;
            s72: string;
            s80: string;
            s88: string;
            s96: string;
            s104: string;
            s112: string;
            s120: string;
            s128: string;
            s136: string;
            s144: string;
            s152: string;
            s160: string;
            s168: string;
            s176: string;
            s184: string;
            s192: string;
            s200: string;
        };

        device: {
            containerXl: string;
            containerLg: string;
            containerMd: string;
            containerSm: string;
        };
    }
}
