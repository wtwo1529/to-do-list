import {default as FormValidator} from './formValidator';
import {default as OpenCloseModal} from './openCloseModal';
import {default as ModalEvents} from './modalEvents';
import {default as ParseJson} from './parseJson';
import {default as StoreData} from './storeFormJson';

class FormHandler {
    constructor(modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs) {
        this.modalRoot = modalRoot;
        this.modal = modal;
        this.openModalBtns = openModalBtns;
        this.formElement = formElement;
        this.inputElements = inputElements;
        this.nonRadioInputs = nonRadioInputs;
        
        this.storeData = new StoreData;

        this.init();
    }
    init() {
        this.submitForm();
    }
    getFormData() {
        let taskName = document.querySelector('#task-name-input').value;
        let date = document.querySelector('#date-input').value;
        let time = document.querySelector('#time-input');
        let priority = document.querySelector('input[name="priority-radio-btn"]:checked') ?? false;
        let json = {
            "task": taskName,
            "date": date,
            "time": time.value || "-1",
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
                let formDataJSON = this.getFormData();
                let checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
                ModalEvents.clearInputs(this.nonRadioInputs, checkedRadios);
                ParseJson.loadIntoDom(toDoList, formDataJSON);
                this.storeData.addToLocal(formDataJSON);
            }
        });
    }
}
export default FormHandler;