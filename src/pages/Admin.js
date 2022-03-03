import React, { useState,useEffect } from 'react'
import { collection, getDocs,setDoc, doc } from "firebase/firestore";
import { Modal } from "react-bootstrap";
import fireDB from "../fireConfig";
import Layout from '../components/Layout';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from "react-toastify";


function Admin() {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [add, setAdd] = useState(false)
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

      const updateProduct = async () => {


        try {
            setLoader(true)
            await setDoc(doc(fireDB, "products", product.id), product)
            getData()
            handleClose()
            toast.success("Products updated succeed");

        } catch (error) {
            toast.error("failed to update");
            setLoader(false)



        }

      }

      const addHandler = () => {
        setAdd(true)
        handleShow();
      }

  return (
    <Layout loader={loader}>
        <div className='d-flex justify-content-between'>
        <h3>Admin Page</h3>
        <button onClick={addHandler} >Add Product</button>
        </div>
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
          <Modal.Title> {add===true ? 'Add product' : 'Edit product'} </Modal.Title>
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
          <button onClick={updateProduct}>Save</button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Admin