import { default as OpenCloseModal } from './openCloseModal';
 
class AddTaskNav {
    constructor (addTaskBtns) {
        this.addTaskBtns = addTaskBtns;
        this.init();
    }
    init() {
        this.SetClickBtn();
    }
    SetClickBtn() {
        this.addTaskBtns.forEach((btn) => {
            btn.addEventListener(('click'), () => OpenCloseModal.openModal())
        });
    }
}

export default AddTaskNav;