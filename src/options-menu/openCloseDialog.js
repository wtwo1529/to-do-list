class OpenCloseDialog {
    constructor(dialogElement, openBtns) {
        this.dialogElement = dialogElement;
        this.openBtns = openBtns;
        this.dialogOpened = false;
        this.init();
    }
    init() {
        this.openDialog(this.dialogElement, this.openBtns);
        this.closeDialog(this.dialogElement);
        return;
    }
    openDialog(dialogElement, openBtns) {
        openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();

                if (!this.dialogOpened) {
                    dialogElement.show();
                    this.dialogOpened = true;
                }
            })
        });
    }
    closeDialog(dialogElement) {
        window.addEventListener('click', (event) => {
            if (this.dialogOpened && !(event.target == this.dialogElement)) {
                dialogElement.close();
                this.dialogOpened = false;
            }
        })
        dialogElement.addEventListener('click', (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
        })
    }
}
export default OpenCloseDialog;