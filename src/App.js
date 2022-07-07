import "./App.css";
import { Cart, Home, Login, Product, Profile, Signup, Wishlist } from "./pages";
import { Route, Routes } from 'react-router-dom';
import { RequiredAuth } from "./components";
import { ToastContainer } from "react-toastify";

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
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
