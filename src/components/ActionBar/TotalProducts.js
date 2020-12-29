import React from 'react'
import {useSelector} from 'react-redux'

import './TotalProducts.scss'

function TotalProducts() {
    const {totalItems, products, page} = useSelector(state => state.stateProducts)
    return (
        <div className="total-products">
            {products.length * page} of {totalItems} products
        </div>
    )
}

export default TotalProducts
