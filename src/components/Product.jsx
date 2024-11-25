import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../Redux/Action/ActionTypes";
import axios from "axios";
import NewAriv from "./NewAriv";
import TopSelling from "./TopSelling";
export default function Product() {
  const dispatch = useDispatch();
  const statdata = useSelector((state) => state);
  // console.log(statdata)
  const getData = async () => {
    if(!statdata?.allproducts){
      
      console.log(statdata)
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
    <div className="bg-white">
      <NewAriv />
      <TopSelling />
    </div>
  );
}
