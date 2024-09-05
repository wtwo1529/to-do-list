import "./components/styles/style.css" 
import "./components/styles/list-add-btn.css";
import "./components/styles/list-options.css" 
import "./components/styles/mobile-sidebar.css" 
import "./components/styles/modal.css" 
import "./components/styles/sidebar.css"
import "./components/styles/task.css" 
import "./components/styles/to-do-list.css"

import { default as FetchData } from "./dataHandling/fetchFormJson";
import { default as NavBar } from "./nav-bar/nav-bar";
import { default as OptionsMenu } from './options-menu/options-menu';
import { default as Modal } from "./modal/modal";
import { default as ToDoList } from './to-do-list/to-do-list';

window.onload = () => {
    let fetchData = new FetchData();
    
    let toDoListElement = document.querySelector('.do-list');
    let todayPageBtns = document.querySelectorAll('#today-btn');
    let doListHeader = document.querySelector('#do-list-title')
    let upcomingPageBtns = document.querySelectorAll('#upcoming-btn');
    let allTasksBtns = document.querySelectorAll('#all-tasks-btn');
    let toDoList = new ToDoList(fetchData, toDoListElement, todayPageBtns, doListHeader, upcomingPageBtns, allTasksBtns);
    
    let modalRoot = document.querySelector('#modal-root');
    let modal = document.querySelector('#modal');
    let addTaskBtns = document.querySelectorAll('.do-list-add-task-btn');
    let form = document.querySelector('#add-task-form');
    let inputElements = document.querySelectorAll('input');
    let nonRadioInputs = document.querySelectorAll('input:not([type="radio"])');
    let taskNameInputs = document.querySelectorAll('#task-name-input');
    let modalLogic = new Modal(fetchData, toDoListElement, modalRoot, modal, addTaskBtns, form, inputElements, nonRadioInputs, doListHeader, taskNameInputs);
    
    let navAddTaskBtns = document.querySelectorAll('.nav-btn#add-task-btn')
    let navContainer = document.querySelector('.mobile-nav-container');
    let openNavBtns = document.querySelectorAll('#sidebar-menu-btn');
    let filtersLabelsDialog = document.querySelector('#filters-labels-dialog');
    let openFiltersLabelsBtns = document.querySelectorAll('#filters-labels-btn');
    let searchBarBtns = document.querySelectorAll('#search-btn');
    let navBar = new NavBar(modalRoot, modal, navContainer, openNavBtns, navAddTaskBtns, filtersLabelsDialog, openFiltersLabelsBtns, doListHeader, toDoListElement, searchBarBtns);
    
    let optionsDialog = document.querySelector('#do-list-options');
    let openOptionsBtns = document.querySelectorAll('#do-list-options-btn');
    let clearCheckedTaskBtns = document.querySelectorAll('#clear-finished-tasks-btn')
    let clearTasksBtns = document.querySelectorAll('#clear-tasks-btn');
    let filterCompletedBtns = document.querySelectorAll('#filter-completed-btn');
    let filtersArrowhead = document.querySelector('#filters-labels-arrowhead');
    let projectsDialog = document.querySelector('#projects-dialog');
    let openProjectsBtns = document.querySelectorAll('#projects-btn');
    let projectsArrowhead = document.querySelector('#projects-arrowhead');
    let optionsMenu = new OptionsMenu(fetchData, projectsDialog, openProjectsBtns, clearCheckedTaskBtns, clearTasksBtns, toDoListElement, filterCompletedBtns, projectsArrowhead);

    // document.querySelector('#modal-submit').addEventListener('click', getFormData);
}