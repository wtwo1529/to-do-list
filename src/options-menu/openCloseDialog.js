class OpenCloseDialog {
    constructor(dialogElement, openBtns) {
        this.dialogElement = dialogElement;
        this.openBtns = openBtns;
        this.dialogOpened = false;
        this.init();
    }
    init() {
        this.openDialog();
        this.closeDialog();
        return;
    }
    openDialog() {
        this.openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();

                if (!this.dialogOpened) {
                    this.dialogElement.show();
                    this.dialogOpened = true;
                }
            })
        });
    }
    closeDialog() {
        window.addEventListener('click', (event) => {
            if (this.dialogOpened && !(event.target == this.dialogElement)) {
                this.dialogElement.close();
                this.dialogOpened = false;
            }
        })
        this.dialogElement.addEventListener('click', (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
        })
    }
}
export default OpenCloseDialog;