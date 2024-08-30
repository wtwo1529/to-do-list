class StoreData {
    constructor() {
        this.keys = localStorage.getItem('keys') ?? 0;
    }
    addToLocal(formDataJSON) {
        formDataJSON['key'] = this.keys;
        let data = JSON.stringify(formDataJSON);
        localStorage.setItem(`${this.keys}`, data)
        this.keys++;
        localStorage.setItem('keys', this.keys);
    }
}

export default StoreData;