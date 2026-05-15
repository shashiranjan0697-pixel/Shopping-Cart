
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast"
import { remove } from "../redux/Slices/CartSlice";


  

const CartItem = ({item}) => {

  const dispatch=useDispatch();
  

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed from cart")
  }

  return( 
  <div className="w-full border-b-4 border-gray-400 gap-x-4 flex p-4 justify-center items-center">
    <div className="w-1/1 ">
      <img  src={item.images} 
            alt=""
            width={350} 
            height={350}   
            loading="lazy"/>
    </div>
    <div>
      <h1 className=" font-semibold text-lg text-wrap">{item.title}</h1>
      <p className="text-sm text-gray-500 text-wrap py-2">{item.description}</p>
      <div className="flex justify-between">

        <p className="text-green-500 font-semibold">${item.price}</p>

        <button className="text-gray-500 font-semibold relative hover:text-red-600" onClick={removeFromCart}>
          <FaTrash/>
        </button>
      </div>
    </div>
  </div>
  );
};

export default CartItem;
