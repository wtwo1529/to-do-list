import { default as renderTask } from '../to-do-list/renderTask';

class LoadStoreData {
    constructor(FetchData, toDoList) {
        this.fetchData = FetchData;
        this.toDoList = toDoList;        
    }
    loadTasksOfDate(date, emptyToDoList=true, completed=false) {
        if (emptyToDoList) {
            this.toDoList.innerHTML = ' ';
        }
        this.fetchData.sortedData.forEach((data) => {
            if (completed == false) {
                if (data['dataJSON']['completed'] == "false" && data.dateObject.getFullYear() === date.getFullYear() && data.dateObject.getMonth() === date.getMonth() && data.dateObject.getDate() === date.getDate()) {
                    renderTask(this.fetchData, this.toDoList, data, true);
                }
            }
            else if (completed) {
                if (data['dataJSON']['completed'] == "true" && data.dateObject.getFullYear() === date.getFullYear() && data.dateObject.getMonth() === date.getMonth() && data.dateObject.getDate() === date.getDate()) {
                    renderTask(this.fetchData, this.toDoList, data, true);
                }
            }
            else {
                if (data.dateObject.getFullYear() === date.getFullYear() && data.dateObject.getMonth() === date.getMonth() && data.dateObject.getDate() === date.getDate()) {
                    renderTask(this.fetchData, this.toDoList, data, true);
                }
            }
        })
    }
    loadTasksOverDate(date, emptyToDoList=true, completed=false) {
        if (emptyToDoList) {
            this.toDoList.innerHTML = ' ';
        }
        this.fetchData.sortedData.forEach((data) => {
            console.log(data['dataJSON']['completed']);
            if (completed == false) {
                if (data['dataJSON']['completed'] == "false" && data.dateObject > date.setHours(23,59,59,59)) {
                    renderTask(this.fetchData, this.toDoList, data, false);
                }
            }
            else if (completed) {
                if (data['dataJSON']['completed'] == "true" && data.dateObject > date.setHours(23,59,59,59)) {
                    renderTask(this.fetchData, this.toDoList, data, false);
                }
            }
            else {
                if (data.dateObject > date.setHours(23,59,59,59)) {
                    renderTask(this.fetchData, this.toDoList, data, false);
                }
            }
        })
    }
    loadTasksBeforeDate(date, emptyToDoList=true, completed=false) {
        if (emptyToDoList) {
            this.toDoList.innerHTML = ' ';
        }
        this.fetchData.sortedData.forEach((data) => {
            if (completed == false) {
                if (data['dataJSON']['completed'] == "false" && data.dateObject < date.setHours(0,0,0,0)) {
                    renderTask(this.fetchData, this.toDoList, data, false);
                }
            }
            else if (completed) {
                if (data['dataJSON']['completed'] == "true" && data.dateObject < date.setHours(0,0,0,0)) {
                    renderTask(this.fetchData, this.toDoList, data, false);
                }
            }
            else {
                if (data.dateObject < date.setHours(0,0,0,0)) {
                    renderTask(this.fetchData, this.toDoList, data, false);
                }
            }
        })
    }
    loadAllTasks() {
        this.fetchData.init();
        this.toDoList.innerHTML = ' ';
        let date = new Date();
        this.loadTasksBeforeDate(date, true, null);
        this.loadTasksOfDate(date, false, null);
        this.loadTasksOverDate(date, false, null);
    }
}

export default LoadStoreData;