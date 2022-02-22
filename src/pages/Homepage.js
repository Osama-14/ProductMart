import React from 'react'
import Layout from '../components/Layout'
import { collection, addDoc } from "firebase/firestore"; 
import fireDB from '../fireConfig';


function Homepage() {

  async function addData() {

   await addDoc(collection(fireDB, "users"), {name:'osama', age: 25} )

  }
  return (
   <Layout>
       <h1>Home</h1>

       <button onClick={addData}>ADD DATA TO FIREBASE</button>
   </Layout>
  )
}

export default Homepage