import React from 'react';

const Row = p => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {p.left}
            </div>
            <div className="col-md-6">
                {p.right}
            </div>
        </div>
    )
}
export default Row;