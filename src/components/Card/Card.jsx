import { useContext } from "react";
import "./Card.css"
import { CartContext } from "../../CartContext.js";

function Card({ product }) {
    const { addToCart } = useContext(CartContext);
    return ( 
        <div className="card">
            <h3 className="product-title">{product.name}</h3>
            <img src={product.imgUrl} alt="" className="product-image" />
            <em className="product-description">{product.description}</em>
            <h3 className="product-price">{product.price}</h3>
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
        </div> );
}

export default Card;