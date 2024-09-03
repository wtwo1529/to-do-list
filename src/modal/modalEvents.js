class ModalEvents {
    constructor(modal, nonRadioInputs, taskNameInputs) {
        this.modal = modal;
        this.nonRadioInputs = nonRadioInputs;
        this.taskNameInputs = taskNameInputs;
        this.checkedRadios = document.querySelectorAll('input[type="radio"]:checked') ?? false;
        this.init();
    }
    init() {
        this.setClickModal();
        this.setTaskNameEvents(this.taskNameInputs);
    }
    static clearInputs(nonRadioInputs, checkedRadios) {
        nonRadioInputs.forEach(
            (input) => {
                input.value = '';
            }
        )
        if (checkedRadios) {
            checkedRadios.forEach((checkedRadio) => {
                checkedRadio.checked = false;
            });
        }
        document.querySelector('#task-name-input').value = 'Task name';
    }
    setTaskNameEvents(taskNameInputs) {

        taskNameInputs.forEach(taskNameInput => {
            taskNameInput.value = 'Task name';
            taskNameInput.addEventListener("focus", (event) => {
                if (taskNameInput.value == 'Task name') 
                {
                    taskNameInput.value = '';
                }
            })
            taskNameInput.addEventListener("blur", (event) => {
                if (taskNameInput.value == '') {
                    taskNameInput.value = 'Task name';
                }
            })
        })
    }
    setClickModal() {
        modal.addEventListener('click', (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        })
    }
}
export default ModalEvents;