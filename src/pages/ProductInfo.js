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
      const productTemp = await getDoc(
        doc(fireDB, "products", params.productid)
      );

      setProduct(productTemp);
    } catch (error) {
      console.log(error);
    }
  }

  return <Layout>ProductInfo</Layout>;
}

export default ProductInfo;
