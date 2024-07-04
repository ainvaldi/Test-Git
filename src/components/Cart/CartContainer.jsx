import React, { Fragment, useState, useEffect } from "react";
import Cart from "./CartView";

const CartContainer = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        getProductCart()
    }, []);

    const getProductCart = () => {
        setData(JSON.parse(localStorage.getItem('carrito')))
    }

    // const addToCart = (data) => {
    //     console.log(data)
    //     const productSave = {
    //         image: data.image,
    //         id: data.id,
    //         price: data.price,
    //         title: data.title,
    //     }
    //     localStorage.setItem('carrito', JSON.stringify(productSave))
    // }

    return (
        <Cart
            data={data}
        />
    )
}

export default CartContainer