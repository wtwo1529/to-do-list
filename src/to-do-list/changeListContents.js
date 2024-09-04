import { default as LoadStoreData } from '../dataHandling/loadStoreData';

class ChangeListContents {
    constructor(FetchData, toDoList, todayBtns, pageHeader, upcomingBtns, allTasksBtns) {
        this.loadStoreData = new LoadStoreData(FetchData, toDoList)
        this.todayBtns = todayBtns;
        this.pageHeader = pageHeader;
        this.upcomingBtns = upcomingBtns;
        this.allTasksBtns = allTasksBtns;
        this.init();
    }
    init() {
        let today = new Date();
        this.setRenderTasksOfDate(this.todayBtns, today, "Today");
        this.setRenderTasksOverDate(this.upcomingBtns, today, "Upcoming");
        this.setRenderAllTasks(this.allTasksBtns);
        this.renderDefault();
    }
    renderDefault() {
        let today = new Date();
        this.loadStoreData.loadTasksOfDate(today);
    }
    setRenderTasksOfDate(btns, date, headerText=false) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (headerText) {
                    this.pageHeader.textContent = `${headerText}` 
                }
                this.loadStoreData.loadTasksOfDate(date);        
            })
        })
    }
    setRenderTasksOverDate(btns, date, headerText=false) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (headerText) {
                    this.pageHeader.textContent = `${headerText}`;
                }
                this.loadStoreData.loadTasksOverDate(date);        
            })
        })
    }
    setRenderAllTasks(btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.pageHeader.textContent = "All Tasks";
                this.loadStoreData.loadAllTasks(); 
            })
        })
    }
}

export default ChangeListContents;