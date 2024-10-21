import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
function Bottles() {
    const [bottles, setBottles] = useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
        .then(data=>setBottles(data))
    }, [])
    
    const handleAddedToCart = (bottle) => {
        const newBottles=[...cart,bottle]
        setCart(newBottles)
    }
    return (
        <>
            <h2>Bottles Available: {bottles.length}</h2> 
            <h4>Cart: { cart.length}</h4>
        <div className="bottles-container">
            {
                bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle} handleAddedToCart={handleAddedToCart}></Bottle>)
            }
            
        </div>
        </>
    );
}

export default Bottles;