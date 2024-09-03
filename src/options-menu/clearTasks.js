class ClearTasks {
    constructor(fetchData, clearCheckedTasks) {
        this.fetchData = fetchData
        this.clearCheckedTasks = clearCheckedTasks
    }
    clear() {
        console.log('hi')
        this.clearCheckedTasks.clear();
        let tasks = this.getTasks();
        tasks.forEach(task => {
            let taskID = parseInt(task.dataset.id);
            this.removeFromDOM(task);
            localStorage.removeItem(`${taskID}`);
        })
    }
    removeFromDOM(task) {
        task.parentNode.removeChild(task);
    }
    getTasks() {
        let tasks = document.querySelectorAll('.do-list-task');
        return tasks;
    }
}

export default ClearTasks;