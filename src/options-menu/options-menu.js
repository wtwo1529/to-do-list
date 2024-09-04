import { default as OpenCloseDialog } from './openCloseDialog';
import { default as ClearCheckedTasks } from './clearCheckedTasks';
import { default as ClearTasks } from './clearTasks.js';
import { default as clearIncompleteTasks } from './clearIncompleteTasks.js';

class OptionsMenu {
    constructor(fetchData, dialogElement, openDialogBtns, clearCheckedTasksBtns, clearTasksBtns, toDoList, filterCompletedBtns) {
        this.openCloseDialog = new OpenCloseDialog(dialogElement, openDialogBtns);
        this.clearCheckedTasks = new ClearCheckedTasks(fetchData);
        this.clearTasks = new ClearTasks(fetchData, this.clearCheckedTasks);
        this.init(clearCheckedTasksBtns, clearTasksBtns, filterCompletedBtns);
    }
    init(clearCheckedTaskBtns, clearTasksBtns, filterCompletedBtns) {
        this.setFilterCompleted(filterCompletedBtns);
        this.setClearCheckedTasks(clearCheckedTaskBtns);
        this.setClearTasks(clearTasksBtns);
    }
    setFilterCompleted(btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                clearIncompleteTasks();
            })
        })
    }
    setClearTasks(btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                this.clearTasks.clear();
            })
        })
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