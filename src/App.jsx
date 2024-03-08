import "./App.css";
import Index from "./routes/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routes
import Cart from "./routes/Cart.jsx";
import Shop from "./routes/Shop.jsx";
import Error from "./routes/Error.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <section className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
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
