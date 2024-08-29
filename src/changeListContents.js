import { default as LoadStoreData } from './loadStoreData';

class ChangeListContents {
    constructor(toDoList, todayBtns, upcomingBtns) {
        this.loadStoreData = new LoadStoreData(toDoList) 
        this.todayBtns = todayBtns;
        this.upcomingBtns = upcomingBtns;
        this.init();
    }
    init() {
        this.loadToday(this.todayBtns);
        this.loadUpcoming(this.upcomingBtns);
    }
    loadDefault() {
        this.loadStoreData.loadTasksOfDate(new Date);        
    }
    loadToday(btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.loadStoreData.loadTasksOfDate(new Date);        
            })
        });
    }
    loadUpcoming(btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.loadStoreData.loadTasksGreaterThanData(new Date);        
            })
        })
    }
}

export default ChangeListContents;