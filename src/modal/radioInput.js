class RadioInput {
    constructor(radioInputs) {
        this.radioInputs = radioInputs;
        this.init();
    }
    init() {
        this.radioInputs.forEach((radioInput) => {
            radioInput.addEventListener('click', () => this.removeCheck(radioInput));
        })  
    }
    // removeCheck() {
    //     this.checkedRadios.forEach((checkedRadio) => {
    //         checkedRadio.addEventListener(('click', () => {
    //             checkedRadio.checked = false;
    //         }))
    //     }) 
    // }
    addCheck(radioInput) {
        
    }
    removeCheck(radioInput) {
        // if (radioInput.checked) {
        //     radioInput.checked = false;
        // }
    }
}

export default RadioInput;