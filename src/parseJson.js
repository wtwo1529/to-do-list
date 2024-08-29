import uncheckedBox from './components/icons/unchecked-box.png';
import uncheckedCircle from './components/icons/unchecked-circle.png';
import uncheckedCircleSVG from './components/icons/unchecked-circle.svg';

import { compareAsc, format } from "date-fns";
import { default as CompleteTask } from "./completingTask";

class ParseJson {
    static loadIntoDom(toDoList, json) {

        let taskDiv = document.createElement('div');
        taskDiv.classList.add('do-list-task');

        CompleteTask.clickCheck(taskDiv);

        let container = document.createElement('div');
        container.classList.add('do-list-task-container')

        let checkBox = document.createElement('img');
        checkBox.setAttribute('src', uncheckedCircleSVG);
        checkBox.classList.add('do-list-checkbox');

        let taskName = document.createElement('h1');
        taskName.classList.add('do-list-task-header');
        taskName.textContent = json['task'];

        let taskDate = document.createElement('p');
        taskDate.textContent = json['datetime']
        
        container.appendChild(taskName);
        container.appendChild(taskDate);
        
        // if (json['time'] != "-1") {
        //     let taskTime = document.createElement('p');
        //     taskTime.textContent = json['time'];
        //     container.append(taskTime)
        // }
        
        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(container);

        toDoList.appendChild(taskDiv);
    }
}

export default ParseJson;