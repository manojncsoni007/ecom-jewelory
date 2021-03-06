import "./App.css";
import { Cart, Checkout, Home, Login, Order, Product, Profile, Signup, Wishlist } from "./pages";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { RequiredAuth } from "./components";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product />} />

        <Route path='/cart' element={
          <RequiredAuth>
            <Cart />
          </RequiredAuth>
        } />
        <Route path='/wishlist' element={
          <RequiredAuth>
            <Wishlist />
          </RequiredAuth>
        } />
        <Route path='/profile' element={
          <RequiredAuth>
            <Profile />
          </RequiredAuth>
        } />
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout />
          </RequiredAuth>
        } />
        <Route path='/order' element={
          <RequiredAuth>
            <Order />
          </RequiredAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
