import React, { useState } from 'react';
import Store from '../../store/Store.js';

import './item-add-form.css';

const ItemAddForm = () => {
    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        Store.addItem(label);
        setLabel('');
    };

    return (
        <form className='bottom-panel d-flex' onSubmit={onSubmit}>
            <input
                type='text'
                className='form-control new-todo-label'
                value={label}
                onChange={onLabelChange}
                placeholder='What needs to be done?'
            />

            <button type='submit' className='btn btn-outline-secondary'>
                Add
            </button>
        </form>
    );
};

export default ItemAddForm;
