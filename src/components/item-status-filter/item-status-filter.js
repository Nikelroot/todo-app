import React from 'react';
import Store from '../../store/Store';
import { observer } from 'mobx-react';

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

const ItemStatusFilter = () => {
    const { filter } = Store;
    const buttons = filterButtons.map(({ name, label }) => {
        const isActive = name === filter;
        const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
        return (
            <button
                key={name}
                type='button'
                onClick={() => {
                    Store.setFilter(name);
                }}
                className={classNames}>
                {label}
            </button>
        );
    });

    return <div className='btn-group'>{buttons}</div>;
};

export default observer(ItemStatusFilter);
