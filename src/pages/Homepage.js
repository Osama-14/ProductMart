import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { FireProduct } from "../Products";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


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

      console.log(productsArray);

      setProducts(productsArray);

    } catch (error) {
      console.log(error);
    }
  }
 

   

  


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
                <div className="m-2 p-1 product position-relative">
                  <div className="product-content">
                    <p>{product.name}</p>
                    <div className="text-center">
                      <img
                        src={product.imageURL}
                        alt=""
                        className="product-img"
                      />
                    </div>
                  </div>

                  <div className="product-actions">
                    <h2>{product.price} Rs/</h2>
                    <div className="d-flex">
                      <button className="mx-2" onClick={()=> getData()}>Add To Cart</button>
                      <button onClick={ () =>{
                        navigate(`/productinfo/${product.id}`)
                      }}>View</button>

                    </div>
                  </div>
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
