import React, { Fragment } from "react";
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Dialog } from 'primereact/dialog'

const CardDetails = ({ data, openDialogPrimereact, openDialog, setOpenDialog, addToCart, quantity, setQuantity }) => {
    return (
        <Fragment>
            <Button onClick={() => openDialogPrimereact()} label='Ver detalles del producto' />
            <Dialog
                visible={openDialog}
                style={{ width: '70%', backgroundColor: 'gray' }}
                onHide={() => setOpenDialog(false)}
            >
                <img src={data.image}></img>
                <h1>{data.category}</h1>
                <h1>{data.price}</h1>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} ></input>
                <Button label="Agregar al carrito" onClick={() => addToCart(data)}></Button>
            </Dialog>
        </Fragment>
    )
}

export default CardDetails