let getFormData = () => {
    let taskName = document.querySelector('#task-name-input').value;
    let dateTime = document.querySelector('#date-input').value;
    let priority = document.querySelector('input[name="priority-radio-btn"]:checked').value;
    let json = {
        "task": taskName,
        "datetime": dateTime,
        "priority": priority
    }
    return json;
}
let validateForm = () => {
    let taskName = document.querySelector('#task-name-input')
    let dateTime = document.querySelector('#date-input')
    let priority = document.querySelector('input[name="priority-radio-btn"]:checked')
    if (taskName.value = '' || taskName.value == 'Task name') {
        taskName.classList.add('empty-field');
    }
    if (datetime.value = '' || datetime.value == 'Task name') {
        datetime.classList.add('empty-field');
    }
}
export default getFormData;