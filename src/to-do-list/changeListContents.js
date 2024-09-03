import { default as LoadStoreData } from '../dataHandling/loadStoreData';

class ChangeListContents {
    constructor(FetchData, toDoList, todayBtns, pageHeader, upcomingBtns) {
        this.fetchData = FetchData;
        this.toDoList = toDoList;
        this.todayBtns = todayBtns;
        this.pageHeader = pageHeader;
        this.upcomingBtns = upcomingBtns;
        this.init();
    }
    init() {
        this.loadToday(this.fetchData, this.toDoList, this.todayBtns);
        this.loadUpcoming(this.fetchData, this.toDoList, this.upcomingBtns);
        this.loadDefault();
    }
    loadDefault() {
        this.pageHeader.textContent = 'Today';
        LoadStoreData.loadTasksOfDate(this.fetchData, this.toDoList, new Date);        
    }
    loadToday(fetchData, toDoList, btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.pageHeader.textContent = 'Today';
                LoadStoreData.loadTasksOfDate(fetchData, toDoList, new Date);        
            })
        });
    }
    loadUpcoming(fetchData, toDoList, btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.pageHeader.textContent = 'Upcoming';
                LoadStoreData.loadTasksGreaterThanData(fetchData, toDoList, new Date);        
            })
        })
    }
}

export default ChangeListContents;