let getFormData = (valueHash) => {
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
    let nonRadioInputs = document.querySelectorAll('input:not([type="radio"])');
    let priority = document.querySelector('input[name="priority-radio-btn"]:checked');
    nonRadioInputs.forEach(element => {
        if (typeof element.value == "string") {
            let value = element.value.trim();
            if (value == '' || value == "Task name") {
                element.classList.add('empty-field');
            }
        }
        else {
            if (element.value == '') {
                element.classList.add('empty-field');
            }
            console.log(element);
        }
    })
};

let removeEmptyClassInput = (inputElements) => {
   inputElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.classList.remove('empty-field');
        })
   }); 
}
export {getFormData, validateForm, removeEmptyClassInput};