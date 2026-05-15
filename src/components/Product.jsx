import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast"
import { remove, add } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart}= useSelector((state)=> state); 
  const dispatch=useDispatch();

  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item Added to cart")
  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item Removed from cart")
  }
  const inCart=cart.some((p)=> p.id==post.id);

  return( 
  <div className="flex flex-col">

    <div >
      <p className=" font-semibold text-lg text-wrap">{post.title}</p>
    </div>
    <p className="text-xs text-gray-500 text-wrap py-2">{post.description}</p>
    <div className="flex justify-center items-center aspect-auto">
      <img src={post.images} width={200} height={200} loading="lazy" 
      className="p-2" />
    </div>
    <div className=" w-full flex justify-between px-2">

      <p className="p-2 text-green-700 font-semibold">${post.price}</p>

      <button className="px-4 bg-slate-200 rounded-full font-semibold hover:text-blue-900"
      onClick={inCart ? (removeFromCart):
        (addToCart)}
      >
        {
          inCart ? 
          "remove from Cart" :
          "Add to Cart  "
          
        }
      </button>
    </div>
  </div>

  );
};

export default Product;
