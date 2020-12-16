import React from 'react'

import Card from '../Card/Card'

function CardsGroup({products}) {
    return (
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
            {
                products.map(product => <Card
                                            category={product.category}
                                            cost={product.cost}
                                            id={product.id}
                                            img={product.img.hdUrl}
                                            name={product.name}
                                        />)
            }
        </div>
    )
}

export default CardsGroup
