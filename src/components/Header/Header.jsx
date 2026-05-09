import "./Header.css";
import shoppingCartLogo from "../../../assets/Shopping-Cart--Streamline-Outlined-Streamline-Material.png";

function Header({cartItems}) {
    const totalItems = cartItems?.reduce((acc, item) => acc + item.quantity, 0);

    return ( <div className="header">
        <h1 className="logo">Shopalulu</h1>
        <div 
            className="shopping-nav"
            data-count={totalItems} 
            data-show-badge={totalItems > 0}
        >
            <img src={shoppingCartLogo} className="shopping-cart"></img>
        </div>
    </div> );
}

export default Header;