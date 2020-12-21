import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import coinsLogo from '../../images/coin.svg'
import buyBlue from '../../images/buy-blue.svg'
import buyWhite from '../../images/buy-white.svg'

import UserService from '../../services/user.service'

import './Card.scss'
import { getUser } from '../../store/actions/user.actions'

function Card({ category, cost, id, img, name, userCoins }) {
    const enoughCoins = userCoins < cost

    const dispatch = useDispatch()
    const onClick = async () => {
        if (!enoughCoins) {
            try {
                const { data } = await UserService.redeemProduct({ productId: id })
                toast.success(data.message, {
                    position: 'bottom-center'
                })
                dispatch(getUser())
            } catch (error) {
                toast.error(error.response.data.error, {
                    position: 'bottom-center'
                })
            }
        } else {
            try {
                const { data } = await UserService.addCoins()
                toast.success(data.message, {
                    position: 'bottom-center'
                })
                dispatch(getUser())
            } catch (error) {
                toast.error(error.response.data.error, {
                    position: 'bottom-center'
                })
            }
        }
    }
    return (
        <div className="col">
            <div className="card">
                <div className={enoughCoins ? "buy-item-hover buy-coins-hover" : "buy-item-hover"}>
                    <div className="buy-menu">
                        <div className="d-flex justify-content-end">
                            <img src={buyWhite} alt="buy" className="buy-logo-white" />
                        </div>
                        <div className="buy-menu-coins">
                            {
                                enoughCoins ?
                                    <div>
                                        You need {cost - userCoins}
                                        <img src={coinsLogo} alt="coins" />
                                    </div>
                                    :
                                    <div>
                                        {cost}
                                        <img src={coinsLogo} alt="coins" />
                                    </div>
                            }
                        </div>
                        <button className="buy-menu-button" onClick={onClick}>{enoughCoins ? 'Get points' : 'Redeem now'}</button>
                    </div>
                </div>
                <div className="image-container">
                    <div className="d-flex justify-content-end icon-container">
                        {
                            enoughCoins ? <div className="need-coins"> you need {cost - userCoins} <img src={coinsLogo} alt="coins" /></div> : <img src={buyBlue} alt="buy" className="buy-logo buy-logo-disappear" />
                        }
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
