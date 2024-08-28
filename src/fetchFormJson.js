import { default as ParseJson } from './parseJson';
import { compareAsc, format } from 'date-fns';

class FetchData {
    constructor() {
        this.dataArr = new Array();
        this.dates = new Array();
        this.sortedData = new Array();
        this.dateToObj = new Map();
        this.init();
    }
    init() {
        this.loadFromLocal();
        this.sortDates();
    }
    loadFromLocal() {
        let amtOfData = localStorage.getItem('keys') ?? 0;
        if (amtOfData > 0) {
            for (let i = 0; i < amtOfData; i++) {
                let dataString = localStorage.getItem(`${i}`);
                let dataJson = JSON.parse(dataString);
                this.dataArr.push(dataJson);
                let year = parseInt(dataJson['date'].substring(0,4));
                let month = parseInt(dataJson['date'].substring(5,7));
                let day = parseInt(dataJson['date'].substring(8,10));
                if (dataJson['time'] != "-1") {
                    let hours = parseInt(dataJson['time'].substring(0,2));
                    let minutes = parseInt(dataJson['time'].substring(3,5))
                    var date = new Date(year, month-1, day, hours, minutes);
                }
                else {
                    var date = new Date(year, month-1, day);
                }
                dataJson['datetime'] = date;
                console.log(dataJson['datetime']);
                this.dates.push(date);
                this.dateToObj.set(date, dataJson);
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