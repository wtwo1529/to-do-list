import { default as ChangeListContents } from './changeListContents';
import { default as CompleteTask } from './clickCheckbox';
import { default as DeleteTask } from '../dataHandling/deleteTask';

class ToDoList {
    constructor(fetchData, toDoList, todayBtns, pageHeader, upcomingBtns, allTasksBtns) {
        this.changeListContents = new ChangeListContents(fetchData, toDoList, todayBtns, pageHeader, upcomingBtns, allTasksBtns);
    
    }
    setUpCheckBox() {
        
    }
    getTaskElements() {
        return document.querySelectorAll('.do-list-task');
    }
}

export default ToDoList;