import React from 'react';
import Store from '../../store/Store.js';
import { observer } from 'mobx-react';
import './search-panel.css';

const SearchPanel = () => {
    const search = Store.search;

    const onTermChange = (e) => {
        const { value } = e.target;
        Store.setSearch(value);
    };

    return (
        <input
            type='text'
            className='form-control search-input'
            placeholder='type to search'
            value={search}
            onChange={onTermChange}
        />
    );
};

export default observer(SearchPanel);
