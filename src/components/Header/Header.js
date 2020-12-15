import React from 'react'

import User from './User'
import Points from './Points'
import HeaderImage from './HeaderImage'

import logo from '../../images/aerolab-logo.svg'

import './Header.scss'

function Header() {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="logo" className="logo"/>
                <div className="d-flex user-info">
                    <User />
                    <Points />
                </div>
            </div>
            <HeaderImage />
        </div>
    )
}

export default Header;
