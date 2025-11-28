import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./components/Data";
import { useState } from "react";
import ListOfProducts from "./components/ListOfProducts";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Customers from "./components/Customers";
import ProductDetails from "./components/ProductDetails";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  const [product, setProduct] = useState(products);
  const [sum, setSum] = useState(0);

  const handleIncrement = (id) => {
    setProduct(
      product.map((elt) => {
        if (elt.id === id) {
          return { ...elt, qte: elt.qte + 1 };
        }
        return elt;
      })
    );
  };
  const handleDecrement = (id) => {
    setProduct(
      product.map((elt) => {
        if (elt.id === id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        }
        return elt;
      })
    );
  };

  const handleDelete = (id) => {
    setProduct(product.filter((elt) => elt.id !== id));
  };

  const handleSumIncrement = (price) => {
    setSum(sum + price);
  };
  const handleSumDecrement = (article) => {
    if (article.qte > 0) {
      setSum(sum - article.price);
    }
  };

  const handleSumDelete = (article) => {
    setSum(sum - article.price * article.qte);
  };

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={
            <ListOfProducts
              product={product}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
              sum={sum}
              handleSumIncrement={handleSumIncrement}
              handleSumDecrement={handleSumDecrement}
              handleSumDelete={handleSumDelete}
            />
          }
        />
        <Route path="/customers" element={<Customers />} />
        <Route
          path="/products/:id"
          element={<ProductDetails product={product} />}
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
