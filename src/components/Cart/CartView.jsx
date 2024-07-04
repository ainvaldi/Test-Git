import React, { Fragment } from "react";
import { Card } from 'primereact/card'

const Cart = ({ data }) => {
    return (
        <Fragment>
            <Card>
                <img src={data.image} style={{ width: '10%', height: '10%' }}></img>
                <h3>{data.title}</h3>
                <h3>{data.price}</h3>
            </Card>
        </Fragment>
    )
}

export default Cart