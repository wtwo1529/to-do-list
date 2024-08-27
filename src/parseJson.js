class ParseJson {
    static loadIntoDom(toDoList, json) {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('do-list-task');
        
        let taskName = document.createElement('h1');
        taskName.classList.add('do-list-task-header');
        taskName.textContent = json['task'];

        let taskDate = document.createElement('p');
        taskDate.textContent = json['datetime']

        taskDiv.appendChild(taskName)
        taskDiv.appendChild(taskDate);
        
        toDoList.appendChild(taskDiv);
    }
}

export default ParseJson;