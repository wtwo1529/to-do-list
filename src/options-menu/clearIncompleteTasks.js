function clearIncompleteTasks(fetchData, toDoList) {
    let tasks = toDoList.querySelectorAll('.do-list-task');
    console.log(tasks);
    tasks.forEach(task => {
        let id = parseInt(task.dataset.id);
        let data = fetchData.idToObj.get(id)['dataJSON'];
        if (data['completed'] == "false") {
            task.parentNode.removeChild(task);
        } 
    })
}

export default clearIncompleteTasks;