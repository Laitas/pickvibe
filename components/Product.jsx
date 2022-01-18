import React from "react";

const Product = ({ product }) => {
  const { name, category, stock, active } = product;
  return (
    <div className="grid md:grid-cols-5 md:grid-rows-1 grid-rows-5 items-center font-medium bg-white rounded-2xl p-2 my-4">
      <div className="relative md:left-0 md:transform-translate-y-0 md:ml-0 left-1/2 -transform-translate-x-1/2 -ml-14">
        <img
          src="assets/userimg.jpg"
          alt=""
          className="h-14 rounded-full absolute border border-2 border-white -translate-y-1/2"
        />
        <img
          src="assets/userimg.jpg"
          alt=""
          className="h-14 rounded-full absolute left-6 border border-2 border-white -translate-y-1/2"
        />
        <img
          src="assets/userimg.jpg"
          alt=""
          className="h-14 rounded-full absolute left-12 border border-2 border-white -translate-y-1/2"
        />
      </div>
      <div className="flex flex-col items-center md:items-start mt-2">
        <p>{name}</p>
        <p className="text-sm font-normal text-gray-600">{category}</p>
      </div>
      <div className="text-center">
        <p>{stock}</p>
      </div>
      {active ? (
        <div className="flex justify-center">
          <img src="assets/check-square.svg" />
          <p className="ml-4">Active</p>
        </div>
      ) : (
        <div className="flex text-green-600 justify-center">
          <img src="assets/check-square-green.svg" />
          <p className="ml-4">Inactive</p>
        </div>
      )}
      <div className="flex justify-center">
        <div className="flex cursor-pointer">
          <img src="assets/edit.svg" alt="" />
          <p className="ml-2">Edit</p>
        </div>
        <div className="flex ml-4 cursor-pointer text-red-500">
          <img src="assets/trash-2.svg" alt="" />
          <p className="ml-2">Delete</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
