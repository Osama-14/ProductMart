import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { FireProducts } from "../Products";
function Homepage({ ...props }) {
  const { imageURL } = FireProducts;

  const [products, setProducts] = useState(FireProducts);

  useEffect(() => {

      getData();
  }, []);

  async function getData() {
    try {
      const users = await getDocs(collection(fireDB, "products"));

      const productsArray = [];

      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productsArray.push(obj);
      });

      // setProducts(productsArray);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(FireProducts);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {products.map((product, ind) => {
            {
              console.log("froooooooo", product.name);
            }

            return (
              <div key={ind} className="col-md-4">
                <div className="m-2 p-1">
                  <p>{product.name}</p>
                  <img
                    src={product.imageURL}
                    alt=""
                    className="product-img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
