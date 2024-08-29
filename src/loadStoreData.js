import { default as ParseJson } from './parseJson';
import { default as FetchData } from './fetchFormJson'; 

class LoadStoreData {
    constructor(toDoList) {
        this.fetchData = new FetchData;
        this.toDoList = toDoList;        
    }
    loadTasksOfDate(date) {
        this.toDoList.innerHTML = '';
        var date = date;
        this.fetchData.sortedData.forEach((data) => {
            if (data['datetime'].setHours(0,0,0,0) != date.setHours(0,0,0,0)) {
                return;
            }
            ParseJson.loadIntoDom(this.toDoList, data);
        })
    }
    loadTasksGreaterThanData(date) {
        this.toDoList.innerHTML = '';
        var date = date;
        this.fetchData.sortedData.forEach((data) => {
            if (data['datetime'] > date.setHours(0,0,0,0)) {
                ParseJson.loadIntoDom(this.toDoList, data);
            }
        })
    }
}

export default LoadStoreData;