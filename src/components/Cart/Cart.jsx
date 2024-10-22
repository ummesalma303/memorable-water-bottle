import './Cart.css'
function Cart({ cart,handleRemoveFromCrt }) {
    // console.log(cart);
    return (
        // <div className="cart-container">
        //     <h4>Cart: {cart.length}</h4>
        //     {
        //         cart.map((bottle, i) => <div key={i}>
        //             <img src={bottle.img}></img>
        //             <button onClick={()=>handleRemoveFromCrt(bottle.id)}>remove</button>
                    
        //         </div>)
        //     }
        // </div>

        <div>
        <h4>Cart: {cart.length}</h4>
        <div className="cart-container">
            {cart.map(bottle=> <div  key={bottle.id}>
                <img src={bottle.img}></img>
                <button onClick={() => handleRemoveFromCrt(bottle.id)}>Remove</button>
            </div>)}
        </div>
    </div>
    );
}

export default Cart;