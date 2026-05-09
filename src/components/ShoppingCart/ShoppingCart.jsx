import "./ShoppingCart.css"
import CartItem from "../CartItem.jsx"

function ShoppingCart() {
    const total = 8; // update calculation
    return (
        <div className="shopping-cart">
            <h3 className="shopping-cart">Your items</h3>
            <span className="total-price"></span>
            <CartItem />
            <button className="checkout">Checkout</button>
        </div>
     );
}

export default ShoppingCart;