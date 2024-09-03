import { default as OpenCloseDialog } from './openCloseDialog';
class OptionsMenu {
    constructor(dialogElement, openDialogBtns) {
        this.openCloseDialog = new OpenCloseDialog(dialogElement, openDialogBtns);
    }
}
export default OptionsMenu;