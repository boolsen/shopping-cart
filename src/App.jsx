import Products from "./productImport.js"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Sidepanel from "./components/Sidepanel/Sidepanel.jsx"
import Content from "./components/Content/Content.jsx"
import { useEffect, useState } from "react"
import { createContext, useContext } from 'react';

function App() {

  const [ products, setProducts ] = useState(null);
  const [ selectedCategory, setSelectedCategory ] = useState('shoes');
  const ShoppingCartContext = createContext(null);
  useEffect(() => {
    async function loadData() {
      const productManager = new Products();
      const data = await productManager.readFile('../assets/products.json');
      setProducts(data);
    }

    loadData();
  }, []);

  return <div className="App">
    <ShoppingCartContext>
      <Header />
    </ShoppingCartContext>
    <Sidepanel 
        productCategories={products ? Object.keys(products) : []} 
        setSelectedCategory = {setSelectedCategory
      }/>
    <Content 
        products={products ? products[selectedCategory] : null}
        selectedCategory={selectedCategory}
      />
  </div>
}

export default App
