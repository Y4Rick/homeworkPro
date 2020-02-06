import ListItem from './ToDoListItem';

export class ListStorage {
    constructor() {
        this.listMapCollector = new Map();
        this.listMapCollectorHistory = new Map();
    }

    createToDoListItem(text) {
        const toDoListItem = new ListItem(text);
        this.listMapCollector.set(toDoListItem._id, toDoListItem);
        this.listMapCollectorHistory.set(toDoListItem._id, toDoListItem);
    }

    chechToDoListItem(id, value) {
        this.listMapCollector.get(id).checkItem(value);                
    }

    deleteToDoListItem(id) {
        this.listMapCollector.get(id).changeStatus('removed');
        this.listMapCollector.delete(id);
    }
}