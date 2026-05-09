import "./ShoppingCart.css"
import CartItem from "../CartItem.jsx"

function ShoppingCart({ inCartItems }) {
    const total = 8; // update calculation
    return (
        <div className="shopping-cart">
            <h3 className="shopping-cart">Your items</h3>
            <span className="total-price"></span>
            {
                inCartItems.map((cartItem) => {
                <CartItem cartItem={cartItem} />
                })
            }
            <button className="checkout">Checkout</button>
        </div>
     );
}

export default ShoppingCart;