import React from 'react';

const Record = p => {
    // console.log(p);
    return(
        <li className="list-group-item">
            <span className="term">{p.label}:</span>
            <span>{p.item[p.field]}</span>
        </li>
    );
};

export default Record