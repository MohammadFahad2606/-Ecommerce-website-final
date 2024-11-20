import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { ProductTypes } from "../Redux/Action/ActionTypes";
import axios from "axios";
import NewAriv from "./Common/NewAriv";

export default function Product() {
  const dispatch = useDispatch();

 
  const getData = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: ProductTypes.allProduct, payload: data?.data });
    } catch (er) {
      console.log(er);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white">
     <NewAriv/>
    </div>
  );
}
