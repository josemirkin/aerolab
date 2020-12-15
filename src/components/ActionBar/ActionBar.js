import React from 'react'

import Arrows from './Arrows'
import Filters from './Filters'
import TotalProducts from './TotalProducts'

import './ActionBar.scss'

function ActionBar() {
    return (
        <div className="action-bar d-flex">
            <TotalProducts />
            <div className="test">
                <Filters />
                <Arrows />
            </div>
        </div>
    )
}

export default ActionBar
