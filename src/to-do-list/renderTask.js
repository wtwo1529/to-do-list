import uncheckedCircleSVG from '../components/icons/unchecked-circle.svg';
import checkedCircleSVG from '../components/icons/checked-circle.svg';
import clock from '../components/icons/do-list-time.svg';
import calendar from '../components/icons/do-list-calendar.svg';

import { default as clickCheckEvent } from "./clickCheckbox";


function renderTask(fetchData, toDoList, taskData, today=false) {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('do-list-task');
        taskDiv.dataset.id = `${taskData.id}`;

        clickCheckEvent(fetchData, taskDiv);

        let container = document.createElement('div');
        container.classList.add('do-list-task-container')

        let checkBox = document.createElement('img');
        if (taskData['dataJSON'].completed == "true") {
            checkBox.setAttribute('src', checkedCircleSVG);
            taskDiv.classList.add('checked-task');
        }
        else if (taskData['dataJSON'].completed == "false") {
            checkBox.setAttribute('src', uncheckedCircleSVG);
        }

        checkBox.classList.add('do-list-checkbox');

        let taskName = document.createElement('h1');
        taskName.classList.add('do-list-task-header');
        taskName.textContent = taskData.name;

        container.appendChild(taskName);
        
        let dateDiv = document.createElement('div');
        dateDiv.classList.add('task-date-container');

        let dateIcon = document.createElement('img');
        dateIcon.classList.add('task-date-icon');
        
        let datetime = document.createElement('p');
        datetime.classList.add('do-list-task-subtitle');
        
        if (today) {    
            dateIcon.setAttribute('src', clock);
            datetime.textContent = taskData.dateObject.toString().substring(16, 21);
        }
        else {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            yesterday.setHours(0,0,0,0);

            const today = new Date();
            today.setHours(0,0,0,0);

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(23,59,59,59);

            let date = taskData.dateObject;
            dateIcon.setAttribute('src', calendar);
            if (date > today && date < tomorrow) {
                datetime.textContent = `Tomorrow ${taskData.dateObject.toString().substring(16, 21)}`;
            }
            else if (date < today && date > yesterday) {
                datetime.textContent = `Yesterday ${taskData.dateObject.toString().substring(16, 21)}`;
            }
            else {
                datetime.textContent = `${date.toString().substring(0, 11)} ${taskData.dateObject.toString().substring(16, 21)}`;
            }
        }

        dateDiv.appendChild(dateIcon);
        dateDiv.appendChild(datetime);

        container.appendChild(dateDiv);
        
        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(container);

        toDoList.appendChild(taskDiv);
    }


export default renderTask;