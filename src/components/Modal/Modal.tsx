import { Button } from "../Button";
import { ModalWrapper } from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal = ({ title, description, children, isItToShowModal = false, onModalClose }: ModalProps) => {
    return (
        <ModalWrapper
            className={`modal ${isItToShowModal && 'modal--show'}`}
            onClick={onModalClose}
        >
            <div className="modal-content">
                <Button.Root id="close-modal" onClick={close}>
                    <Button.Icon iconDescription="Fechar" />
                </Button.Root>

                <div className="modal-inner">
                    <h3> {title} </h3>
                    {description && <p> {description} </p>}

                    <div className="modal-children">
                        {children}
                    </div>
                </div>
            </div>
        </ModalWrapper>
    );
}
