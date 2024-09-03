import { default as ChangeListContents } from './changeListContents';
import { default as CompleteTask } from './completingTask';
import { default as DeleteTask } from '../dataHandling/deleteTask';

class ToDoList {
    constructor(fetchData, toDoList, todayBtns, pageHeader, upcomingBtns) {
        this.changeListContents = new ChangeListContents(fetchData, toDoList, todayBtns, pageHeader, upcomingBtns);
    
    }
    setUpCheckBox() {
        
    }
    getTaskElements() {
        return document.querySelectorAll('.do-list-task');
    }
}

export default ToDoList;