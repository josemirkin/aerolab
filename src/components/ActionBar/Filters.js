import React from 'react'

import './Filters.scss'

function Filters() {
    return (
        <div className="d-flex">
            <div className="font">Sort by:</div>
            <div className="font filter active">Most recent</div>
            <div className="font filter">Lower price</div>
            <div className="font filter">Highest price</div>
        </div>
    )
}

export default Filters
