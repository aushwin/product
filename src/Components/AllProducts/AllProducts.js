import axios from "axios"
import {useEffect, useState } from "react"
import Card from "./Card"

const AllProducts = () =>{
    const [data ,setData] = useState([])
    
    useEffect(()=>{
      const fetchData = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response.data)
        setData(response.data)
      }
      fetchData()
    },[])

    return <div className="flex flex-wrap">
       { data.map((element)=>{
            return <Card id={element.id} title={element.title} image={element.image} price={element.price} />
        })}
    </div>
}

export default AllProducts