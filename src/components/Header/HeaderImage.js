import React from 'react'

import headerImg from '../../images/header.png'

import './HeaderImage.scss'

function HeaderImage() {
    return (
        <div className="header-image">
            <img src={headerImg} alt="headerimg" className="image"/>
            <div className="category">Electronics</div>
        </div>
    )
}

export default HeaderImage
