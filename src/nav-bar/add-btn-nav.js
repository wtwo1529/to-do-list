import { default as OpenCloseModal } from '../modal/openCloseModal';
 
class AddTaskNav {
    constructor (modalRoot, modal, addTaskBtns) {
        this.modalRoot = modalRoot;
        this.modal = modal;
        this.addTaskBtns = addTaskBtns;
        this.init();
    }
    init() {
        this.SetClickBtn();
    }
    SetClickBtn() {
        this.addTaskBtns.forEach((btn) => {
            btn.addEventListener(('click'), () => OpenCloseModal.openModal(this.modalRoot, this.modal))
        });
    }
}

export default AddTaskNav;