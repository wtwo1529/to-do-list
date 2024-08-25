function createModal() {
    let modal = document.createElement('div')
    modal.id = 'modal';
    
    modal.innerHTML = `<form class="modal-form">
            <div class="modal-body">
                <div class="modal-field-container">
                    <input required id="task-name-input" type="text">
                </div>
                <div class="modal-field-container">
                    <input required id="date-input" type="datetime-local">
                </div>
                <div class="modal-field-container" id="priority-container">
                    <label>Priority</label>
                    <div class="priority-radio-container">
                        <input type="radio" name="priority" class="priority-radio" id="low-priority-radio" value="0">
                        <label for="low-priority-radio" class="priority-radio-label">Low</label>
                    </div>
                    
                    <div class="priority-radio-container">
                        <input type="radio" name="priority" class="priority-radio" id="medium-priority-radio" value="1">
                        <label for="medium-priority-radio" class="priority-radio-label">Medium</label>
                    </div>
                    <div class="priority-radio-container">
                        <input type="radio" name="priority" class="priority-radio" id="high-priority-radio" value="1">
                        <label for="high-priority-radio" class="priority-radio-label">High</label>
                    </div>                    
                </div>
            </div>
        </form>
        <div id="modal-btn-container">
            <button type="button" id="modal-submit">Submit</button>
        </div>`

    document.querySelector('body').appendChild(modal);
}

export default createModal;