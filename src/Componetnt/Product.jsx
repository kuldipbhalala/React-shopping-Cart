import React from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({ items, cart, setCart }) => {
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
                theme="light"
            />
            <div className="container my-5">
                <div className="row">
                    {
                        items.map((product) => {
                            return (
                                <>
                                    <div key={product.id} className="col-lg-4 my-3 col-md-6 text-center">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <Link to={`/product/${product.id}`} style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignContent: 'center',
                                            }}>
                                                <img src={product.imgSrc} className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{product.time}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button className="btn btn-primary mx-3">{product.price}{" "} ₹</button>
                                                <button className="btn btn-warning"
                                                    onClick={() => {
                                                        addToCart(product.id, product.price, product.title, product.description, product.imgSrc)
                                                    }}
                                                >Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
