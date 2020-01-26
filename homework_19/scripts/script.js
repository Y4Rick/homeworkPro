'use strict';

class ToDOList {
    constructor(text, done = false) {
        this._id = `f${(+new Date).toString(16)}`;
        this.text = text;
        this.done = done;
        this.status = 'active';
    }
}

const GLOBAL_MAP = {
    LIST_MAP_COLLECTOR: new Map(),
    LIST_MAP_COLLECTOR_HISTORY: new Map(),
}

const GLOBAL_LIST = {
    list: document.querySelector('.list'),
    listForm: document.forms.toDoListForm,
    listItemsBlock: document.querySelector('.list > .list__items'),
}

initData(GLOBAL_LIST, GLOBAL_MAP);

function initData(global_list, collector) {
    global_list.listForm.addEventListener('submit', event => {
        event.preventDefault();
        createToDoListItem(collector, global_list, event.target.elements.namedItem('toDoListInput').value);
        event.target.elements.namedItem('toDoListInput').value = '';
    });

    global_list.list.addEventListener('change', event => {
        if (event.target.closest('.list__item-checkbox-label')) {
            checkItem(collector, event.target.closest('.list__item'), event.target.checked);
        }
    });

    global_list.list.addEventListener('click', event => {
        if (event.target.closest('.list__item-button')) {
            deleteItem(collector, event.target.closest('.list__item'));
        }
    });
}

function createToDoListItem(collectorItems, list, value) {
    const toDoListItem = new ToDOList(value);
    collectorItems.LIST_MAP_COLLECTOR.set(toDoListItem._id, toDoListItem);
    collectorItems.LIST_MAP_COLLECTOR_HISTORY.set(toDoListItem._id, toDoListItem);
    createDOMListElement(list, toDoListItem);
}

function createDOMListElement(list, item) {
    let frag = document.createDocumentFragment();

    let listItem = document.createElement('div');
    listItem.classList.add('list__item');
    listItem.setAttribute('data-id', `${item._id}`);
    
    let listItemCheckboxLabel = document.createElement('label');
    listItemCheckboxLabel.classList.add('list__item-checkbox-label');

    let listItemCheckbox = document.createElement('input');
    listItemCheckbox.classList.add('list__item-checkbox');
    listItemCheckbox.setAttribute('type', 'checkbox');

    let listItemCheckboxMark = document.createElement('span');
    listItemCheckboxMark.classList.add('list__item-checkbox-mark');
    listItemCheckboxMark.innerHTML = '&#10004;';
    
    listItemCheckboxLabel.append(listItemCheckbox);
    listItemCheckboxLabel.append(listItemCheckboxMark);

    let listItemText = document.createElement('p');
    listItemText.classList.add('list__item-text');
    listItemText.innerHTML = `${item.text}`;

    let listItemButtont = document.createElement('button');
    listItemButtont.classList.add('list__item-button');
    listItemButtont.setAttribute('type', 'button');
    listItemButtont.innerHTML = `&times;`;

    listItem.append(listItemCheckboxLabel);
    listItem.append(listItemText);
    listItem.append(listItemButtont);

    frag.append(listItem);

    list.listItemsBlock.append(frag);
}

function checkItem(collectorItems, item, value) {
    let textItem = item.querySelector('.list__item-text');
    let keyItem = item.getAttribute('data-id');
    let toDoItem = collectorItems.LIST_MAP_COLLECTOR.get(keyItem);
        toDoItem.done = value;

    if (value) {
        textItem.classList.add('list__item-text-done');
    } else if (!value) {
        textItem.classList.remove('list__item-text-done');
    }    
}

function deleteItem(collectorItems, item) {
    item.remove();

    let keyItem = item.getAttribute('data-id');
    let toDoItem = collectorItems.LIST_MAP_COLLECTOR.get(keyItem);
        toDoItem.status = 'removed';

    collectorItems.LIST_MAP_COLLECTOR.delete(keyItem);
}