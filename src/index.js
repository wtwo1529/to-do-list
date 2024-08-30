import "./style.css"; 

import { default as ModalEvents } from './modal/modalEvents';
import { default as OpenCloseModal } from './modal/openCloseModal';
import { default as FormHandler } from './modal/formHandler';
import { default as RadioInput } from './modal/radioInput';
import FormValidator from "./modal/formValidator";
import { default as CompleteTask} from './to-do-list/completingTask';
import { default as ChangeListContents } from './to-do-list/changeListContents';
import { default as AddTaskNav } from './nav-bar/add-btn-nav';
import FetchData from "./dataHandling/fetchFormJson";

window.onload = () => {
    let modalRoot = document.querySelector('#modal-root');
    let modal = document.querySelector('#modal');
    let form = document.querySelector('#add-task-form');
    let addTaskBtns = document.querySelectorAll('.do-list-add-task-btn');
    let inputElements = document.querySelectorAll('input');
    let taskNameInput = document.querySelector('#task-name-input');
    let nonRadioInputs = document.querySelectorAll('input:not([type="radio"])');
    let radioInputs = document.querySelectorAll('input[type="radio"]');
    let toDoList = document.querySelector('.do-list');
    let todayPageBtns = document.querySelectorAll('#today-btn');
    let upcomingPageBtns = document.querySelectorAll('#upcoming-btn');
    let navAddTaskBtns = document.querySelectorAll('.nav-btn#add-task-btn')
    let doListHeader = document.querySelector('#do-list-title')

    taskNameInput.value = 'Task name';
    taskNameInput.addEventListener("focus", (event) => {
        if (taskNameInput.value == 'Task name') 
        {
            taskNameInput.value = '';
        }
    })
    taskNameInput.addEventListener("blur", (event) => {
        if (taskNameInput.value == '') {
            taskNameInput.value = 'Task name';
        }
    })
    
    let fetchData = new FetchData();
    let modalEvents = new ModalEvents(modal, nonRadioInputs);
    let openCloseModal = new OpenCloseModal(modalRoot, modal, addTaskBtns);
    let formHandler = new FormHandler(fetchData, modalRoot, modal, addTaskBtns, form, inputElements, nonRadioInputs, doListHeader);
    let formValidator = new FormValidator(nonRadioInputs, inputElements);
    let radioInput = new RadioInput(radioInputs);
    let completeTask = new CompleteTask();
    let changeListContents = new ChangeListContents(fetchData, toDoList, todayPageBtns, doListHeader, upcomingPageBtns);
    changeListContents.loadDefault();
    let addTaskNav = new AddTaskNav(modalRoot, modal, navAddTaskBtns);

    // document.querySelector('#modal-submit').addEventListener('click', getFormData);
}