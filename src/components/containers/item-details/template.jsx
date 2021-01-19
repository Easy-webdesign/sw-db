import React from 'react';
import './index.scss';

const ItemTemp = p => {
    const item = p;
    return(
        <div className="person-details card">
            <img className="person-image" src={p.img} alt='img'/>

            <div className="card-body">
            <h4>{p.name}</h4>
            <ul className="list-group list-group-flush">
                {React.Children.map(item.children, child => {
                    return React.cloneElement(child, {item})
                })}
            </ul>
            </div>
        </div>
    );
};

export default ItemTemp