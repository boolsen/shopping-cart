import { Link } from "react-router";

function Sidepanel({productCategories}) {
    return ( 
        <div className="sidepanel">
            {
                productCategories.map((category) => {
                    return <a className="category" key={crypto.randomUUID()}>{category}</a>
                })
            }
        </div>
     );
}

export default Sidepanel;