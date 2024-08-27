class OpenCloseModal {
    constructor(modalRoot, modal, openModalBtns) {
        this.modalRoot = modalRoot;
        this.modal = modal;
        this.openModalBtns = openModalBtns;
        this.init();
    }
    init() {
        this.setShowModalRoot();
    }
    setShowModalRoot() {
        // let doAddBtns = document.querySelectorAll('.do-list-add-task-btn');
        this.openModalBtns.forEach((openModalBtn) => {
            openModalBtn.addEventListener('click', () => OpenCloseModal.openModal(this.modalRoot, this.modal))
        })

        this.modalRoot.addEventListener('click', () => OpenCloseModal.closeModal(this.modalRoot, this.modal));
    }
    static openModal(modalRoot, modal) {
        modal.classList.add('modal');
        modalRoot.classList.add('modal-root'); 
    }
    static closeModal(modalRoot, modal) {
        modalRoot.classList.remove('modal-root');
        modal.classList.remove('modal');
    }
}

export default OpenCloseModal;