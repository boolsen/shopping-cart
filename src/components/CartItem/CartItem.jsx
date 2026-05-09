function CartItem({ cartItem }) {
    return ( 
        <div className="cart-item">
            <span className="product-name">{product.name}</span>
            <span className="count"></span>
            <div className="change-quantity">
                <button className="increment">+</button>
                <button className="decrement">-</button>
            </div>
            <span className="product-price">{product.price}</span>
        </div>
     );
}

export default CartItem;