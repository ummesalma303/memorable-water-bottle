import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoreCart, removeLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";
function Bottles() {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
        .then(data=>setBottles(data))
    }, [])

    useEffect(() => {
       
       if (bottles.length) {
           const getCart = getStoreCart();
           const saveBottles=[]
           for (const id of getCart) {
               const bottle = bottles.find(bottle => bottle.id === id );
                saveBottles.push(bottle)
           }
         setCart(saveBottles)
        
       }
       
},[bottles])

    
    const handleRemoveFromCrt = id => {
        const remainigCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainigCart)
        removeLS(id)
    }
    
    
    const handleAddedToCart = (bottle) => {
        const newBottles=[...cart,bottle]
        setCart(newBottles)
        addToLs(bottle.id)
    }
    return (
        <>
            <h2>Bottles Available: {bottles.length}</h2> 
            <Cart cart={cart} handleRemoveFromCrt={handleRemoveFromCrt}></Cart>
        <div className="bottles-container">
            {
                bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle} handleAddedToCart={handleAddedToCart}></Bottle>)
            }
            
        </div>
        </>
    );
}

export default Bottles;