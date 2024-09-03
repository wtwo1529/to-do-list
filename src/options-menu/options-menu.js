import { default as OpenCloseDialog } from './openCloseDialog';
import { default as ClearCheckedTasks } from './clearCheckedTasks';

class OptionsMenu {
    constructor(fetchData, dialogElement, openDialogBtns, clearCheckedTasksBtns) {
        this.openCloseDialog = new OpenCloseDialog(dialogElement, openDialogBtns);
        this.clearCheckedTasks = new ClearCheckedTasks(fetchData);
        this.init(clearCheckedTasksBtns);
    }
    init(btns) {
        this.setClearCheckedTasks(btns);
    }
    setClearCheckedTasks(btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                this.clearCheckedTasks.clear();
            } )
        })
    }
}
export default OptionsMenu;