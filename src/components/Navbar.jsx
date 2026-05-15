import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart}=useSelector((state)=>state);

  return(
    <div className="flex justify-between w-2/3 p-5 bg-slate-400 rounded-lg mt-0 ">

      
      


      <NavLink to="/">
        <img 
        className="p-1 aspect-auto"
        src="https://m.media-amazon.com/images/G/33/marketing/prime/2022PrimeBrand/Logos/Prime_Logo_RGB_Prime_Blue_MASTER._CB542734779_.png"
        alt="Amazon Prime Logo"
        width={80}  height={50} loading="lazy"/>
      </NavLink>
      <div className="w-full h-full flex justify-between max-w-48  p-2 items-center">
        <NavLink className="font-semibold text-xl hover:text-red-800" to="/">Home</NavLink>
        <NavLink to="/cart" className="font-semibold text-xl hover:text-red-800 z-0">
           <FaShoppingCart/>
        {
          cart.length >0 ?
            <div className="w-4 h-4  absolute flex justify-center items-center z-10  bg-green-400 right-[276px] top-7 cursor-pointer rounded-full">
              <div className=" absolute p-1 text-sm font-bold z-10 text-orange-700 ">
              {cart.length}
              </div>
            </div> :
          null
        }
         </NavLink>
       
      </div>
    </div>
  );
};

export default Navbar;
