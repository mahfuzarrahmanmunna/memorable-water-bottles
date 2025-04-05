import React, { use, useState } from 'react';
import Bottle from './Bottle';
import './bottles.css'
import { addItemToCartLocalStorage, getCartFromLocalStorage, removeFromLocalStorage, } from '../utilities/localStorage';
import Cart from './cart/Cart';

const Bottles = ({ bottlesPromise }) => {

    const storedCart = getCartFromLocalStorage()
    const [cart, setCart] = useState([...storedCart])

    const bottles = use(bottlesPromise);

    // useEffect(() => {
    //     const storedCartIds = getCartFromLocalStorage()
    //     // console.log(storedCartIds)
    //     const storedCart = []
    //     storedCartIds.forEach(id => {
    //         const cartBottle = bottles.find(bottle => bottle.id === id)
    //         if (cartBottle) {
    //             storedCart.push(cart)
    //         }
    //     });

    //     setCart(storedCart)
    // }, [bottles])


    const handleAddToCart = (bottle) => {
        console.log('bottle will be added', bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)

        // save to the local storage
        addItemToCartLocalStorage(bottle.id)
    }

    const handleRemoveCart = id => {
        console.log('remove item from the cart', id)
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLocalStorage(id)
    }

    // console.log(bottles)
    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p>Added to cart : {cart.length}</p>
            <Cart handleRemoveCart={handleRemoveCart} cart={cart} />
            <div className='lg:grid lg:grid-cols-3 gap-5'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;