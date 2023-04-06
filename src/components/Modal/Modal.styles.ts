import styled from "styled-components";

export const ModalWrapper = styled.div`
    z-index: 10;
    position: fixed;
    inset: 0;

    display: none;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.5);

    &.modal--show {
        display: flex;
    }

    .modal-content {
        position: relative;

        width: 50%;
        height: 60%;
        overflow: auto;
        padding: ${props => props.theme.sizes.s32};
        border-radius: ${props => props.theme.sizes.s12};
        background-color: ${props => props.theme.colors.white50};

        #close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .modal-inner {
            h3 {
                margin: ${props => props.theme.sizes.s32} 0 ${props => props.theme.sizes.s16} 0;
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.device.containerMd}) {
        .modal-content {
            width: 90%;
            height: auto;
        }
    }
`;
