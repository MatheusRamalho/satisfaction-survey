import styled from "styled-components";

export const ModalWrapper = styled.div`
    z-index: 3;
    position: fixed;
    inset: 0;

    display: none;
    align-items: center;
    justify-content: center;

    background: rgba(3, 9, 23, 0.01);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);

    &.modal--show {
        display: flex;
    }

    .modal__content {
        width: 30%;
        height: 60%;
        overflow: auto;
        border-radius: ${props => props.theme.sizes.s12};
        background-color: ${props => props.theme.colors.white50};

        .modal__header {
            position: relative;

            width: 100%;
            height: ${props => props.theme.sizes.s56};
            background-color: ${props => props.theme.colors.primary50};

            display: flex;
            align-items: center;
            justify-content: center;

            #close-modal {
                position: absolute;
                top: 50%;
                right: 15px;
                transform: translateY(-50%);

                cursor: pointer;

                width: ${props => props.theme.sizes.s24};
                height: ${props => props.theme.sizes.s24};
                border: none;
                border-radius: 50%;
                background-color: ${props => props.theme.colors.white50};

                &:hover {
                    box-shadow: 0px 4px 8px rgba(81, 93, 61, 0.1);
                }
            }
        }

        .modal__inner {
            height: calc(100% - ${props => props.theme.sizes.s56});
            padding: ${props => props.theme.sizes.s32};

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;

            text-align: center;

            svg {
                width: ${props => props.theme.sizes.s64};
                height: ${props => props.theme.sizes.s64};
            }

            p {
                line-height: 180%;
                color: ${props => props.theme.colors.primary500};
            }
        }
    }

    @media screen and (min-width: ${props => props.theme.device.containerLg}) {
        .modal__content {
            width: 60%;
            height: auto;
        }
    }
`;
