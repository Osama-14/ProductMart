import React,{useState} from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { fireProducts } from "../Products";

function Homepage() {

  const [products, setProducts] = useState([])
  

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

      setProducts(productsArray)
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <Layout>
      <h1>Home</h1>

      
    </Layout>
  );
}

export default Homepage;
