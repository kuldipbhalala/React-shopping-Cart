import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";

const Navbar = ({ setData, cart }) => {
    const location = useLocation()
    const navigate = useNavigate();
    const [searchItem, setSearchItem] = useState('');
    const filterBycategory = (category) => {
        const element = items.filter((product) => product.category === category)
        setData(element)
    }
    const filterByPrice = (price) => {
        const element = items.filter((product) => product.price >= price)
        setData(element)
    }
    const handesumbit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchItem}`)
    }
    return (
        <>
            <header className='sticky-top'>
                <div className="nav-bar">
                    <Link to={'/'} className="brand">E-cart</Link>

                    <form onSubmit={handesumbit} className="search-bar">
                        <input type="text" placeholder='Search Product' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                    </form>
                    <Link to={'/cart'} className="cart">
                        <button type="button" className="btn btn-primary position-relative">
                            <GiShoppingCart style={{fontSize:'1.5rem'}} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>

                    </Link>
                </div>

                {
                    location.pathname == '/' && (
                        <div className="nav-bar-wrapper">
                            <div className="items">Filerby {"->"}</div>
                            <div className="items" onClick={() => setData(items)}>No Filter</div>
                            <div className="items" onClick={() => filterBycategory('Mobiles')}>Moblies</div>
                            <div className="items" onClick={() => filterBycategory('Laptops')} > Laptops</div>
                            <div className="items" onClick={() => filterBycategory('Tablets')} > Tablets</div>
                            <div className="items" onClick={() => filterByPrice(29999)}>{">="}29999</div>
                            <div className="items" onClick={() => filterByPrice(49999)}>{">="}49999</div>
                            <div className="items" onClick={() => filterByPrice(59999)}>{">="}59999</div>
                            <div className="items" onClick={() => filterByPrice(9999)}>{">="}9999</div>
                        </div >
                    )
                }
            </header >
        </>
    )
}

export default Navbar
