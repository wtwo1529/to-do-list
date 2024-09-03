import "./styles/list-add-btn.css";
import "./styles/list-nav.css" 
import "./styles/list-options.css" 
import "./styles/mobile-nav-bar.css" 
import "./styles/modal.css" 
import "./styles/sidebar.css"
import "./styles/task.css" 
import "./styles/to-do-list.css"
import "./styles/style.css" 

import { default as ChangeListContents } from './to-do-list/changeListContents';
import { default as AddTaskNav } from './nav-bar/add-btn-nav';
import FetchData from "./dataHandling/fetchFormJson";
import NavBar from "./nav-bar/nav-bar";
import { default as OptionsMenu } from './options-menu/options-menu';
import Modal from "./modal/modal";
import { default as ToDoList } from './to-do-list/to-do-list';

window.onload = () => {
    let fetchData = new FetchData();
    
    let modalRoot = document.querySelector('#modal-root');
    let modal = document.querySelector('#modal');
    let addTaskBtns = document.querySelectorAll('.do-list-add-task-btn');
    let form = document.querySelector('#add-task-form');
    let inputElements = document.querySelectorAll('input');
    let nonRadioInputs = document.querySelectorAll('input:not([type="radio"])');
    let radioInputs = document.querySelectorAll('input[type="radio"]');
    let taskNameInputs = document.querySelectorAll('#task-name-input');
    let modalLogic = new Modal(fetchData, modalRoot, modal, addTaskBtns, form, inputElements, nonRadioInputs, radioInputs, doListHeader, taskNameInputs);
    
    let toDoListElement = document.querySelector('.do-list');
    let todayPageBtns = document.querySelectorAll('#today-btn');
    let doListHeader = document.querySelector('#do-list-title')
    let upcomingPageBtns = document.querySelectorAll('#upcoming-btn');
    let toDoList = new ToDoList(fetchData, toDoListElement, todayPageBtns, doListHeader, upcomingPageBtns);
    
    let navAddTaskBtns = document.querySelectorAll('.nav-btn#add-task-btn')
    let navContainer = document.querySelector('.mobile-nav-container');
    let openNavBtns = document.querySelectorAll('#sidebar-menu-btn')
    let navBar = new NavBar(modalRoot, modal, navContainer, openNavBtns, navAddTaskBtns);
    
    let dialogElement = document.querySelector('#do-list-options');
    let openDialogBtns = document.querySelectorAll('#do-list-options-btn');
    let optionsMenu = new OptionsMenu(dialogElement, openDialogBtns);

    // document.querySelector('#modal-submit').addEventListener('click', getFormData);
}