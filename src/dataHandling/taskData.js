class TaskData {
    constructor(dataJSON, id) {
        this.dataJSON = dataJSON;
        this.id = id;
        this.name = dataJSON['task'];
        this.date = dataJSON['date'];
        this.datetime = dataJSON['datetime'];
        this.time = dataJSON['time'] || "-1";
        this.dateObject = this.getDateObj();
        this.priority = dataJSON['priority'];
        this.completed = dataJSON['completed'];
    }
    getDateObj() {
        let year = parseInt(this.date.substring(0,4));
        let month = parseInt(this.date.substring(5,7));
        let day = parseInt(this.date.substring(8,10));
        if (this.time != "-1") {
            let hours = parseInt(this.time.substring(0,2));
            let minutes = parseInt(this.time.substring(3,5))
            var date = new Date(year, month-1, day, hours, minutes);
        }
        else {
            var date = new Date(year, month-1, day);
        }
        return date;
    }
    updateJson() {
        this.dataJSON = {
            "task": this.name,
            "date": this.date,
            "time": this.time,
            "datetime": this.dateObject,
            "priority": this.priority,
            "completed": this.completed,
        }
    }
}

export default TaskData;