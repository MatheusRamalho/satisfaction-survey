import styled from "styled-components";

export const FormFieldRadioWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const FormFieldRadioItemWrapper = styled.div`
    width: ${props => props.theme.sizes.s56};
    height: ${props => props.theme.sizes.s56};
    margin: ${props => props.theme.sizes.s4};
    border: ${props => props.theme.sizes.s1} solid ${props => props.theme.colors.white100};
    border-radius: ${props => props.theme.sizes.s4};

    display: flex;
    align-items: center;
    justify-content: center;
`;
