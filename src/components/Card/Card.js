import React from 'react'

import coinsLogo from '../../images/coin.svg'
import buyBlue from '../../images/buy-blue.svg'
import buyWhite from '../../images/buy-white.svg'

import './Card.scss'

function Card({ category, cost, id, img, name }) {
    return (
        <div className="col">
            <div className="card">
                {/*<div className="buy-item-hover">
                    <div className="buy-menu">
                        <div className="buy-menu coins">
                            {cost}
                            <img src={coinsLogo} alt="coins" />
                        </div>
                        <div className="buy-menu button">Redeem now</div>
                    </div>
                </div>
                <div className="buy-coins-hover">
                    <div className="buy-menu">
                        <div className="buy-menu coins">
                            you need 1.700
                                <img src={coinsLogo} alt="coins" />
                        </div>
                        <div className="buy-menu button">Get coins</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                        <img src={buyWhite} alt="buy" className="buy-logo" />
                    </div>*/}
                <div className="image-container">
                    <div className="d-flex justify-content-end">
                        <img src={buyBlue} alt="buy" className="buy-logo buy-logo-disappear" />
                    </div>
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <p className="card-text">{category}</p>
                    <div className="card-title d-flex">
                        {name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
