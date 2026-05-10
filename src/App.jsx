import Products from "./productImport.js"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Sidepanel from "./components/Sidepanel/Sidepanel.jsx"
import Content from "./components/Content/Content.jsx"
import { useEffect, useState } from "react"
import { createContext, useContext } from 'react';
import { CartContext } from "./CartContext.js"

function App() {

  const [ products, setProducts ] = useState(null);
  const [ selectedCategory, setSelectedCategory ] = useState('shoes');
  const [ cartItems, setCartItems ] = useState([]);

  useEffect(() => {
    async function loadData() {
      const productManager = new Products();
      const data = await productManager.readFile('../assets/products.json');
      setProducts(data);
    }

    loadData();
  }, []);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);

      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }

      const id = crypto.randomUUID();

      return [...prevItems, { ...product, quantity: 1, id }];
    });
  }

  function incrementCartQuantity(id) {
    setCartItems((prevItems) => 
      prevItems.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementCartQuantity(id) {
    setCartItems((prevItems) => 
      prevItems.map((item) => 
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      )
    );
  }

  return <div className="App">
    <CartContext.Provider value={{ incrementCartQuantity, decrementCartQuantity }} >
      <Header cartItems={cartItems} />
    </CartContext.Provider>
    <Sidepanel 
        productCategories={products ? Object.keys(products) : []} 
        setSelectedCategory = {setSelectedCategory
      }/>
    <CartContext.Provider value={{addToCart}}>
      <Content 
          products={products ? products[selectedCategory] : null}
          selectedCategory={selectedCategory}
        />
    </CartContext.Provider>
    {
      cartItems.map((product) => {
        <>
          <p>{product.name}</p>
          <p>blabla
          </p>
        </>

      })
    }
  </div>
}

export default App
