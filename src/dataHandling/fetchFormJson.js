import { default as ParseJson } from './parseTaskData';
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
    }
    loadFromLocal() {
        let amtOfData = localStorage.getItem('keys') ?? 0;
        if (amtOfData > 0) {
            for (let i = 0; i < amtOfData; i++) {
                let dataString = localStorage.getItem(`${i}`);
                let dataJson = JSON.parse(dataString);
                let task = new TaskData(dataJson, i);
                let date = task.dateObject;
                this.data.push(task);
                this.dates.push(date);
                this.dateToObj.set(date, task);
            }
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