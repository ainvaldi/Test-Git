import React, { Fragment, useState, useEffect } from "react";
import CardDetails from "./CardDetailsView";
import { useParams } from 'react-router-dom';

const CardDetailsContainer = () => {

    let { idProduct } = useParams();
    console.log(idProduct);
    const [data, setData] = useState([]),
        [searchData, setSearchData] = useState(false),
        [openDialog, setOpenDialog] = useState(false),
        [quantity, setQuantity] = useState(1),
        [productsSaves, setProductsSaves] = useState([])


    useEffect(() => {
        getDetailsProduct()
    }, []);

    const getCart = async () => {
        const cart = localStorage.getItem('carrito') === null ? [] : JSON.parse(localStorage.getItem('carrito'));
        setProductsSaves(cart);
    };

    const openDialogPrimereact = () => {
        setSearchData(true)
        setOpenDialog(true)
    }

    const getDetailsProduct = () => {
        fetch(`https://fakestoreapi.com/products/${idProduct}`)
            .then(res => res.json())
            .then(json => setData(json))
    }

    const addToCart = async (data) => {
        await getCart()
        const productSave = {
            image: data.image,
            id: data.id,
            price: data.price,
            title: data.title,
            quantity: parseInt(quantity)
        }
        setProductsSaves(prevState => [...prevState, productSave]);
        localStorage.setItem('carrito', JSON.stringify(productsSaves))
    }

    return (
        <CardDetails
            data={data}
            openDialogPrimereact={openDialogPrimereact}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            addToCart={addToCart}
            quantity={quantity}
            setQuantity={setQuantity}
        />
    )
}

export default CardDetailsContainer