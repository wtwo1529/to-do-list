class ClearCheckedTasks {
    constructor(fetchData) {
        this.fetchData = fetchData;
    }
    getCheckedTasks() {
        let checkedTasks = document.querySelectorAll('.checked-task');
        return checkedTasks;
    }
    completeTask(checkedTask) {
        let id = parseInt(checkedTask.dataset.id);
        this.fetchData.idToObj.get(id).completed = "true";
        let dataJSON = this.fetchData.idToObj.get(id).updateJson();
        localStorage.setItem(`${id}`, JSON.stringify(dataJSON));
    }
    removeFromDOM(checkedTask) {
        checkedTask.parentNode.removeChild(checkedTask);
    }
    clear() {
        let checkedTasks = this.getCheckedTasks();
        checkedTasks.forEach(checkedTask => {
            this.completeTask(checkedTask);
            this.removeFromDOM(checkedTask);
        })
    }
}

export default ClearCheckedTasks;