import React from 'react';
import './bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    console.log(bottle)
    const { img, name, price, stock } = bottle;
    return (
        <div className='bottle border-2 border-teal-400 rounded-3xl p-8 mb-6'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <p>Available : {stock} remaining </p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;