import "./App.css";
import Index from "./routes/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routes
import Cart from "./routes/Cart.jsx";
import Shop from "./routes/Shop.jsx";
import Error from "./routes/Error.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";



function App() {
  const [cart, setCart] = useState([])

  const handleSubmit = (e, product, quantity) => {
    e.preventDefault()

    const newProduct = {
      title: product.title,
      model: product.model,
      price: product.price,
      quantity: quantity,
      id: product.id
    }
    return parseProduct(newProduct)
  }

  const parseProduct = (product) => {
    if (product.quantity < 1) {
      return
    }
    else if (product.quantity > 1) {
      const arr = duplicateProduct(product)
      return addToCart(arr)
    }
    else { return addToCart(product) }
  }

  const duplicateProduct = (product) => {
    let arr = []
    for (let i = 0; i < product.quantity; i++) {
      const dupProduct = { ...product }

      dupProduct.quantity = 1;
      dupProduct.id = crypto.randomUUID();

      arr.push(dupProduct);
    }
    return arr
  }

  const addToCart = (product) => {
    if (product instanceof Array) {
      product.map(((item) => {
        return setCart((currentCart) => [...currentCart, item])
      }))
    }
    else {
      return setCart([...cart, product])
    }
  };

  return (
    <BrowserRouter>
      <section className="app">
        <Header cart={cart} />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop handleSubmit={handleSubmit} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
