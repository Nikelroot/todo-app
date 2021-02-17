import { makeAutoObservable } from 'mobx';
import { filterItems, searchItems, createItem, toggleProperty } from '../utils';

class Store {
    items = [
        { id: 1, label: 'Drink Coffee', important: false, done: false },
        { id: 2, label: 'Task 2', important: true, done: false },
        { id: 3, label: 'Task 3', important: false, done: true }
    ];

    filter = 'all';
    search = '';

    constructor() {
        makeAutoObservable(this);
    }

    setFilter = (value = '') => {
        this.filter = value;
    };

    setSearch = (value = 'all') => {
        this.search = value;
    };

    toggleDone = (i) => {
        this.items = toggleProperty(this.items, i, 'done');
    };

    toggleImportant = (i) => {
        this.items = toggleProperty(this.items, i, 'important');
    };

    addItem = (label) => {
        const item = createItem(label);
        this.items = [...this.items, item];
    };

    deleteItem = (i) => {
        this.items = this.items.reduce((acc, item) => {
            const { id } = item;
            return i === id ? acc : [...acc, item];
        }, []);
    };

    get doneCount() {
        return this.items.filter((item) => item.done).length;
    }

    get toDoCount() {
        return this.items.length - this.doneCount;
    }

    get visibleItems() {
        console.log('1');
        return searchItems(filterItems(this.items, this.filter), this.search);
    }
}

const store = new Store();

export default store;
