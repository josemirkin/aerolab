import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { highestPrice, lowestPrice, mostRecent } from '../../store/actions/products.actions'

import './Filters.scss'

function Filters() {
    const dispatch = useDispatch();

    const [active, setActive] = useState('recent')

    const onClick = (type) => {
        switch (type) {
            case 'highest':
                dispatch(highestPrice())
                setActive(type)
                break
            case 'lowest':
                dispatch(lowestPrice())
                setActive(type)
                break
            case 'recent':
                dispatch(mostRecent())
                setActive(type)
                break
            // no default
        }
    }
    return (
        <div className="filter-container">
            <div className="font with-padding">Sort by:</div>
            <div onClick={() => onClick('recent')} className={`font filter${active === 'recent' ? ' active' : ''}`}>Most recent</div>
            <div onClick={() => onClick('lowest')} className={`font filter${active === 'lowest' ? ' active' : ''}`}>Lower price</div>
            <div onClick={() => onClick('highest')} className={`font filter${active === 'highest' ? ' active' : ''}`}>Highest price</div>
        </div>
    )
}

export default Filters
