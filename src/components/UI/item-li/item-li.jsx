import React from 'react';

const ItemLi = p => {
    
    return <li className="list-group-item" onClick={p.onClickHandler}>{p.name}</li>;
};

export default ItemLi