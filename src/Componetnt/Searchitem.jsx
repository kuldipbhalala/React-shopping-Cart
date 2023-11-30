import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
const Searchitem = ({cart,setCart}) => {
    // console.log('sabjdnsadas', useParams());
    const [filterData, setFilterData] = useState([]);
    const { term } = useParams();

    useEffect(() => {
        const filteredData = () => {
            const data = items.filter((Product) => Product.title.toLocaleLowerCase().includes(term.toLowerCase()));
            // console.log(filterData, 'dusnaudnwq')
            setFilterData(data)
        }
        filteredData();
    }, [term]);

    return (
        <Product cart={cart} setData={setCart} items={filterData} />
    )
}

export default Searchitem
