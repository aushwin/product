import axios from "axios"
import {useEffect, useState } from "react"
import Product from "../Product/Product"
import Card from "./Card"

const AllProducts = () =>{
    const [data ,setData] = useState([])
    const [singleProduct,SetSingleProduct] = useState('')
    const [showProduct,setShowProduct] = useState(false)
    
    useEffect(()=>{
      const fetchData = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response.data)
        setData(response.data)
      }
      fetchData()
    },[])

    return <div className="flex flex-wrap">
       {showProduct ? <Product /> : data.map((element)=>{
            return <Card title={element.title} setProduct={SetSingleProduct} image={element.image} price={element.price} />
        })}
    </div>
}

export default AllProducts