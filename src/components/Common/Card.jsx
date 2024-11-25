import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ProductTypes } from "../../Redux/Action/ActionTypes";

const Card = ({ product }) => {
  const staedata = useSelector((state) => state);
  // console.log(staedata)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(useParams())

  const productNav = (id) => {
    navigate(`item/${id}`)
    // console.log("ok");
    // item/
  };
const addCart = (product)=>{
    //  console.log(product);
     dispatch({ type: ProductTypes.cartData, payload:product });
  }
  return (
    <div className="group relative cursor-pointer" >
      <ShoppingCartIcon  onClick={() => addCart(product)} className="absolute right-0 top-4 z-50 bottom-1  w-10 bg-white p-2 rounded-full hover:bg-black hover:text-white " />
      <div
        onClick={() => productNav(product.id)}
        className="group relative cursor-pointer"
      >
        <img
          alt={product.title}
          src={product.image}
          className="  z-10 aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />

        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <p className="text-lg p-2 font-bold  text-gray-900">
            {product.price}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
