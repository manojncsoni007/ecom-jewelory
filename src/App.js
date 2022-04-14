import "./App.css";
import { Cart, Home, Product } from "./pages";
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path='/product' element={<Product/>} />
      <Route path='/cart' element={<Cart/>}/>
   </Routes>
    </>
   
  );
}

export default App;
