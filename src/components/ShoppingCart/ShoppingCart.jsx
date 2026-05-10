import "./ShoppingCart.css"
import CartItem from "../CartItem/CartItem.jsx"

function ShoppingCart({ inCartItems }) {
    const total = 8; // update calculation

    const numbers = [10, 20, 30, 40];

    const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0); // 0 is the starting value

    const totalPrice = inCartItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0).toFixed(2);
    return (
        <div className="shopping-cart-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="shopping-cart-header">Your items</h3>
            <div className="cart-items">
                {
                    inCartItems.map((cartItem) => {
                        return <CartItem key={cartItem.id} cartItem={cartItem} />
                    })
                }
                <div className="total-price-checkout">
                    <span className="total-price">{totalPrice}</span>
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        </div>
     );
}

export default ShoppingCart;