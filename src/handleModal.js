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
export default getFormData;