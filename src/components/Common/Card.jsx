import React from 'react'
import { useNavigate, useParams } from 'react-router';

const Card = ({product}) => {
  const navigate = useNavigate();
  console.log(useParams())

  const productNav = (id) => {
    navigate(`item/${id}`) // Replace with your actual navigation logi
    // item/
  };
  return (
    <div onClick={()=>productNav(product.id)} className="group relative cursor-pointer">
              <img
                alt={product.title}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
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
  )
}

export default Card