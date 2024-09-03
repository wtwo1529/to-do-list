import checkedCircle from '../components/icons/checked-circle.svg';
import uncheckedCircle from '../components/icons/unchecked-circle.svg';

class CompleteTask {
    static clickCheck(taskElement) {
        taskElement.addEventListener('click', (e) => {
            if (e.target.matches('.do-list-checkbox')) {
                if (e.target.src == checkedCircle) {
                    e.target.setAttribute('src', uncheckedCircle);
                    taskElement.classList.remove('checked-task');
                }
                else {
                    e.target.setAttribute('src', checkedCircle);
                    taskElement.classList.add('checked-task');
                }
            }
        })
    }
}

export default CompleteTask;