import Products from "./productImport.js"
import "./App.css"
import Header from "./components/Header/Header"
import Sidepanel from "./components/Sidepanel/Sidepanel"
import Content from "./components/Content/Content.jsx"
import { useEffect, useState } from "react"

function App() {

  const [ products, setProducts ] = useState('');
  useEffect(() => {
    async function loadData() {
      const productManager = new Products();
      const data = await productManager.readFile('../assets/products.json');
      setProducts(data);
    }

    loadData();
  }, []);

  return <div className="App">
    <Header />
    <Sidepanel productCategories={Object.keys(products)}/>
    <Content />
  </div>
}

export default App
