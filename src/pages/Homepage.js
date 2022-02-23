import React from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { fireProducts } from "../Products";

function Homepage() {
  async function addData() {
    try {
      await addDoc(collection(fireDB, "users"), { name: "mubeen", age: 22 });
    } catch (error) {
      console.log(error);
    }
  }

  async function getData() {
    try {
      const users = await getDocs(collection(fireDB, "users"), {
        name: "mubeen",
        age: 22,
      });

      const usersArray = [];

      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        usersArray.push(obj);
      });
      console.log(usersArray);
    } catch (error) {
      console.log(error);
    }
  }

  function addProductData() {
    fireProducts.map(async (product) => {
      try {
        await addDoc(collection(fireDB, "products"), product);
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <Layout>
      <h1>Home</h1>

      <button onClick={addData}>ADD DATA TO FIREBASE</button>
      <button onClick={getData}>GET DATA TO FIREBASE</button>
      <button onClick={addProductData}>Product TO FIREBASE</button>
    </Layout>
  );
}

export default Homepage;
