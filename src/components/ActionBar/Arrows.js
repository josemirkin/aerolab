import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import leftArrow from '../../images/arrow-left.svg'
import rightArrow from '../../images/arrow-right.svg'

import {pageChange} from '../../store/actions/products.actions'

import './Arrows.scss'

function Arrows() {
    const dispatch = useDispatch()
    const {page, totalPages} = useSelector(state => state.stateProducts)
    const clickHandler = (type) => {
        dispatch(pageChange(type))
    }
    return (
        <div className="arrows">
            <img src={leftArrow} alt="<" onClick={() => clickHandler('PREV')} className={page === 1 ? "arrow-hide" : "arrow"}/>
            <img src={rightArrow} alt=">" onClick={() => clickHandler('NEXT')} className={page === totalPages ? "arrow-hide" : "arrow"} />
        </div>
    )
}

export default Arrows
