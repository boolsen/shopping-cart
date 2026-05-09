import Card from "../Card/Card.jsx"
import "./Content.css"

function Content({ products, selectedCategory }) {

    if (!products) {
        return <div className="loading">Loading products...</div>;
    }
    
    return (
        <div className="products">
            {
                products?.map((product) => {
                    return <Card key={product.name} product={product}/>
                })
            }
        </div>
    );
}

export default Content;