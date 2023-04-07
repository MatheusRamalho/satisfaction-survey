import styled from "styled-components";

export const NavigationWrapper = styled.nav`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: ${props => props.theme.sizes.s88};
    border-bottom: ${props => props.theme.sizes.s1} solid ${props => props.theme.colors.primary300};
    background: rgba(3, 9, 23, 0.01);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);

    .container {
        height: 100%;
        padding: 0 ${props => props.theme.sizes.s56};
    }

    .brand {
        max-width: ${props => props.theme.sizes.s104};
    }

    @media (max-width: ${props => props.theme.device.containerSm}) {
        .brand {
            max-width: ${props => props.theme.sizes.s88};
        }
    }
`;
