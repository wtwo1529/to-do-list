import downArrow from '../components/icons/down-arrowhead.svg';
import upArrow from '../components/icons/up-arrowhead.svg';

class OpenCloseDialog {
    constructor(dialogElement, openBtns) {
        this.dialogElement = dialogElement;
        this.openBtns = openBtns;
        this.dialogOpened = false;
        this.init();
    }
    init() {
        this.openCloseDialog();
        return;
    }
    openCloseDialog() {
        this.openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();

                if (!this.dialogOpened) {
                    document.querySelector('.dropdown-indicator-img').setAttribute('src', downArrow);
                    this.dialogElement.show();
                    this.dialogOpened = true;
                }
                else {
                    document.querySelector('.dropdown-indicator-img').setAttribute('src', upArrow);
                    this.dialogElement.close();
                    this.dialogOpened = false;
                }
            })
        }); 
    }
    // closeDialog() {
    //     this.openBtns.forEach(btn => {
    //         btn.addEventListener('click', (event) => {
    //             if (this.dialogOpened) {
    //                 document.querySelector('.dropdown-indicator-img').setAttribute('src', upArrow);
    //                 this.dialogElement.close();
    //                 this.dialogOpened = false;
    //             }
    //         })
    //     })
    //     window.addEventListener('click', (event) => {
    //         if (this.dialogOpened && !(event.target == this.dialogElement)) {
    //             document.querySelector('.dropdown-indicator-img').setAttribute('src', upArrow);
    //             this.dialogElement.close();
    //             this.dialogOpened = false;
    //         }
    //     })
    //     this.dialogElement.addEventListener('click', (event) => {
    //         event.stopPropagation();
    //         event.stopImmediatePropagation();
    //     })
    // }
}
export default OpenCloseDialog;