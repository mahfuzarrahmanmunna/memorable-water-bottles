import React, { use, useEffect, useState } from 'react';
import Bottle from './Bottle';
import './bottles.css'
import { addItemToCartLocalStorage, getCartFromLocalStorage, } from '../utilities/localStorage';

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise);

    useEffect(() => {
        const storedCartIds = getCartFromLocalStorage()
        // console.log(storedCartIds)
        const storedCart = []
        storedCartIds.forEach(id => {
            const cartBottle = bottles.find(bottle => bottle.id === id)
            if (cartBottle) {
                storedCart.push(cart)
            }
        });

        setCart(storedCart)
    }, [bottles])


    const handleAddToCart = (bottle) => {
        // console.log('bottle will be added', bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)

        // save to the local storage
        addItemToCartLocalStorage(bottle.id)
    }

    // console.log(bottles)
    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p>Added to cart : {cart.length}</p>
            <div className='lg:grid lg:grid-cols-3 gap-5'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;