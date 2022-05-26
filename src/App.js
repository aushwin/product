import { AllProducts } from "./Components";
import { Route,Routes } from "react-router-dom";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div className="App">
   
      <Routes>
      <Route path="/Product" element={<Product />} />
      <Route path="/" element={<AllProducts />} />
    </Routes>
    </div>
  );
}

export default App;
