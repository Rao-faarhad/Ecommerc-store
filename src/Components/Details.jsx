import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productContext } from "../utils/Context";
// import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
    const navigate= useNavigate();
    // now we save data to our localstorage data base
    const [products, setProducts]= useContext(productContext);
  
    const [product, setProduct] = useState(null);
     const {id} = useParams();
     console.log(id)
    
    // hum iss section ko commit kr rhy ha qw ky api ky hum na api sa data ni lana ha..abi
    // const getsingleproduct = async () => {
    //     try {
    //         const  { data } =await axios.get(`/products/${id}`)
    //         setProduct(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        if (!product) {
            setProduct(products.filter((p) => p.id == id)[0]);
        }
        // getsingleproduct();   ya us wkt cchiya hogi jb hum api sa call kry gy
    }, []);

    //delete btn ky lia
    const  productDeleteHandler = (id) => {
        const FilteredProducts =products.filter((p) => p.id !== id);
        setProducts(FilteredProducts);
        localStorage.setItem("products", JSON.stringify(FilteredProducts));
        navigate("/");
    }
    

    return( product ?
        <div className="w-[70%] h-full bg-white-600 border container flex  justify-center items-center m-auto p-[10%]">
            <img  className="w-[50%] h-[70%] object-contain ml-30  "
                src={`${product.image}`}/>
            <div className="content bg-purple-100 w-[35%] h-[70%] mr-[20%] rounded-md mr-20">
                 <h1 className="text-3xl text-zinc-500 font-semibold">{product.title}</h1>
                 <h3 className="text-zinc-500 font-semibold">{product.category}</h3>
                <h2 className="font-semibold text-red-500"> ${product.price}</h2>
                <p className="text-zinc-500 mb-[5%]">{product.description}</p>
                <Link to={`/edit/${product.id}`} className="  px-2 mr-3 border border-blue-500  text-blue 200 font-semibold rounded">Edit...</Link>
                    
                    {/* //now we make delete funcaniolaty */}
                <button onClick={()=> productDeleteHandler(products.id)}
                 className="px-2 border border-red-500  text-blue 200 font-semibold rounded">Delete
                </button >
                 


            </div>
            

             
            
        </div>: <Loading/>

    )



}

export default Details;