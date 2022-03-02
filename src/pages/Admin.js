import React, { useState,useEffect } from 'react'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Modal } from "react-bootstrap";

import fireDB from "../fireConfig";
import Layout from '../components/Layout';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Admin() {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        imageURL: "",
        category: ""
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getData();
      }, []);
    
      async function getData() {
        try {
          setLoader(true);
    
          const users = await getDocs(collection(fireDB, "products"));
    
          const productsArray = [];
    
          users.forEach((doc) => {
            const obj = {
              id: doc.id,
              ...doc.data(),
            };
    
            productsArray.push(obj);
            setLoader(false);
          });
    
          console.log(productsArray);
    
          setProducts(productsArray);
        } catch (error) {
          console.log(error);
          setLoader(false);
        }
      }

      const editHandler = (item) =>{
          setProduct(item);
          setShow(true)
      }

  return (
    <Layout loader={loader}>
        <h3>Admin Page</h3>
              <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.imageURL} height="80" width="80" />{" "}
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <FaTrash />
                  <FaEdit onClick={() => editHandler(item)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-form">
            {" "}

            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={product.name}
              onChange={(e) => setProduct({ ...product ,name: e.target.value})} />

           
            <input
              type="text"
              className="form-control"
              placeholder="imageUrl"
              value={product.imageURL}
              onChange={(e) => {
                setProduct({...product, imageURL: e.target.value});
              }}
            />
             <input
              type="text"
              className="form-control"
              placeholder="price"
              value={product.price}
              onChange={(e) => {
                setProduct({...product, price: e.target.value});
              }}
            /> 
            <input
            type="text"
            className="form-control"
            placeholder="category"
            value={product.category}
            onChange={(e) => {
              setProduct({...product, category: e.target.value});
            }}
          />
        
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button>Close</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Admin