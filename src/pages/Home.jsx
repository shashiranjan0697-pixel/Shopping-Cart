import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useSelector } from "react-redux";


const Home = () => {
  const API_URL = "https://dummyjson.com/products";

  const [loading, setLoading]=useState(false);
  const [posts, setPosts]=useState([]);

  async function fetchProductData() {
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      const product=data.products
      console.log(product);
      setPosts(product);
    }
    catch(err){
      console.log("Problem in fetching API.")
      console.log("Real Error : "+ err);
      setPosts([]);
    }
    setLoading(false);
  }

  


  useEffect(()=>{
    fetchProductData();
  },[])


  return (
  <div className="w-2/3 flex flex-wrap">

    {
      loading ? <Spinner/> : 
      posts.length >0 ?
      (posts.map((post)=>(
        <div className="w-[30%] p-4  border-[5px] shadow-lg mx-4 my-8 hover:scale-[1.1] 
        transition-all duration-100 rounded-lg">
          <Product post={post} key={post.id} />
        </div>
      ))):
      <p  className="w-full h-screen flex justify-center items-center">
        <div className=" font-bold text-2xl">No Data Found</div>
      </p>
    }
  </div>
    );
};

export default Home;
