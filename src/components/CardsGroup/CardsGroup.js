import React from 'react'

import Card from '../Card/Card'

function CardsGroup() {
    return (
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardsGroup
