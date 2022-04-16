import "./App.css";
import { Cart, Home, Login, Product, Signup, Wishlist } from "./pages";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>

  );
}

export default App;
