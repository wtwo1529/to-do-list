import checkedCircle from '../components/icons/checked-circle.svg';
import uncheckedCircle from '../components/icons/unchecked-circle.svg';

function clickCheckEvent(fetchData, taskElement) {
    taskElement.addEventListener('click', (e) => {
        let id = parseInt(taskElement.dataset.id);
        if (e.target.matches('.do-list-checkbox')) {
            if (e.target.src == checkedCircle) {
                fetchData.idToObj.get(id).completed = "false";
                let dataJSON = fetchData.idToObj.get(id).updateJson();
                localStorage.setItem(`${id}`, JSON.stringify(dataJSON));
                e.target.setAttribute('src', uncheckedCircle);
                taskElement.classList.remove('checked-task');
            }
            else {
                fetchData.idToObj.get(id).completed = "true";
                let dataJSON = fetchData.idToObj.get(id).updateJson();
                localStorage.setItem(`${id}`, JSON.stringify(dataJSON));
                e.target.setAttribute('src', checkedCircle);
                taskElement.classList.add('checked-task');
            }
        }
    })
}

export default clickCheckEvent;