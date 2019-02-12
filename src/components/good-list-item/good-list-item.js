import React, { Fragment } from 'react';
import './good-list-item.css';

const GoodListItem = ({itemData}) => {
    const { id, name } = itemData
    return (
        <Fragment>
            <span>{id}</span>
            <span>{name}</span>
        </Fragment>
    )
}

export default GoodListItem;