import "./Header.css";
import shoppingCartLogo from "../../../assets/Shopping-Cart--Streamline-Outlined-Streamline-Material.png";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx"
import { useState } from "react";

function Header({cartItems}) {
    const totalItems = cartItems?.reduce((acc, item) => acc + item.quantity, 0);
    const [ cartOpen, setCartOpen ] = useState(false);

    function toggleOpenCartState() {
        setCartOpen((prev) => {
            return !prev;
        })
    }

    return ( <div className="header">
        <h1 className="logo">Shopalulu</h1>
        <div 
            className="shopping-nav"
            data-count={totalItems} 
            data-show-badge={totalItems > 0}
            onClick={() => toggleOpenCartState()}
        >
            <img src={shoppingCartLogo} className="shopping-cart"></img>
            { cartOpen && <ShoppingCart inCartItems={cartItems}/> }
        </div>
    </div> );
}

export default Header;