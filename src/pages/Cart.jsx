import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import {useSelector} from "react-redux"
import {NavLink} from "react-router-dom"

const Cart = () => {

  const {cart}= useSelector((state)=> state); 
  const [totalAmount, setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc+curr.price, 0));
  },[cart]);

  
  return (

    <div className=" w-full h-full flex justify-center">

      {
        cart.length>0 ? 
        (<div className=" w-2/3 h-full flex p-4 gap-x-12 relative">


          <div className="w-2/3">
            {
            cart.map((item)=>(<CartItem item={item} key={item.id} />))
            }
          </div>

            <div className="mt-12 w-1/3">
              <div>
                <p className="font-semibold text-lg">Your Cart</p>
                <h2 className="text-2xl font-bold">Summary</h2>
                <p className=" font-semibold">Total Items : <span className="font-bold text-lg">{cart.length}</span></p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p >Total Amount : <span className=" text-green-500 font-semibold text-lg">${totalAmount.toFixed(2)}</span></p>
                <button className=" bg-green-400 rounded-full py-2 font-semibold uppercase hover:bg-green-600">Checkout Now</button>
              </div>
            </div>

        </div>) :


        (<div className="h-screen w-screen flex flex-col justify-center gap-y-2 items-center">

          
            <p>No Item Found</p>

            <NavLink to="/">
              <button className="bg-green-500 px-5 py-2 rounded-full font-semibold">Continue Shopping</button>
            </NavLink>
          

        </div>)
      }


    </div>
  );
};

export default Cart;
