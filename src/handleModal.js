class handleModal {
    constructor(inputElements) {
        this.setShowModalRoot();
        this.setClickModal();
        this.submitForm();
        this.setRemoveEmptyClassInput(inputElements);
    }
    setShowModalRoot() {
        let doAddBtns = document.querySelectorAll('.do-list-add-task-btn');
        doAddBtns.forEach((addBtn) => {
            addBtn.addEventListener('click', this.openModal)
        })

        document.querySelector('#modal-root').addEventListener('click', this.closeModal);
    }
    openModal() {
        document.querySelector('#modal').classList.add('modal');
                document.querySelector('#modal-root').classList.add('modal-root'); 
    }
    closeModal() {
        document.querySelector('#modal-root').classList.remove('modal-root');
        document.querySelector('#modal').classList.remove('modal');
    }
    clearInputs() {
        document.querySelectorAll('input:not([type="radio"])').forEach(
            (input) => {
                input.value = '';
            }
        )
        let priority = document.querySelector('input[name="priority-radio-btn"]:checked');
        if (priority) {
            priority.checked = false;
        }
        document.querySelector('#task-name-input').value = 'Task name';
    }
    setClickModal() {
        document.querySelector('#modal').addEventListener('click', (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        })
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
        document.querySelector('#add-task-form').addEventListener('submit', (event) => {
            event.preventDefault();
            if (this.validateForm()) {
                this.closeModal();
            }
            let formData = this.getFormData();
            this.clearInputs();
            console.log(formData);
        });
    }
    validateForm() {
        let nonRadioInputs = document.querySelectorAll('input:not([type="radio"])');
        let priority = document.querySelector('input[name="priority-radio-btn"]:checked');
        let valid = true;
        nonRadioInputs.forEach(element => {
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
    
    setRemoveEmptyClassInput(inputElements) {
        inputElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.remove('empty-field');
            })
       }); 
    }
}
export default handleModal;