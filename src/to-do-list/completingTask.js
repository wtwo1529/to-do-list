import checkedCircle from '../components/icons/checked-circle.svg';
import uncheckedCircle from '../components/icons/unchecked-circle.svg';

class CompleteTask {
    static clickCheck(fetchData, taskElement) {
        taskElement.addEventListener('click', (e) => {
            let id = parseInt(taskElement.dataset.id);
            if (e.target.matches('.do-list-checkbox')) {
                if (e.target.src == checkedCircle) {
                    let data = fetchData.idToObj.get(id)['dataJSON']; 
                    data['completed'] = "false";
                    e.target.setAttribute('src', uncheckedCircle);
                    taskElement.classList.remove('checked-task');
                }
                else {
                    let data = fetchData.idToObj.get(id)['dataJSON']; 
                    data['completed'] = "true";
                    e.target.setAttribute('src', checkedCircle);
                    taskElement.classList.add('checked-task');
                }
            }
        })
    }
}

export default CompleteTask;