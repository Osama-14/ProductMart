import React from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";

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
          id:doc.id,
          ...doc.data()
        }
        
        usersArray.push(obj);
      });
      console.log(usersArray);

    } catch (error) {
      console.log(error);
    }
  }




  async function addProductData() {

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
