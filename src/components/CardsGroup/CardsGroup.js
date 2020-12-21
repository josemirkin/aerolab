import React from 'react'

import Card from '../Card/Card'

import './CardsGroup.scss'

function CardsGroup({products, user}) {
    return (
        <div className="row cards-group">
            {
                products.map((product, i) => <Card
                                            category={product.category}
                                            cost={product.cost}
                                            id={product._id}
                                            img={product.img.hdUrl}
                                            key={i}
                                            name={product.name}
                                            userCoins={user.points}
                                        />
                )
            }
        </div>
    )
}

export default CardsGroup
