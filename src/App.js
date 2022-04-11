import "./App.css";
import { Home, Product } from "./pages";
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path='/product' element={<Product/>} />
   </Routes>
    </>
   
  );
}

export default App;
