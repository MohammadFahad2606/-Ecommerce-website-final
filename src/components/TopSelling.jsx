import React, { useState } from "react";
import Card from "./Common/Card";
import { useSelector } from "react-redux";
const TopSelling = () => {
  const data = useSelector((state) => state);
  // console.log(data)
  const [viewAll, setviewAll] = useState(false);
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className=" heading text-2xl font-bold tracking-tight text-black text-center">
          Top Selling
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {viewAll
            ? data?.allproducts.reverse().map((product) => (
                <Card key={product.id} product={product} />
              ))
            : data?.allproducts
                .slice(10,14 )
                .map((product) => <Card key={product.id} product={product} />)}
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        {viewAll ? null : (
          <button
            onClick={() => setviewAll(true)}
            className=" bg-white text-black rounded-full p-4 px-8  border border-black hover:bg-black hover:text-white"
          >
            View All
          </button>
        )}
      </div>
    </>
  );
};

export default TopSelling;
