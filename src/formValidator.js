class FormValidator {
    constructor(nonRadioInputs, inputElements) {
        this.nonRadioInputs = nonRadioInputs;
        this.inputElements = inputElements;
        this.init();
    }
    init() {
        this.setRemoveEmptyClassInput();
    }
    static validateForm(nonRadioInputs) {
        // let nonRadioInputs = document.querySelectorAll('input:not([type="radio"])');
        // let priority = document.querySelector('input[name="priority-radio-btn"]:checked');
        let valid = true;
        nonRadioInputs.forEach((element) => {
            element.addEventListener('invalid', (e) => {
                e.preventDefault();
            });

            if (typeof element.value == "string") {
                let value = element.value.trim();
                if (value == '' || value == "Task name") {
                    element.classList.add('empty-field');
                    valid = false;
                }
            }
            else {
                if (element.value == '') {
                    element.classList.add('empty-field');
                    valid = false;
                }
            }
        })
        return valid;
    };

    clearInvalid() {

    }
    setRemoveEmptyClassInput() {
        this.inputElements.forEach((element) => {
            element.addEventListener('focus', () => {
                element.classList.remove('empty-field');
            })
       }); 
    }
}

export default FormValidator;