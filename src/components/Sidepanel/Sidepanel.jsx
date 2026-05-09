import "./Sidepanel.css";

function Sidepanel({productCategories, setSelectedCategory}) {
    return ( 
        <div className="sidepanel">
            <div className="categories">
                {
                    productCategories?.map((category) => {
                        return (
                            <a 
                                className="category" 
                                href="#" 
                                key={category} 
                                onClick={(e) => {
                                    e.preventDefault(); // Stops the page from jumping/reloading
                                    setSelectedCategory(category); 
                                }}
                            >
                                {category}
                            </a>
                        );
                    })
                }
            </div>
            <div className="navigation-links">
                <a href="#" >My page</a>
                <a href="#" >Help</a>
            </div>
        </div>
     );
}

export default Sidepanel;