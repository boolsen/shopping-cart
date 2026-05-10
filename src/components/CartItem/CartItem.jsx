import "./CartItem.css";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

function CartItem({ cartItem }) {
    const { incrementCartQuantity, decrementCartQuantity } = useContext(CartContext);
    return ( 
        <div className="cart-item">
            <span className="product-name">{cartItem.name}</span>
            <span className="count">{cartItem.quantity}</span>
            <div className="change-quantity">
                <button className="increment" onClick={() => {incrementCartQuantity(cartItem.id)}}>+</button>
                <button className="decrement" onClick={() => {decrementCartQuantity(cartItem.id)}}>-</button>
            </div>
            <span className="product-price">{cartItem.price}</span>
        </div>
     );
}

export default CartItem;