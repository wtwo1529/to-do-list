import { default as ParseJson } from '../to-do-list/parseTaskData';

class LoadStoreData {
    constructor(FetchData, toDoList) {
        this.fetchData = FetchData;
        this.toDoList = toDoList;        
    }
    static loadTasksOfDate(fetchData, toDoList, date) {
        fetchData.init();
        var date = date;
        toDoList.innerHTML = ' ';
        fetchData.sortedData.forEach((data) => {
            if (data['completed'] == "false") {
                if (data.dateObject.getFullYear() === date.getFullYear() && data.dateObject.getMonth() === date.getMonth() && data.dateObject.getDate() === date.getDate()) {
                    ParseJson.loadIntoDom(fetchData, toDoList, data, true);
                }
            }
        })
    }
    static loadTasksGreaterThanData(fetchData, toDoList, date) {
        fetchData.init();
        toDoList.innerHTML = ' ';
        var date = date;
        fetchData.sortedData.forEach((data) => {
            if (data['completed'] == "false") {
                if (data.dateObject > date.setHours(23,59,59,59)) {
                    ParseJson.loadIntoDom(fetchData, toDoList, data, false);
                }
            }
        })
    }
    static loadAllTasks(fetchData, toDoList) {
        fetchData.init();
        toDoList.innerHTML = ' ';
        fetchData.data.forEach((data) => {
            console.log(data);
            ParseJson.loadIntoDom(fetchData, toDoList, data, false);
        })
    }
}

export default LoadStoreData;