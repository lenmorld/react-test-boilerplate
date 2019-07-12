import React from 'react';

const List = (props) => {
    const { items } = props;

    return (
        <ul className="list">
            {
                items.map(item => 
                <li className="item" key={item.id}>
                    {item.name}
                </li>)
            }
        </ul>
    )
};

export default List;