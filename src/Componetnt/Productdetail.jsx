import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Productdetail = ({ cart, setCart }) => {
  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([])

  console.log("jdbenjwfduew", product)

  useEffect(() => {
    const filterproduct = items.filter((product) => product.id == id)
    // console.log(filterproduct);
    setProduct(filterproduct[0])

    const relatedProducts = items.filter((p) => p.category === product.category)
    setRelatedProducts(relatedProducts)
  }, [id, product]);
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    console.log('sajdjkasd', cart)
    setCart([...cart, obj])
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.time}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price}{" "} ₹</button>
          <button className="btn btn-warning"
            onClick={() => {
              addToCart(product.id, product.price, product.title, product.description, product.imgSrc)
            }}
          >Add to cart</button>
        </div>
      </div>
      <h1 className='text-center'>Related product</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>

  )
}

export default Productdetail
