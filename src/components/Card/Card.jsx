import "./Card.css"

function Card({ product }) {
    return ( 
        <div className="card">
            <h3 className="product-title">{product.name}</h3>
            <img src={product.imgUrl} alt="" className="product-image" />
            <em className="product-description">{product.description}</em>
            <h3 className="product-price">{product.price}</h3>
            <button className="add-to-cart">Add to cart</button>
        </div> );
}

export default Card;