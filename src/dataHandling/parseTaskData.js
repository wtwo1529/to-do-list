import uncheckedCircleSVG from '../components/icons/unchecked-circle.svg';
import checkedCircleSVG from '../components/icons/checked-circle.svg';

import { default as CompleteTask } from "../to-do-list/completingTask";

class ParseTaskData {
    static loadIntoDom(toDoList, taskData) {

        let taskDiv = document.createElement('div');
        taskDiv.classList.add('do-list-task');
        taskDiv.dataset.key = `${taskData.key}`;

        CompleteTask.clickCheck(taskDiv);

        let container = document.createElement('div');
        container.classList.add('do-list-task-container')

        let checkBox = document.createElement('img');
        if (taskData.completed == "true") {
            checkBox.setAttribute('src', checkedCircleSVG);
        }
        else {
            checkBox.setAttribute('src', uncheckedCircleSVG);
        }
        checkBox.classList.add('do-list-checkbox');

        let taskName = document.createElement('h1');
        taskName.classList.add('do-list-task-header');
        taskName.textContent = taskData.name;

        let taskDate = document.createElement('p');
        taskDate.textContent = taskData.dateObject.toString().substring(0, 21);
        
        container.appendChild(taskName);
        container.appendChild(taskDate);
        
        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(container);

        toDoList.appendChild(taskDiv);
    }
}

export default ParseTaskData;