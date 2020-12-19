import React from 'react'

import coinsLogo from '../../images/coin.svg'

import './Points.scss'

export default function Points({points}) {
    return (
        <div className="points">
            <div>
            {points}
            <img src={coinsLogo} alt="coins"/>
            </div>
        </div>
    )
}
