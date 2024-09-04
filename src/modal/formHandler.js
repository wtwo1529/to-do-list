import { default as FormValidator } from './formValidator';
import { default as OpenCloseModal } from './openCloseModal';
import { default as ModalEvents } from './modalEvents';
import { default as StoreData } from './storeFormJson';
import { default as LoadStoreData } from '../dataHandling/loadStoreData';

class FormHandler {
    constructor(FetchData, toDoList, modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs, listHeader) {
        this.fetchData = FetchData;
        this.modalRoot = modalRoot;
        this.modal = modal;
        this.openModalBtns = openModalBtns;
        this.formElement = formElement;
        this.inputElements = inputElements;
        this.nonRadioInputs = nonRadioInputs;
        this.listHeader = listHeader; 
        this.loadStoreData = new LoadStoreData(FetchData, toDoList)
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
            "priority": priority.value || "-1",
            "completed": "false"
        }
        // if (json['time'] != "-1") {
        //     let hours = parseInt(dataJson['time'].substring(0,2));
        //     let minutes = parseInt(dataJson['time'].substring(3,5))
        //     var datetime = new Date(year, month-1, day, hours, minutes);
        // }
        // else {
        //     var datetime = new Date(year, month-1, day);
        // }
        // json['datetime'] = datetime;
        return json;
    };
    submitForm() {        
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            if (FormValidator.validateForm(this.nonRadioInputs)) {
                OpenCloseModal.closeModal(this.modalRoot, this.modal);
                let formDataJSON = this.getFormData();
                let checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
                ModalEvents.clearInputs(this.nonRadioInputs, checkedRadios);
                this.storeData.addToLocal(formDataJSON);
                this.fetchData.init();
                let todayDate = new Date();
                if (this.listHeader.textContent == "Today") {
                    this.loadStoreData.loadTasksOfDate(todayDate);
                }
                else if (this.listHeader.textContent == "Upcoming") {
                    this.loadStoreData.loadTasksOverDate(todayDate);
                }
            }
        });
    }
}
export default FormHandler;