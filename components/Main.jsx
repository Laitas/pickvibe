import React from "react";
import Product from "./Product";
const products = [
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: false,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: false,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: true,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: false,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: false,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: true,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: false,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: false,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: false,
  },
  {
    name: "Sony Master Series A9G",
    category: "Electronic",
    stock: 183,
    active: true,
  },
];
const Main = () => {
  return (
    <main className="">
      <div className="grid md:grid-cols-5 p-2 my-8 font-medium">
        <p className="text-center md:text-left">Images</p>
        <p className="text-center md:text-left">Product name</p>
        <p className="text-center">Stock</p>
        <p className="text-center">Status</p>
        <p className="text-center">Actions</p>
      </div>
      <div className="">
        {products.map((product, id) => (
          <Product product={product} key={id} />
        ))}
      </div>
    </main>
  );
};

export default Main;
