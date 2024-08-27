import {default as FormValidator} from './formValidator';
import {default as OpenCloseModal} from './openCloseModal';
import {default as ModalEvents} from './modalEvents';
import {default as ParseJson} from './parseJson';

class FormHandler {
    constructor(modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs) {
        this.modalRoot = modalRoot;
        this.modal = modal;
        this.openModalBtns = openModalBtns;
        this.formElement = formElement;
        this.inputElements = inputElements;
        this.nonRadioInputs = nonRadioInputs;
        this.init();
    }
    init() {
        this.submitForm();
    }
    getFormData() {
        let taskName = document.querySelector('#task-name-input').value;
        let dateTime = document.querySelector('#date-input').value;
        let priority = document.querySelector('input[name="priority-radio-btn"]:checked') ?? false;
        let json = {
            "task": taskName,
            "datetime": dateTime,
            "priority": priority.value || "-1"
        }
        return json;
    };
    submitForm() {
        let openCloseModal = new OpenCloseModal(this.modalRoot, this.modal, this.openModalBtns);
        
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            if (FormValidator.validateForm(this.nonRadioInputs)) {
                OpenCloseModal.closeModal(this.modalRoot, this.modal);
                let toDoList = document.querySelector('.do-list');
                let formData = this.getFormData();
                let checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
                ModalEvents.clearInputs(this.nonRadioInputs, checkedRadios);
                ParseJson.loadIntoDom(toDoList, formData);
            }
        });
    }
}
export default FormHandler;