import downArrow from '../components/icons/down-arrowhead.svg';
import upArrow from '../components/icons/up-arrowhead.svg';

class OpenCloseDialog {
    constructor(dialogElement, openBtns, arrowheadElement) {
        this.dialogElement = dialogElement;
        this.openBtns = openBtns;
        this.dialogOpened = false;
        this.arrowheadElement = arrowheadElement;
        this.init();
    }
    init() {
        this.openCloseDialog(this.arrowheadElement);
        return;
    }
    openCloseDialog(arrowhead) {
        this.openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                if (!this.dialogOpened) {
                    this.arrowheadElement.setAttribute('src', downArrow);
                    this.dialogElement.show();
                    this.dialogOpened = true;
                }
                else {
                    this.arrowheadElement.setAttribute('src', upArrow);
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