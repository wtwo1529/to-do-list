import { default as ParseJson } from './parseJson';
import { default as FetchData } from './fetchFormJson'; 

class LoadStoreData {
    constructor(toDoList) {
        this.fetchData = new FetchData;
        this.toDoList = toDoList;
        this.init();
    }
    init() {
        this.fetchData.sortedData.forEach((data) => {
            ParseJson.loadIntoDom(this.toDoList, data);
        })
    }
}

export default LoadStoreData;