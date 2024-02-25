import React from "react";
import axios from "axios";
import { useState } from "react";



const Show = () => {
  let [product, setProduct] = useState([]);

  let getProduct = () => {
    let api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((product) => {
        setProduct(product.data);
        console.log(product);
      })
      .catch((err) => console.log(err));
  };

  let sendProduct = () => {
    let api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        onClick={getProduct}
        className="m-3 p-3 bg-red-400 rounded-md text-slate-100 w-fit"
      >
        Get Product
      </button>

      <button
        onClick={sendProduct}
        className="m-3 p-3 bg-red-400 rounded-md text-slate-100 w-fit"
      >
        Send Product
      </button>

      <hr className="my-5" />

      <ul>
        {product.length > 0 ? (
          product.map((p) => (
            <li key={p.id} className="m-1 p-5 bg-red-100 rounded-md">{p.title}</li>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </ul>
    </div>
  );
};

export default Show;
