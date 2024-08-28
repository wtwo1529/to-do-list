class StoreData {
    constructor() {
        this.keys = JSON.parse(localStorage.getItem('keys')) ?? new Array();
    }
    addToLocal(formDataJSON) {
        let data = JSON.stringify(formDataJSON);
        localStorage.setItem(`${this.keys.length}`, data)
        this.keys.push(this.keys.length);
    }
}

export default StoreData;