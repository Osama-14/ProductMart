import React, { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'

function Cartpage() {
  const {cartItems} = useSelector(state =>state.cartReducer);
  const dispatch = useDispatch();


  useEffect( () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

  },[cartItems])
  

  const deleteFromCart = (product) => {
    dispatch({type : "DELETE_FROM_CART", payload: product})

  }

  return (
    <Layout>

      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>

          </tr>
        </thead>

        <tbody>
      {cartItems.map(item=>{
        return  <tr>
              <td><img src={item.imageURL} height="80" width="80" /> </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><FaTrash onClick={()=>deleteFromCart(item)}/></td>

            </tr>
          })}
        </tbody>
      </table>


    </Layout>
  )
}

export default Cartpage