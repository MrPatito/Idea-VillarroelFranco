import React from 'react';

function quePasa(e) {
        e.preventDefault();
        console.log('carrito de compras')
}

const CartWidget = () => {
        return (
                <div>
                        <button onClick={quePasa} className='btn btn-primary'><img src="Multimedia/icons8-checkout-64.png" alt="Servicios" /></button>
                </div>

        );

}
export default CartWidget;
