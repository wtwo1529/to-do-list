import "./style.css"; 

import { getFormData, validateForm, removeEmptyClassInput } from './handleModal';

window.onload = () => {
    let inputElements = document.querySelectorAll('#modal input');    
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

    let doAddBtns = document.querySelectorAll('.do-list-add-task-btn');
    doAddBtns.forEach((addBtn) => {
        addBtn.addEventListener('click', () => {
            document.querySelector('#modal').classList.add('modal');
            document.querySelector('#modal-root').classList.add('modal-root'); 
        })
    })
    document.querySelector('#modal-root').addEventListener('click', (event) => {
        document.querySelector('#modal-root').classList.remove('modal-root');
        document.querySelector('#modal').classList.remove('modal');
    })
    document.querySelector('#modal').addEventListener('click', (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
    })
    document.querySelector('#modal-submit').addEventListener('click', (event) => {
        event.preventDefault();
        validateForm();
    });
    removeEmptyClassInput(inputElements);

    // document.querySelector('#modal-submit').addEventListener('click', getFormData);
}