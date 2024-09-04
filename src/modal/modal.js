import { default as Form } from './form';
import { default as ModalEvents } from './modalEvents';
import { default as OpenCloseModal } from './openCloseModal'; 

class Modal {
    constructor(fetchData, toDoList, modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs, listHeader, taskNameInputs) {
        this.form = new Form(fetchData, toDoList, modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs, listHeader)
        this.modalEvents = new ModalEvents(modal, nonRadioInputs, taskNameInputs);
        this.openCloseModal = new OpenCloseModal(modalRoot, modal, openModalBtns);
    }
}

export default Modal;