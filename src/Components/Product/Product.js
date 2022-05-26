import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

const Product = ()=>{
    let [searchParams, setSearchParams] = useSearchParams();
    const [data,setData] = useState('')
    const id = searchParams.get('id')
    useEffect(()=>{
        const fetchData = async()=>{
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
          setData(response.data)
        }
        fetchData()
      },[])
    return <div className="h-screen flex justify-center ">
         <div className="w-2/5 h-3/5 m-auto text-center">
        <div>
        {data.title}
        </div>
        <div className="text-center flex justify-center">
            <img className="h-64" src={data.image} alt='' />

        </div>
        <div>
            {data.description}
        </div>

    </div>
    </div>
}

export default Product 