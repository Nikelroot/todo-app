import React from 'react';
import './app-header.css';
import Store from '../../store/Store';
import { observer } from 'mobx-react';

const AppHeader = () => {
    const { toDoCount, doneCount } = Store;
    return (
        <div className='app-header d-flex'>
            <h1>Todo List</h1>
            <h2>
                {toDoCount} more to do, {doneCount} done
            </h2>
        </div>
    );
};

export default observer(AppHeader);
