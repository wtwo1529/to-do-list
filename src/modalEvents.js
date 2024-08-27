class ModalEvents {
    constructor(modal, nonRadioInputs) {
        this.nonRadioInputs = nonRadioInputs;
        this.modal = modal;
        this.checkedRadios = document.querySelectorAll('input[type="radio"]:checked') ?? false;
        this.init();
    }
    init() {
        this.setClickModal();
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
    setClickModal() {
        modal.addEventListener('click', (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        })
    }
}
export default ModalEvents;