import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Common/Card";
import axios from "axios";
import { ProductTypes } from "../Redux/Action/ActionTypes";
const NewArrivalsPage = () => {
    const dispatch = useDispatch();
  const statdata = useSelector((state) => state);
  const data = useSelector((state) => state);
//   console.log(data)
  const getData = async () => {
    if(!statdata?.allproducts){
      
    //   console.log(statdata)
      try {
        const data = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: ProductTypes.allProduct, payload: data?.data });
      } catch (er) {
        console.log(er);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className=" heading text-2xl font-bold tracking-tight text-black text-center">
          New Arrivals
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          { data?.allproducts.map((product) => (
                <Card  key={product.id} product={product} />
              ))
            }
        </div>
      </div>
      
    </>
  );
};

export default NewArrivalsPage;

// export default NewArrivalsPage
