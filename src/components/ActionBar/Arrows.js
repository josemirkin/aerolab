import React from 'react'

import leftArrow from '../../images/arrow-left.svg'
import rightArrow from '../../images/arrow-right.svg'

import './Arrows.scss'

function Arrows() {
    return (
        <div className="arrows">
            <img className="arrow" src={leftArrow} alt="<" />
            <img className="arrow" src={rightArrow} alt=">" />
        </div>
    )
}

export default Arrows
