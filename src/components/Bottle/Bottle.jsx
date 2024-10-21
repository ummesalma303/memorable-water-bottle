import './Bottle.css'
function Bottle({ bottle,handleAddedToCart }) {
    const { img, name, price } = bottle
    // console.log()
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Price:{price}</p>
            <button onClick={()=>handleAddedToCart(bottle)}>Purchase</button>
        </div>
    );
}

export default Bottle;