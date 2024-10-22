const getStoreCart = () => {
    const storingCart = localStorage.getItem('cart');
    if (storingCart) {
        
        return JSON.parse(storingCart) 
    }
    return []
}

const saveToLs = cart => {
    const cartStringify= JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}
const addToLs = id => {
    const cart = getStoreCart();
    cart.push(id);
    saveToLs(cart)
}

const removeLS = id => {
    const cart = getStoreCart();
    const remaining = cart.filter(idx => idx !== id);
    saveToLs(remaining)
}

export {addToLs,getStoreCart,removeLS}
