import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useParams } from "react-router-dom";

function ProductInfo() {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.productid));

      setProduct(productTemp.data());
    } catch (error) {
      console.log(error);
    }
  }

  return <Layout>
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">

      {product && (<div>
      <p> <b>{product.name}</b></p>
      <img src={product.imageURL} alt="" className="productinfo-img" />
      <hr />
      <p>{product.discription}</p>
      <div className="d-flex justify-content-end my-3">
        <button>Add To Cart</button>

      </div>
    </div>)}

      </div>
    </div>
    </div>

    
  </Layout>;
}

export default ProductInfo;
