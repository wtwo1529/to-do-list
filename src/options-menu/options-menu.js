import { default as OpenCloseDialog } from './openCloseDialog';
import { default as ClearCheckedTasks } from './clearCheckedTasks';
import { default as ClearTasks } from './clearTasks.js';
import { default as clearIncompleteTasks } from './clearIncompleteTasks.js';

class OptionsMenu {
    constructor(fetchData, projectsDialog, openCloseProjectsBtns, clearCheckedTasksBtns, clearTasksBtns, toDoList, filterCompletedBtns, projectsArrowhead) {
        this.openCloseProjectsDialog = new OpenCloseDialog(projectsDialog, openCloseProjectsBtns, projectsArrowhead);
        this.clearCheckedTasks = new ClearCheckedTasks(fetchData);
        this.clearTasks = new ClearTasks(fetchData, this.clearCheckedTasks);
        this.init(fetchData, toDoList, clearCheckedTasksBtns, clearTasksBtns, filterCompletedBtns);
    }
    init(fetchData, toDoList, clearCheckedTaskBtns, clearTasksBtns, filterCompletedBtns) {
        this.setFilterCompleted(fetchData, toDoList, filterCompletedBtns);
        this.setClearCheckedTasks(clearCheckedTaskBtns);
        this.setClearTasks(clearTasksBtns);
    }
    setFilterCompleted(fetchData, toDoList, btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                clearIncompleteTasks(fetchData, toDoList);
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