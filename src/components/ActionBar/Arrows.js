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
            {page === 1 ? null : <img className="arrow" src={leftArrow} alt="<" onClick={() => clickHandler('PREV')}/> }
            {page === totalPages ? null : <img className="arrow" src={rightArrow} alt=">" onClick={() => clickHandler('NEXT')}/>}
        </div>
    )
}

export default Arrows
