import { default as ParseJson } from '../to-do-list/parseTaskData';
import { default as TaskData } from './taskData';
import { compareAsc, format } from 'date-fns';

class FetchData {
    constructor() {
        this.data = new Array();
        this.dates = new Array();
        this.sortedData = new Array();
        this.dateToObj = new Map();
        this.init();
    }
    init() {
        this.data = new Array();
        this.dates = new Array();
        this.sortedData = new Array();
        this.dateToObj = new Map();

        this.loadFromLocal();
        this.sortDates();
        console.log(this.sortedData);
    }
    loadFromLocal() {
        let amtOfData = {...localStorage} ?? false;
        if (amtOfData) {
            localStorage.removeItem('keys')
            let id = 0;
            let keys = 0;
            for (const property in amtOfData) {
                if (property == "debug" || property == "keys") {
                    continue;
                }
                    let dataJson = JSON.parse(amtOfData[property]);
                    let task = new TaskData(dataJson, id);
                    let date = task.dateObject;
                    this.data.push(task);
                    this.dates.push(date);
                    this.dateToObj.set(date, task);
                    id++;
                    keys++;
            }
            localStorage.setItem('keys', `${keys}`);
        }
    }
    sortDates() {
        this.dates.sort(compareAsc);
        for (let i = 0; i < this.dates.length; i++) {
            this.sortedData.push(this.dateToObj.get(this.dates[i]));
        }
    }
}

export default FetchData;