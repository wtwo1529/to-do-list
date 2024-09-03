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
            if (!data['completed']) {
                if (data.dateObject.getFullYear() === date.getFullYear() && data.dateObject.getMonth() === date.getMonth() && data.dateObject.getDate() === date.getDate()) {
                    ParseJson.loadIntoDom(toDoList, data, true);
                }
            }
        })
    }
    static loadTasksGreaterThanData(fetchData, toDoList, date) {
        fetchData.init();
        toDoList.innerHTML = ' ';
        var date = date;
        fetchData.sortedData.forEach((data) => {
            if (!data['completed']) {
                if (data.dateObject > date.setHours(23,59,59,59)) {
                    ParseJson.loadIntoDom(toDoList, data, false, true);
                }
            }
        })
    }
}

export default LoadStoreData;