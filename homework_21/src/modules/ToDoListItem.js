export default class ToDOListItem {
    constructor(text, done = false) {
        this._id = `f${(+new Date).toString(16)}`;
        this.text = text;
        this.done = done;
        this.status = 'active';
    }

    checkItem(value) {
        this.done = value;   
    }
    
    changeStatus(status) {
        this.status = status;
    }
}