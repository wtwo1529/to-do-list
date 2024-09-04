class CompletedTasks {
    constructor(fetchData, toDoList) {
        this.fetchData = fetchData;
        this.toDoList = toDoList;
    }
    getTasks() {
        let tasks = this.toDoList.querySelectorAll('.do-list-task')
        return tasks;
    }
    clearNonCompleted() {
        let tasks = this.getTasks();
        tasks.forEach(task => {
            let id = parseInt(task.dataset.id);
            let data = this.fetchData.idToObj.get(id)['dataJSON'];
            if (data['completed'] == "false") {
                task.parentNode.removeChild(task);
            } 
        })
    }
}

export default CompletedTasks;