import { default as TaskData } from './taskData';
import { compareAsc } from 'date-fns';

class FetchData {
    constructor() {
        this.data = new Array();
        this.dates = new Array();
        this.sortedData = new Array();
        this.dateToObj = new Map();
        this.idToObj = new Map();
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
        let amtOfData = {...localStorage} ?? false;
        if (amtOfData) {
            localStorage.removeItem('keys')
            let id = 0;
            let keys = 0;
            var i = 0;
            for (const property in amtOfData) {
                if (property == "debug" || property == "keys") {
                    i++;
                    continue;
                }
                    let dataJson = JSON.parse(amtOfData[property]);
                    localStorage.removeItem(`${i}`);
                    localStorage.setItem(`${id}`, JSON.stringify(dataJson));
                    let task = new TaskData(dataJson, id);
                    let date = task.dateObject;
                    this.data.push(task);
                    this.dates.push(date);
                    this.dateToObj.set(date, this.data[this.data.length - 1]);
                    this.idToObj.set(id, this.data[this.data.length - 1]);
                    id++;
                    keys++;
                    i++;
            }
            console.log("END")

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