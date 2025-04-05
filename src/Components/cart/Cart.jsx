import React from 'react';

const Cart = ({ cart, handleRemoveCart }) => {
    return (
        <div className='flex gap-4 my-6'>
            {
                cart.map(bottle =>
                    < div key={bottle.id} className='flex' >
                        <img className='w-20' src={bottle.img} alt="" />
                        <button onClick={() => handleRemoveCart(bottle.id)}>x</button>
                    </div>
                )
            }
        </div >
    );
};

export default Cart;