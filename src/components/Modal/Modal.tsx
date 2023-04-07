import { ReactSVG } from "react-svg";

import EmojiSad from '../../assets/svgs/emoji-sad.svg';
import EmojiHappy from '../../assets/svgs/emoji-happy.svg';
import EmojiLove from '../../assets/svgs/emoji-love.svg';

import { ModalWrapper } from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal = ({ title, note, isItToShowModal = false, onModalClose }: ModalProps) => {
    return (
        <ModalWrapper
            className={`modal ${isItToShowModal && 'modal--show'}`}
        >
            <div className="modal__content">
                <div className="modal__header">
                    <button id="close-modal" onClick={onModalClose}> x </button>
                    <h5> {title} </h5>
                </div>

                <div className="modal__inner">
                    {note <= 4 &&
                        <ReactSVG role="img" src={EmojiSad} title="Emoji amarelo triste, representando uma espressão facial de tristeza." />
                    }

                    {(note > 4 && note <= 7) &&
                        <ReactSVG role="img" src={EmojiHappy} title="Emoji amarelo com um sorriso, representando uma espressão facial de felicidade." />
                    }

                    {(note > 7 && note <= 10) &&
                        <ReactSVG role="img" src={EmojiLove} title="Emoji amarelo com corações vermelhos nos olhos, representando espressão de amor." />
                    }

                    <p> A nota que você atribuiu foi <strong> {note} </strong>. </p>

                    {note <= 4 &&
                        <p> Ficamos tristes em saber que você não está satisfeito. Iremos melhorar. </p>
                    }

                    {(note > 4 && note <= 7) &&
                        <p> Ficamos satisfeitos em saber que está gostando. Iremos melhorar ainda mais. </p>
                    }

                    {(note > 7 && note <= 10) &&
                        <p> Ficamos felizes em saber que está amando. </p>
                    }

                    <p> Obrigado por responder </p>
                </div>
            </div>
        </ModalWrapper>
    );
}
