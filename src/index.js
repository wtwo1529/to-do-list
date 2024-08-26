import "./style.css"; 

import { default as handleModal } from './handleModal';

window.onload = () => {
    let inputElements = document.querySelectorAll('input:not([type="radio"])');
    let taskNameInput = document.querySelector('#task-name-input');
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

    let modalLogic = new handleModal(inputElements);
    // document.querySelector('#modal-submit').addEventListener('click', getFormData);
}