import { ListStorage } from './ListStorage';

export class ListController {
    constructor(container) {
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);

        this.listState = new ListStorage();
        this.container = container; 
        this.initDOMElements();
        this.subscribeForEvents();
    }

    initDOMElements() {        
        this.list = this.container.querySelector('.list'),
        this.listForm = this.container.getElementsByTagName('form').toDoListForm;
    }

    subscribeForEvents() {
        this.list.addEventListener('change', this.handleCheckboxChange);
        this.list.addEventListener('click', this.handleClickButton);
        this.listForm.addEventListener('submit', this.handleSubmitForm);
    }

    handleSubmitForm(event) {
        event.preventDefault();
        if (event.target.elements.namedItem('toDoListInput').value.trim().length != 0) {
            this.listState.createToDoListItem(event.target.elements.namedItem('toDoListInput').value);            
            this.renderItems();
            event.target.elements.namedItem('toDoListInput').value = '';
        }
    }

    handleCheckboxChange(event) {
        if (event.target.closest('.list__item-checkbox-label')) {
            this.listState.chechToDoListItem(event.target.closest('.list__item').getAttribute('data-id'), event.target.checked);
            this.renderItems();
        }
    }

    handleClickButton(event) {
        if (event.target.closest('.list__item-button')) {
            this.listState.deleteToDoListItem(event.target.closest('.list__item').getAttribute('data-id'));
            event.target.closest('.list__item-button').remove();
            this.renderItems();
        }
    }

    renderItems() {
        let listItems = '';
        if (this.list.querySelector('.list__items')) {
            listItems = this.list.querySelector('.list__items');
            listItems.innerHTML = '';
        } else {
            listItems = document.createElement('div');
            listItems.classList.add('list__items');
        }

        let frag = document.createDocumentFragment();
        this.listState.listMapCollector.forEach(item => {
            let div = this.createListItem(item);
            frag.append(div);
        });

        listItems.append(frag);
        this.list.append(listItems);
    }

    createListItem(item) {
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

        if (item.done) {
            listItemCheckbox.setAttribute('checked', 'checked');
            listItemText.classList.add('list__item-text-done');
        }

        listItem.append(listItemCheckboxLabel);
        listItem.append(listItemText);
        listItem.append(listItemButtont);

        return listItem;
    }

    destroy() {
        this.list.removeEventListener('change', this.handleCheckboxChange);
        this.list.removeEventListener('click', this.handleClickButton);
        this.listForm.removeEventListener('submit', this.handleSubmitForm);
    }
}