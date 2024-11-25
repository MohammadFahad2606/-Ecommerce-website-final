import { StarIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../Redux/Action/ActionTypes";
import { useEffect } from "react";
import axios from "axios";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDetail() {
  const staedata = useSelector((state) => state);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
 


 const getData = async () => {
  if(statdata.allproducts.length == 0){
    
    // console.log(statdata)
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



let { itemId } = useParams();
const   productData = data?.allproducts.find((product) => product.id == (itemId));
const {title,category,description,image,price,rating}= productData
const addCart = (productData)=>{
  dispatch({ type: ProductTypes.cartData, payload:productData });
}

  return (
    <div className="bg-white ">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 flex lg:w-[40%] md:w-[60%]  w-full lg:max-w-7xl  lg:gap-x-8 lg:px-8">
          <img
            alt={title}
            src={image}
            className="size-full rounded-lg lg:h-1/6 object-contain lg:block"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {Math.round(price)} $
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <StarIcon
                      key={star}
                      aria-hidden="true"
                      className={classNames(
                        rating.rate > star
                          ? "text-gray-900"
                          : "text-gray-200",
                        "size-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{rating.rate} out of 5 stars</p>
               
                  {rating.count} reviews
                
              </div>
            </div>

            <div className="mt-10">
              <button
                 onClick={() => addCart(productData)}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{description}</p>
              </div>
            </div>

            {/* <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
