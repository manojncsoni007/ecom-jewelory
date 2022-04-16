import "./App.css";
import { Cart, Home, Product, Wishlist } from "./pages";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
    </>

  );
}

export default App;
