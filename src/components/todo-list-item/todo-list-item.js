import React from 'react';
import Store from '../../store/Store.js';
import './todo-list-item.css';

const TodoListItem = ({ id, important, done, label }) => {
    let classNames = 'todo-list-item';

    if (important) {
        classNames += ' important';
    }

    if (done) {
        classNames += ' done';
    }

    return (
        <span className={classNames}>
            <span className='todo-list-item-label' onClick={(e) => Store.toggleDone(id)}>
                {label}
            </span>

            <button
                type='button'
                className='btn btn-outline-success btn-sm float-right'
                onClick={() => Store.toggleImportant(id)}>
                <i className='fa fa-exclamation'></i>
            </button>

            <button
                type='button'
                className='btn btn-outline-danger btn-sm float-right'
                onClick={() => Store.deleteItem(id)}>
                <i className='fa fa-trash-o'></i>
            </button>
        </span>
    );
};

export default TodoListItem;
