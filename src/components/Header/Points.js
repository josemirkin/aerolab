import React from 'react'

import coinsLogo from '../../images/coin.svg'

import './Points.scss'

export default function Points() {
    return (
        <div className="points">
            <p>2500
            <img src={coinsLogo} alt="coins"/>
            </p>
        </div>
    )
}
