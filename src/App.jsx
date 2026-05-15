import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
