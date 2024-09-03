import { default as LoadStoreData } from './loadStoreData';

class DeleteTask {
    static deleteTask(id, fetchData, pageHeader, toDoList) {
        localStorage.removeItem(`${id}`);
        fetchData.init();

        if (pageHeader == "Today") {
            LoadStoreData.loadTasksOfDate(fetchData, toDoList, new Date())
        }
        else if (pageHeader == "Upcoming") {
            LoadStoreData.loadTasksGreaterThanData(fetchData, toDoList, new Date())
        }
    }
}

export default DeleteTask;