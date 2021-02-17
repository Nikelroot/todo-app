import React from 'react';
import Store from '../../store/Store.js';
import TodoListItem from '../todo-list-item/todo-list-item';
import { observer } from 'mobx-react';

import './todo-list.css';

const TodoList = () => {
    const { visibleItems } = Store;
    const elements = visibleItems.map((item) => {
        const { id } = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem {...item} />
            </li>
        );
    });

    return <ul className='todo-list list-group'>{elements}</ul>;
};

export default observer(TodoList);
