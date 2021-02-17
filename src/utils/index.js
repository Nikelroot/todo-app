let maxId = 100;

const filterItems = (items = [], filter) => {
    switch (filter) {
        case 'all':
            return items;
        case 'active':
            return items.filter((item) => !item.done);
        case 'done':
            return items.filter((item) => item.done);
        default:
            return items;
    }
};

const searchItems = (items = [], search) => {
    if (search.length === 0) {
        return items;
    }
    const searchReg = new RegExp(search, 'gmi');
    return items.filter((item) => {
        const { label } = item;
        return searchReg.test(label);
    });
};

const createItem = (label) => {
    return {
        id: ++maxId,
        label,
        important: false,
        done: false
    };
};

const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
};

export { filterItems, searchItems, createItem, toggleProperty };
