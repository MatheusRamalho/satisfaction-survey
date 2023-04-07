import styled from "styled-components";

export const FormFieldRadioWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: ${props => props.theme.device.containerSm}) {
        justify-content: flex-start;
    }
`;

export const FormFieldRadioItemWrapper = styled.div`
    width: ${props => props.theme.sizes.s56};
    height: ${props => props.theme.sizes.s56};
    margin: ${props => props.theme.sizes.s2};
    border: ${props => props.theme.sizes.s2} solid ${props => props.theme.colors.primary300};
    border-radius: ${props => props.theme.sizes.s4};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.primary300};
        box-shadow: 0px 4px 8px rgba(81, 93, 61, 0.1);

        font-weight: bold;
    }
`;
