import "./Header.css";
import shoppingCartLogo from "../../../assets/Shopping-Cart--Streamline-Outlined-Streamline-Material.png";

function Header() {
    return ( <div className="header">
        <h1 className="logo">Shopalulu</h1>
        <div className="shopping-nav">
            <img src={shoppingCartLogo} className="shopping-cart"></img>
        </div>
    </div> );
}

export default Header;