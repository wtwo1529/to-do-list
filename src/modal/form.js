import { default as FormHandler } from './formHandler';
import { default as FormValidator } from './formValidator';

class Form {
    constructor(fetchData, modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs, radioInputs, listHeader) {
        this.formHandler = new FormHandler(fetchData, modalRoot, modal, openModalBtns, formElement, inputElements, nonRadioInputs, listHeader);
        this.formValidator = new FormValidator(nonRadioInputs, inputElements);
        this.radioInputs = new RadioInput(radioInputs);
    }

}

export default Form;