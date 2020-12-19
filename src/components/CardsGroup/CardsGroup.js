import React from 'react'

import Card from '../Card/Card'

function CardsGroup({products, user}) {
    return (
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
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
