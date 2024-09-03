import { default as Form } from './form';
import { default as ModalEvents } from './modalEvents';
import { default as OpenCloseModal } from './openCloseModal'; 

class Modal {
    constructor(fetchData, modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs, radioInputs, listHeader, taskNameInputs) {
        this.form = new Form(fetchData, modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs, radioInputs, listHeader)
        this.modalEvents = new ModalEvents(modal, nonRadioInputs, taskNameInputs);
        this.openCloseModal = new OpenCloseModal(modalRoot, modal, openModalBtns);
    }
}

export default Modal;