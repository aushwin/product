import { Link } from "react-router-dom"

const Card = ({title,image,price,setProduct,id})=>{
    
    return <Link to={`/Product?id=${id}`}>
    <div className="w-48 h-96 m-2 text-center flex justify-between flex-col hover:bg-gray-200 cursor-pointer">
        <div>
            {title}
        </div>
        <div>
            <img className="w-32 h-60 m-auto" src={image} alt='productimage'/>
        </div>
        <div>
          price - {price}
        </div>
    </div></Link>
}

export default Card